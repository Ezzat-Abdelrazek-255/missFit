import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

export default defineConfig({
  name: "default",
  title: "MissFit",

  projectId: "yq496mon",
  dataset: "production",

  basePath: "/admin",

  plugins: [structureTool()],

  schema: { types: schemas },
});
