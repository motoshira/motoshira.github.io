const Section = ({ children }: { children: React.ReactNode }) => (
  <section className={`mx-auto w-full space-y-2 px-6 lg:max-w-[40%]`}>
    {children}
  </section>
);

export default Section;
