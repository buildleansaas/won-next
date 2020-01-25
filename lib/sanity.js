import sanityClient from "@sanity/client";

const sanity = sanityClient({
    projectId: "pti3ldmn",
    dataset: "production",
    useCdn: false,
});


export default sanity;