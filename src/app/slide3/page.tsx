import PageLayout from "@/components/PageLayout";
import ApolloIcon from "@/components/icons/ApolloIcon";

const Slide3 = () => {
  return (
    <PageLayout nextUrl="slide4" prevUrl="slide2">
      <div className="flex justify-start items-center h-full px-[78px]">
        <h1 className="text-[75px] font-mono tracking-tighter leading-tight">
          Cara Teknis Menggunakan GraphQL{"\n"}
          <span className="text-green-400 text-[60px]">dengan Apollo</span>
        </h1>
      </div>
    </PageLayout>
  );
};

export default Slide3;
