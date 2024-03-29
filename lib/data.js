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
      portfolios(orderBy: endDate_DESC) {
        createdAt
        title
        tags
        slug
        description
        content
        startDate
        endDate
        coverImage {
          url
          width
          height
        }
    
      }
    }`;
  
    return await graphQLClient.request(query).then(resp => resp.portfolios).catch((err) => console.log(err));
}

export const getPortfolioItem = async (slug) => {
  const endpoint = 'https://api-us-west-2.graphcms.com/v2/cktqefps01zpk01wb1cs6floi/master'

  const graphQLClient = new GraphQLClient(endpoint)
  const query = gql`
  query getPortfolio($slug: String) {
    portfolios(where: {slug: $slug}) {
      title
      slug
      content
      description
      id
      tags
      docUrl
      appUrl
      demoUrl
      role {
        html
      }
      passcode
    }
  }`;

  const variables = {
    slug
}

  return await graphQLClient.request(query, variables).then(resp => resp.portfolios).catch((err) => console.log(err));
}

export const getPreviousPortfolioItem = async (id) => {
  const endpoint = 'https://api-us-west-2.graphcms.com/v2/cktqefps01zpk01wb1cs6floi/master'
  const graphQLClient = new GraphQLClient(endpoint)
  const query = gql`
  query getPortfolio($id: String) {
    portfolios(orderBy: endDate_DESC, first: 1, before: $id) {
      slug
    }
  }`;

  const variables = {
    id
}

  return await graphQLClient.request(query, variables).then(resp => resp.portfolios).catch((err) => console.log(err));
}

export const getNextPortfolioItem = async (id) => {
  const endpoint = 'https://api-us-west-2.graphcms.com/v2/cktqefps01zpk01wb1cs6floi/master'
  const graphQLClient = new GraphQLClient(endpoint)
  const query = gql`
  query getPortfolio($id: String) {
    portfolios(orderBy: endDate_DESC, first: 1, after: $id) {
      slug
    }
  }`;

  const variables = {
    id
}

  return await graphQLClient.request(query, variables).then(resp => resp.portfolios).catch((err) => console.log(err));
}

export const getPosts = async () => {
    const endpoint = 'https://api-us-west-2.graphcms.com/v2/cktqefps01zpk01wb1cs6floi/master'

    const graphQLClient = new GraphQLClient(endpoint)
    const query = gql`
    {
        posts(orderBy: date_DESC) {
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
        content {
          html
        }
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

export const getPreviousPostItem = async (id) => {
  const endpoint = 'https://api-us-west-2.graphcms.com/v2/cktqefps01zpk01wb1cs6floi/master'
  const graphQLClient = new GraphQLClient(endpoint)
  const query = gql`
  query getPost($id: String) {
    posts(orderBy: date_DESC, first: 1, before: $id) {
      slug
    }
  }`;

  const variables = {
    id
}

  return await graphQLClient.request(query, variables).then(resp => resp.posts).catch((err) => console.log(err));
}

export const getNextPostItem = async (id) => {
  const endpoint = 'https://api-us-west-2.graphcms.com/v2/cktqefps01zpk01wb1cs6floi/master'
  const graphQLClient = new GraphQLClient(endpoint)
  const query = gql`
  query getPost($id: String) {
    posts(orderBy: date_DESC, first: 1, after: $id) {
      slug
    }
  }`;

  const variables = {
    id
}

  return await graphQLClient.request(query, variables).then(resp => resp.posts).catch((err) => console.log(err));
}


export const getResumeFile = async () => {
  const endpoint = 'https://api-us-west-2.graphcms.com/v2/cktqefps01zpk01wb1cs6floi/master'

  const graphQLClient = new GraphQLClient(endpoint)
  const query = gql`
  {
    resumes {
      resumeFile {
        url
      }
    }
  }
 `;

  return await graphQLClient.request(query).then(resp => resp.resumes).catch((err) => console.log(err));
}
