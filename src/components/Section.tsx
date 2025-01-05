const Section = ({ children }: { children: React.ReactNode }) => (
  <section className={`mx-auto w-full space-y-8 px-6 py-12 lg:max-w-[60%]`}>
    {children}
  </section>
);

export default Section;
