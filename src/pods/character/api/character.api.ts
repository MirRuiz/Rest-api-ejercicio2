import { Character } from './character.api-model';

const characterUrl = 'http://localhost:3000/characters';

export const getCharacter = (id: number): Promise<Character> => {
  return fetch(`${characterUrl}/${id}`).then((response) => response.json());
};

export const saveCharacter = (character: Character): any => {
  console.log('OPOPOP');
  const method = {
    method: 'POST',
    body: JSON.stringify(character),
    headers: {
      'Content-type': 'aplication/json',
    },
  };
  return fetch(`${characterUrl}/${character.id}`, method).then((response) =>
    console.log(response)
  );
};

// export const saveCharacter = async (character: Character): Promise<boolean> => {
//   return true;
// };

// export const saveCharacter = async (character: Character): Promise<boolean> => {
//   if (character.id) {
//     await Axios.put<Character>(`${characterUrl}/${character.id}`, character);
//   } else {
//     await Axios.post<Character>(characterUrl, character);
//   }
//   return true;
// };
