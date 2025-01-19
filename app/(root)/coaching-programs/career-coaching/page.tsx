import CoachingProgram from "@/components/coaching-programs/shared/coaching-program";
import { CAREER_COACHING_QUERY } from "@/sanity/lib/queries";

const CareerCoachingPage = async () => {
  return <CoachingProgram query={CAREER_COACHING_QUERY} />;
};

export default CareerCoachingPage;
