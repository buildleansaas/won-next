import sanityClient from "@sanity/client";

const sanity = sanityClient({
    projectId: "pti3ldmn",
    dataset: "production",
    useCdn: false,
});

console.log(sanity)

export default sanity;