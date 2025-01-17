import { workshopsSchemas } from "./workshops";
import { servicesSchemas } from "./services";
import { coachingProgramsSchemas } from "./coaching-programs";
import { homeSchemas } from "./home";
import { sharedSchemas } from "./shared";
import { resourcesSchemas } from "./resources";

const schemas = [
  ...sharedSchemas,
  ...homeSchemas,
  ...coachingProgramsSchemas,
  ...servicesSchemas,
  ...workshopsSchemas,
  ...resourcesSchemas,
];

export default schemas;
