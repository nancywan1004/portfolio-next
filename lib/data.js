import { gql, GraphQLClient } from 'graphql-request';

export const getPortfolioAndPosts = async () => {
    const endpoint = 'https://api-us-west-2.graphcms.com/v2/cktqefps01zpk01wb1cs6floi/master'

    const graphQLClient = new GraphQLClient(endpoint)
    const query = gql`
    {
      portfolios {
        title
        tags
        slug
        description
        startDate
        endDate
        coverImage {
          url
          width
          height
        }
    
      }
      posts {
        title
        slug
        description
        date
        id
        tags
      }
    }`;
  
    return await graphQLClient.request(query);
}

export const getPortfolioItems = async () => {
    const endpoint = 'https://api-us-west-2.graphcms.com/v2/cktqefps01zpk01wb1cs6floi/master'

    const graphQLClient = new GraphQLClient(endpoint)
    const query = gql`
    {
      portfolios {
        title
        tags
        slug
        description
        content
        startDate
        endDate
        url
        coverImage {
          url
          width
          height
        }
    
      }
    }`;
  
    return await graphQLClient.request(query).then(resp => resp.portfolios).catch((err) => console.log(err));
}

export const getPosts = async () => {
    const endpoint = 'https://api-us-west-2.graphcms.com/v2/cktqefps01zpk01wb1cs6floi/master'

    const graphQLClient = new GraphQLClient(endpoint)
    const query = gql`
    {
        posts {
            title
            slug
            description
            date
            id
            tags
        }
    }`;
  
    return await graphQLClient.request(query).then(resp => resp.posts).catch((err) => console.log(err));
}

export const getPost = async (slug) => {
    const endpoint = 'https://api-us-west-2.graphcms.com/v2/cktqefps01zpk01wb1cs6floi/master'

    const graphQLClient = new GraphQLClient(endpoint)
    const query = gql`
    query getPost($slug: String) {
        posts(where: {slug: $slug}) {
          title
          slug
          content
          description
          date
          id
          tags
        }
      }`;

      const variables = {
          slug
      }
  
    return await graphQLClient.request(query, variables).then(resp => resp.posts).catch((err) => console.log(err));
}