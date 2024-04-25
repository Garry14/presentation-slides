const PageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="p-3 h-screen relative">
      <div className="rounded-lg bg-blue-900 max-h-screen h-full">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
