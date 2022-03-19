
import './App.css';
import FilterOptions from './components/FilterOptions'
import { useEffect, useState } from 'react';
import {getCharacters} from './utils'
import {testFunction} from './utils/test'
function App() {
  //STATES
  const [characters, setCharacters] = useState(0);
  const [name, setName] =useState("");
  const [gender, setGender] =useState("");
  const [species, setSpecies] =useState("");
  const [status, setStatus] =useState("");
  //FUNCTIONS

  let filterByName = (name) => {
    setName(name);
  }
  let filterByGender = (gender) => {
    setGender(gender);
  }
  let filterBySpecies = (species) => {
    setSpecies(species);
  }
  let filterByStatus = (status) => {
    setStatus(status);
  }

  let onFetch = async () => {
    try {
      console.log("Fetching");
      let data = await getCharacters("https://rickandmortyapi.com/api/character", {
        params:{
        name,
        gender,
        species,
        status
        }
      });
      console.log(data);
    setCharacters(data.info.count);
    } catch {
      setCharacters(0);
    }
    finally {
      console.log("Async function is done!")
    }
  }
  useEffect(async () => {
    onFetch()
  }, [name, gender, species, status])

  // useEffect(() => {
  //  console.log(name);
  // }, [name])

  return (
    <div className="App">
      <header className="App-header">
      <FilterOptions {...{filterByName, filterByGender, filterBySpecies, filterByStatus}}/>
      <h2>There are {characters} matching your criteria!</h2>
      </header>
    </div>
  );
}

export default App;
