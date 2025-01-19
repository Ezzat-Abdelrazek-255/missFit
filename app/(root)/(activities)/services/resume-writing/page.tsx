import Activity from "@/components/activity/activity";
import { RESUME_WRITING_QUERY } from "@/sanity/lib/queries";

const ResumeWritingPage = () => {
  return <Activity query={RESUME_WRITING_QUERY} />;
};

export default ResumeWritingPage;
