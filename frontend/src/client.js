import createClient from "@sanity/client";

const client = createClient({
    projectId: "tiyjjcyb",
    dataset: "production",
    apiVersion: "2023-02-10",
    useCdn: false
});

export default client;