import {API_KEY, api} from '.';

export interface IReceitas {
  recipes: IReceitasCard[];
}

export interface IReceitasCard {
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  image: string;
}

export const ReceitasService = () => {
  return {
    listagem: () => {
      return api.get<IReceitas>(`/random?number=7&apiKey=${API_KEY}`);
    },
  };
};
