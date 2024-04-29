const Section = ({ children }: { children: React.ReactNode }) => (
  <section className={`mx-auto w-full space-y-3 px-6 py-8 lg:max-w-[60%]`}>
    {children}
  </section>
);

export default Section;
