import sanityClient from "@sanity/client";

const sanity = sanityClient({
    projectId: "pti3ldmn",
    dataset: "production",
    token: "sk1Kq2izoNSUnhlhK0EdFTBfbJN3yW0NycCdu8Bv2rswcSFPgjnQPpCUsyt6FTUdt8LnePZZrKvmOFhn8Di8wf89lG27gdBftjJz7FPjPAzkiJzuM9mSFUHnWT8sJzgbAUoPIDJSZ0uF646tykjTRVtW96WLvRg4SoW9LJawXX4UxdrPl9U9",
    useCdn: false,
});

console.log(sanity)


export default sanity;