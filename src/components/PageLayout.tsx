const PageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="p-3 h-screen relative">
      <div className="rounded-lg bg-blue-900 h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
