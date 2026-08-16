import z from "zod";

export const sendMessageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type SendMessageSchema = z.infer<typeof sendMessageSchema>;

export default SendMessageSchema;
