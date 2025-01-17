type CoachingProgramsLayoutProps = {
  children: React.ReactNode;
};
export default function CoachingProgramsLayout({
  children,
}: CoachingProgramsLayoutProps) {
  return (
    <main className="text-[1.6rem] leading-[3.2rem] text-black">
      {children}
    </main>
  );
}
