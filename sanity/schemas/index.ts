import { homeSchemas } from "./home";
import { sharedSchemas } from "./shared";

const schemas = [...sharedSchemas, ...homeSchemas];

export default schemas;
