import { GraphQLClient } from "graphql-request";

export const graphcms = new GraphQLClient(
    "https://app.hygraph.com/5a90f2dfb23a4b099f73111c916c995d/master/content/01062c5fb64f49ea96434bd9a62873b9/view/30a581e87669443592aface98277ac28",
    {
        headers:{},
    }
);