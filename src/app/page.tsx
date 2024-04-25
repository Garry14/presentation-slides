import PageLayout from "@/components/PageLayout";
const Home = () => {
  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold">Home</h1>
        <p className="text-lg">Welcome to the home page</p>
      </div>
    </PageLayout>
  );
};

export default Home;
