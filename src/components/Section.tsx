const Section = ({ children }: { children: React.ReactNode }) => (
  <section className={`w-full space-y-2 lg:max-w-[40%] mx-auto px-6`}>
    {children}
  </section>
);

export default Section;
