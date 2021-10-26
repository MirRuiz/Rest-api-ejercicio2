import { CharacterEntityApi } from './character-collection.api-model';
// import { mockCharacterCollection } from './character-collection.mock-data';

const charactersUrl = 'http://localhost:3003/characters';

export const getCharacterCollection = (): Promise<CharacterEntityApi[]> => {
  return fetch(`${charactersUrl}`)
    .then((response) => response.json())
    .then((data) => data);
};
// export const getCharacterCollection = (id)  =>{
//   return mockCharacterCollection.find((h) => h.id === id)

// }
