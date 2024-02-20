import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});
const textFonts = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="flex items-center mb-4 border shadow-sm p-4 bg-blue-900 text-white rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          Task Management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Task Master helps team to move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          Work Forward
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFonts.className
        )}
      >
        Manage projects , task and reach new productivity peaks.Whether in
        skyscrapers or home offices, your team&apos;s work style is
        distinctive—achieve it all with Task.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Sign Up</Link>
      </Button>
    </div>
  );
};
export default MarketingPage;
