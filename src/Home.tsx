import {Box, Card, CardActionArea, CardContent, CardMedia, Grid} from "@mui/material"
import {pokemon, useAppContext} from "./pokemonContext";
import {Link} from "react-router-dom";

const typeTrad = {
  'electricity': 'électricité', 'fire': 'feu', 'ice': 'glace', 'wind': 'vent'
}

export const Home = (): JSX.Element => {
  const pokemons: pokemon[] = useAppContext()
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box>
          <Link to={'/create'}>
            <button id={'create-pokemon'} type="button"><b>Ajouter un Pokémon</b></button>
          </Link>
        </Box>
      </Grid>
      <Grid container spacing={3} mt={2}>
        {pokemons.map(pokemon =>
          <Grid item>
            <Card sx={{border: '1px solid lightgray'}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={pokemon.imageUrl}
                  height="100%"
                  alt="pokemon"
                  sx={{margin: 'auto', width: '100%', maxWidth: '350px'}}
                />
                <CardContent>
                  <h3>{pokemon.name}</h3>
                  <p>{pokemon.description}</p>
                  <Box display={'flex'} justifyContent={'space-between'}>
                    <p>Taille: {pokemon.size} cm</p>
                    <p>Poids: {pokemon.weight} kg</p></Box>
                  <p>Type: {typeTrad[pokemon.type]}</p>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Home;