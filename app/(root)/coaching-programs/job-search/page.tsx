import CoachingProgram from "@/components/coaching-programs/shared/coaching-program";
import { JOB_SEARCH_QUERY } from "@/sanity/lib/queries";

const JobSearchPage = () => {
  return <CoachingProgram query={JOB_SEARCH_QUERY} />;
};

export default JobSearchPage;
