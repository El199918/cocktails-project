import { create } from 'zustand';
import { fetchCocktailsByCode } from './cocktailService';
import { Drink } from './types';

interface CocktailState {
  data: Record<string, Drink[]>;
  loading: boolean;
  error: string | null;
  fetchCocktails: (code: string) => Promise<void>;
}

export const useCocktailStore = create<CocktailState>((set, get) => ({
  data: {},
  loading: false,
  error: null,

  fetchCocktails: async (code) => {
    const { data } = get();

    if (data[code]) return;

    try {
      set({ loading: true, error: null });
      const res = await fetchCocktailsByCode(code);

      if (!res.drinks) throw new Error('No drinks found');

      set((state) => ({
        data: { ...state.data, [code]: res.drinks! },
        loading: false,
      }));
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
}));
