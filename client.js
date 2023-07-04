import { GraphQLClient } from "graphql-request";

export const graphcms = new GraphQLClient(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clh33vuv54q2e01ta8p58cwvc/master",
    {
        headers:{},
    }
);