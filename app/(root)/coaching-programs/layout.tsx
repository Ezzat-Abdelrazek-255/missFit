type CoachingProgramsLayoutProps = {
  children: React.ReactNode;
};
export default function CoachingProgramsLayout({
  children,
}: CoachingProgramsLayoutProps) {
  return (
    <main className="px-[var(--container-padding-x)] py-[var(--container-padding-y)] text-[1.6rem] leading-[3.2rem] text-black sm:text-[1.2rem] sm:leading-[2.4rem] md:text-[1.8rem]">
      {children}
    </main>
  );
}
