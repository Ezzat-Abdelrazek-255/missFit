import CoachingProgram from "@/components/coaching-programs/shared/coaching-program";
import { EXECUTIVE_COACHING_QUERY } from "@/sanity/lib/queries";

const ExecutiveCoaching = async () => {
  return <CoachingProgram query={EXECUTIVE_COACHING_QUERY} />;
};

export default ExecutiveCoaching;
