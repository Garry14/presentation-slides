import Link from "next/link";
import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  nextUrl?: string;
  prevUrl?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  nextUrl,
  prevUrl,
}) => {
  return (
    <div className="p-3 h-screen relative">
      <div className="rounded-lg bg-blue-900 h-full w-full">
        {children}
        <div className="absolute w-full bottom-[35px] left-0 flex justify-between items-center p-[50px]">
          <div className="">
            {prevUrl !== undefined && <Link href={prevUrl}>Prev</Link>}
          </div>
          <div className="">
            {nextUrl !== undefined && <Link href={nextUrl}>Next</Link>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
