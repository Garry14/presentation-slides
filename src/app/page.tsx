import PageLayout from "@/components/PageLayout";
const Home = () => {
  return (
    <PageLayout nextUrl="slide2">
      <div className="pt-[125px] px-[78px]">
        <h1 className="text-[100px] font-mono tracking-tighter leading-tight">GraphQL</h1>
        <h2 className="text-[95px] font-mono tracking-tighter">Untuk Frontend</h2>
        <h3 className="text-[40px] font-mono text-green-400">Narasumber: Garry</h3>
      </div>
    </PageLayout>
  );
};

export default Home;
