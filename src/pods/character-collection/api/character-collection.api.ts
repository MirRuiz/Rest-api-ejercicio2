import { CharacterEntityApi } from './character-collection.api-model';

const charactersUrl = 'http://localhost:3000/characters';

export const getCharacterCollection = (): Promise<CharacterEntityApi[]> => {
  return fetch(`${charactersUrl}`)
    .then((response) => response.json())
    .then((data) => data);
};
