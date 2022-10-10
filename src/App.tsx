import './App.css';
import Home from "./Home";
import AddPokemon from "./AddPokemon";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import {Container} from "@mui/material";
import AppContextProvider from "./pokemonContext";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Container maxWidth={false} sx={{maxWidth: '95%'}}>
        <p><b>Pokemon Manager</b></p>
        </Container>
      </header>
      <AppContextProvider>
        <Container maxWidth={false} sx={{maxWidth: '95%', marginTop: '32px'}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/create" element={<AddPokemon/>}/>
            </Routes>
          </BrowserRouter>
        </Container>
      </AppContextProvider>
    </div>
  );
}

export default App;
