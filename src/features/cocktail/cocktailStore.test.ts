import { useCocktailStore } from './cocktailStore';

describe('cocktailStore', () => {
  it('initial state is correct', () => {
    const state = useCocktailStore.getState();
    expect(state.data).toEqual({});
    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);
  });
});
