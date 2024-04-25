import Link from "next/link";
import { ReactNode } from "react";
import NextPage from "./icons/NextPage";

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
          <div className="rotate-180">
            {prevUrl !== undefined && (
              <Link href={prevUrl}>
                <NextPage />
              </Link>
            )}
          </div>
          <div className="">
            {nextUrl !== undefined && (
              <Link href={nextUrl}>
                <NextPage />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
