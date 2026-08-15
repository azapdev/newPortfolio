import React, { useEffect, useRef } from 'react';

/**
 * ParticleCanvas Component
 * Renders an interactive HTML5 canvas background featuring a dynamic constellation mesh:
 * - Floating colored nodes that drift across the hero section
 * - Proximity-based lines connecting nearby particles
 * - Interactive physics that repel particles from the cursor and draw elastic connection rays
 */
export default function ParticleCanvas() {
  // Reference to the canvas DOM element
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 2D Rendering Context
    const ctx = canvas.getContext('2d');
    if (!ctx) return; // Guard for non-canvas environments like JSDOM test runners

    let animationFrameId;
    // Set dynamic canvas dimensions based on parent container size
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth || 800);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight || 600);

    // Accent color palette aligned with the brand design system
    const colors = ['#2DA8A0', '#7B61FF', '#3AAFA9', '#FF8A65', '#4CAF7D'];

    // Track mouse coordinates for interactive particle physics
    const mouse = {
      x: null,
      y: null,
      radius: 160 // Influence radius around the cursor
    };

    /**
     * Updates mouse position relative to canvas bounding box
     */
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    /**
     * Resets mouse coordinates when the cursor leaves the window
     */
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    /**
     * Handles window resizing and re-initializes particle positions
     */
    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth || 800;
      height = canvas.height = canvas.parentElement.offsetHeight || window.innerHeight || 600;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    /**
     * Particle Class
     * Represents a single autonomous node with position, velocity, and visual styles
     */
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 2;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.8; // Horizontal drift velocity
        this.vy = (Math.random() - 0.5) * 0.8; // Vertical drift velocity
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.5 + 0.4;
      }

      /**
       * Draws the particle on the 2D canvas with specular soft glow
       */
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }

      /**
       * Updates position and applies repulsion force when near mouse
       */
      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce particles off container walls
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Apply interactive magnetic repulsion from mouse cursor
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const maxDistance = mouse.radius;
            const force = (maxDistance - distance) / maxDistance;
            const directionX = forceDirectionX * force * 3;
            const directionY = forceDirectionY * force * 3;

            this.x -= directionX;
            this.y -= directionY;
          }
        }
      }
    }

    let particles = [];
    // Calculate optimal particle density based on screen area
    const particleCount = Math.min(Math.floor((width * height) / 12000), 90);

    /**
     * Initializes the particle array
     */
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    initParticles();

    /**
     * Calculates distance between pairs of particles and draws connective lines
     */
    const connectParticles = () => {
      if (!ctx) return;
      for (let a = 0; a < particles.length; a++) {
        // Inter-particle connections
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 130) {
            const opacityValue = (1 - distance / 130) * 0.28;
            ctx.strokeStyle = '#2DA8A0';
            ctx.globalAlpha = opacityValue;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }

        // Particle-to-mouse connection rays
        if (mouse.x !== null && mouse.y !== null) {
          const dx = particles[a].x - mouse.x;
          const dy = particles[a].y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const opacityValue = (1 - distance / mouse.radius) * 0.45;
            ctx.strokeStyle = particles[a].color;
            ctx.globalAlpha = opacityValue;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    };

    /**
     * Main animation render loop using requestAnimationFrame
     */
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Update and draw all particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      // Draw connective mesh lines
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup event listeners and animation frame on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 w-full h-full"
      style={{ opacity: 0.85 }}
    />
  );
}
