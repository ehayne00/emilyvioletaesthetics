/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!, $firstName: String!) {
    getProfile(id: $id, firstName: $firstName) {
      id
      firstName
      lastName
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: TableProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
      }
      nextToken
    }
  }
`;
