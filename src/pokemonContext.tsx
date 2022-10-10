import React, { useEffect, useState} from "react";


export const pokemonsProps: pokemon[] = []


export interface pokemon {
  name: string,
  description: string,
  imageUrl: string,
  size: number,
  weight: number,
  type: 'electricity' | 'fire' | 'ice' | 'wind'
}

export const AppContext: React.Context<pokemon[]> = React.createContext(pokemonsProps);

export const useAppContext = (): pokemon[] => React.useContext(AppContext);


function AppContextProvider({children}: { children: JSX.Element }) {
  const [pokemons, setPokemons] = useState<pokemon[]>([]);
  useEffect(() => {
    fetch('http://localhost:3001/pokemons', {method: 'GET'})
      .then(r => r.json())
      .then(r => setPokemons(r))
  }, [])


  return (
    <AppContext.Provider value={pokemons}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;