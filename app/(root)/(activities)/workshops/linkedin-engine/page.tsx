import Activity from "@/components/activity/activity";
import { LINKEDIN_DRILL_QUERY } from "@/sanity/lib/queries";

const LinkedinDrillPage = () => {
  return <Activity query={LINKEDIN_DRILL_QUERY} />;
};

export default LinkedinDrillPage;
