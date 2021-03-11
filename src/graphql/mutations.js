/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createAmplifyNetbox3 = /* GraphQL */ `
  mutation CreateAmplifyNetbox3(
    $input: CreateAmplifyNetbox3Input!
    $condition: ModelAmplifyNetbox3ConditionInput
  ) {
    createAmplifyNetbox3(input: $input, condition: $condition) {
      id
      systemIdentifier
      clientId
      createdAt
      updatedAt
    }
  }
`;
export const updateAmplifyNetbox3 = /* GraphQL */ `
  mutation UpdateAmplifyNetbox3(
    $input: UpdateAmplifyNetbox3Input!
    $condition: ModelAmplifyNetbox3ConditionInput
  ) {
    updateAmplifyNetbox3(input: $input, condition: $condition) {
      id
      systemIdentifier
      clientId
      createdAt
      updatedAt
    }
  }
`;
export const deleteAmplifyNetbox3 = /* GraphQL */ `
  mutation DeleteAmplifyNetbox3(
    $input: DeleteAmplifyNetbox3Input!
    $condition: ModelAmplifyNetbox3ConditionInput
  ) {
    deleteAmplifyNetbox3(input: $input, condition: $condition) {
      id
      systemIdentifier
      clientId
      createdAt
      updatedAt
    }
  }
`;
