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
        {prevUrl !== undefined && (
          <div className="">
            <Link href={prevUrl}>Prev</Link>
          </div>
        )}
        {nextUrl !== undefined && (
          <div className="">
            <Link href={nextUrl}>Next</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageLayout;
