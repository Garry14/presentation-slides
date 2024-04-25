import PageLayout from "@/components/PageLayout";
const Slide2 = () => {
  return (
    <PageLayout nextUrl="slide3" prevUrl="/">
      <div className="pt-[125px] px-[78px]">
        <h1 className="text-[100px] font-mono tracking-tighter leading-tight">
          Slide 2
        </h1>
      </div>
    </PageLayout>
  );
};

export default Slide2;
