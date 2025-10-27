import { createClient } from "@sanity/client";

const sanity = createClient({
  projectId: "pti3ldmn",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: false,
});

export default sanity;
