import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "yq496mon",
  dataset: "production",
});
