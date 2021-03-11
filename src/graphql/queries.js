/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAmplifyNetbox3 = /* GraphQL */ `
  query GetAmplifyNetbox3($id: ID!) {
    getAmplifyNetbox3(id: $id) {
      id
      systemIdentifier
      clientId
      createdAt
      updatedAt
    }
  }
`;
export const listAmplifyNetbox3s = /* GraphQL */ `
  query ListAmplifyNetbox3s(
    $filter: ModelAmplifyNetbox3FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAmplifyNetbox3s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        systemIdentifier
        clientId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
