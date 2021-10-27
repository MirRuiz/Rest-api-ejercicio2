import { Character } from './character.api-model';

const characterUrl = 'http://localhost:3000/characters';

export const getCharacter = (id: number): Promise<Character> => {
  return fetch(`${characterUrl}/${id}`).then((response) => response.json());
};

export const saveCharacter = (character: Character): any => {
  const method = {
    method: 'PUT',
    body: JSON.stringify(character),
    headers: {
      'Content-type': 'application/json',
    },
  };
  return fetch(`${characterUrl}/${character.id}`, method).then((response) =>
    response.json()
  );
};
