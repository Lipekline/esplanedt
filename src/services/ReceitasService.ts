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

export interface IReceitasDetalhes {
  title: string;
  image: string;
  summary: string;
  readyInMinutes: number;
  servings: number;
  instructions: string;
}

export const ReceitasService = () => {
  return {
    listagem: () => {
      return api.get<IReceitas>(`/random?number=100&apiKey=${API_KEY}`);
    },
    detalhes: (id: number) => {
      return api.get<IReceitasDetalhes>(`/${id}/information?apiKey=${API_KEY}`);
    },
  };
};
