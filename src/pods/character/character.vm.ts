export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  origin: string;
  location: string;
  image: string;
  bestSentence: string;
}

export const createEmptyCharacter = (): Character => ({
  id: 0,
  name: '',
  status: '',
  species: '',
  origin: '',
  location:'',
  image: '',
  bestSentence:'',

});
