import PageLayout from "@/components/PageLayout";
import Link from "next/link";

const Slide4 = () => {
  return (
    <PageLayout nextUrl="slide4" prevUrl="slide2">
      <div className="pt-[125px] px-[78px]">
        <h1 className="text-[45px] font-mono tracking-tighter leading-tight">
          1. Akses{" "}
          <Link href="http://localhost:4000" className="text-green-400" target="_">
            API GraphQL-nya
          </Link>{" "}
          terlebih dahulu
        </h1>
      </div>
    </PageLayout>
  );
};

export default Slide4;
