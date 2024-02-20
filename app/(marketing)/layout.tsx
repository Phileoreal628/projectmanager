import { Footer } from "./_components/footer";
import { NavBar } from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
      <NavBar />
      <main className="bg-slate-100 pt-40 pb-20">{children}</main>
       <Footer />
    </div>
  );
};

export default MarketingLayout;
