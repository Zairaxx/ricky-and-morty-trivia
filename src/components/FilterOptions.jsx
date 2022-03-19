let FilterOptions = (
  {
    filterByName,
    filterByGender,
    filterBySpecies,
    filterByStatus
  }) => {
    return(
        <>
        <h1>
        Rick & Morty - How many Characters
      </h1>
      <label htmlFor="name">Filter by name</label>
      <input type="text" id="name" onChange={(e) => {filterByName(e.target.value)}}/>
      <br></br>
      <br></br>
      <legend>Filter by gender</legend>
      <div onChange={(e) => {filterByGender(e.target.value)}}>
        <label htmlFor="all">All</label>
        <input type="radio" name="gender" id="all" value="" defaultChecked/>
        <label htmlFor="male">Male</label>
        <input type="radio" name="gender" id="male" value="male"/>
        <label htmlFor="female">Female</label>
        <input type="radio" name="gender" id="female" value="female"/>
        <label htmlFor="genderless">Genderless</label>
        <input type="radio" name="gender" id="genderless" value="genderless"/>
        <label htmlFor="unknown">Unknown</label>
        <input type="radio" name="gender" id="unknown" value="unknown"/>
      </div>
      <br></br>
      <br></br>
      <div>
        <label htmlFor="species">Filter by species: </label>
        <select name="species" id="species" onChange={(e)=>{filterBySpecies(e.target.value)}}>
        <option value="">All</option>
        <option value="Human">Human</option>
        <option value="Robot">Robot</option>
        <option value="Animal">Animal</option>
        <option value="Alien">Alien</option>
        <option value="Humanoid">Humanoid</option>
        <option value="Mythological Creature">Mythological Creature</option>
        </select>
      </div>
      <br></br>
      <br></br>
      <div>
        <label htmlFor="status">Filter by status: </label>
        <select name="status" id="status" onChange={(e) => {filterByStatus(e.target.value)}}>
        <option value="">All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
        </select>
      </div>
      </>
    )
}

export default FilterOptions