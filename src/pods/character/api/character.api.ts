import { Character } from './character.api-model';

const characterUrl = 'http://localhost:3003/characters';

export const getCharacter = (id: number): Promise<Character> => {
  return fetch(`${characterUrl}/${id}`).then(
    (response) => response.json()
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
