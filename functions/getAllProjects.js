import { gql, GraphQLClient } from "graphql-request";


const graphcms = new GraphQLClient("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clh33vuv54q2e01ta8p58cwvc/master");


export const getAllProjects = async () => {
    const getAllProjectsQuery = gql`
    {
      projects {
        id
        title
        description
        image {
          url
        }
        source
        tags
      }
    }
    `;


    const { projects } = await graphcms.request(getAllProjectsQuery);

    return projects;
};