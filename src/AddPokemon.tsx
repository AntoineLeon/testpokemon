import {Box, Grid} from "@mui/material";
import React, {ChangeEventHandler, useState} from "react";
import {createPokemon} from "./pokemonInsert";
import {pokemon} from "./pokemonContext";
import {useNavigate} from 'react-router-dom';

export const AddPokemon = (): JSX.Element => {
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState<pokemon>({
      name: "",
      description: "",
      imageUrl: "",
      size: 0,
      weight: 0,
      type: "fire"
    });

    const handleChange: ChangeEventHandler<HTMLTextAreaElement> & ChangeEventHandler<HTMLInputElement> | undefined = (event) => {
      const target = event.target as HTMLTextAreaElement;

      setPokemon(
        Object.assign(
          pokemon,
          {
            [target.name]: target.value
          }))
    };


    const sendData = (event:any) => {
      createPokemon(pokemon)
      navigate('/')
    window.location.reload()
    }

    return (
      <Grid>
        <h1>Nouveau Pokémon</h1>
        <form onSubmit={sendData}>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={6}>
              <label>Nom</label>
              <Grid item xs={12}>
                <input type="text" name='name' onChange={handleChange}/>
              </Grid>
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
              <label>Description</label>
              <textarea name='description' onChange={handleChange}/>
            </Grid>
            <Grid item xs={6}>

              <Grid item xs={6}></Grid>
              <Grid item xs={6}></Grid>


              <Grid item xs={12}>
                <Grid item xs={12}>
                  <label>Image</label>
                </Grid>
                <Grid item xs={12}>
                  <input type="text" name="imageUrl" onChange={handleChange}/>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={6}> <Grid item xs={12}><label>Taille</label></Grid>
                    <Grid item xs={12}>
                      <div className="input-group">
                        <input className='suffix' type="text" name="size" onChange={handleChange}/>
                        <span className="input-group-addon ">cm</span>
                      </div>
                    </Grid></Grid>
                  <Grid item xs={6}> <Grid item xs={12}><label>Taille</label></Grid>
                    <Grid item xs={12}>
                      <div className="input-group">
                        <input className='suffix' type="text" name="weight" onChange={handleChange}/>
                        <span className="input-group-addon ">cm</span>
                      </div>
                    </Grid></Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <label>Type</label>
              <Box className='radioType'>
                <input type="radio" id="radioFeu" name="type" value="fire" defaultChecked onChange={handleChange}/>
                <label htmlFor="radioFeu">Feu</label>
                <input type="radio" id="radioIce" name="type" value="ice" onChange={handleChange}/>
                <label htmlFor="radioIce">Glace</label>
                <input type="radio" id="radioElec" name="type" value="electricity" onChange={handleChange}/>
                <label htmlFor="radioElec">Électricité</label>
                <input type="radio" id="radioWind" name="type" value="wind" onChange={handleChange}/>
                <label htmlFor="radioWind">Vent</label>
              </Box>
            </Grid>
            <Grid item xs={12} mt={4}>
              <button id={'save-pokemon'}>Enregistrer</button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    )
      ;
  }
;

export default AddPokemon;
