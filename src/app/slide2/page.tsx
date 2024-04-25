import PageLayout from "@/components/PageLayout";
const Slide2 = () => {
  return (
    <PageLayout nextUrl="slide3" prevUrl="/">
      <div className="pt-[125px] px-[78px]">
        <h1 className="text-[50px] font-mono tracking-tighter leading-tight">
          Mengapa Pakai GraphQL?
        </h1>
        <div className="font-mono text-[30px] mt-[14px]">
            <ol>
                <li>1. Response API dikendalikan di sisi klien</li>
                <li>2. Performance</li>
                <li>3. Strongly Typed Schema</li>
                <li>4. Mendukung Realtime</li>
                <li>5. API Gateway</li>
            </ol>
        </div>
      </div>
    </PageLayout>
  );
};

export default Slide2;
