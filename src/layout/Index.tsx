import AppRouter from "../Routes/AppRouter";
import Footer from "./Footer";
import Header from "./header";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default Index;
