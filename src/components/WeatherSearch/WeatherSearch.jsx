import { useState, useEffect } from "react";

const WeatherSearch = (props) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // We'll call the fetch function here
    props.fetchData(city);
    setCity("");
  };

   // useEffect can run under different conditins depending on the dependency array

  // 1) If the dependency array is left out, the side effect function runs after every render.
  useEffect(()=>{
    console.log('I run after every render or state change')
  }) // has no dependecies so this runs everytime state changes

  // 2) If the dependency array is empty ([]), the side effect function runs once after the initial render.
  // We use this option whenever we fetch data on component load
  useEffect(()=>{
    console.log('I run only once because I have a empty dependency array')
    // With nothing in the dependency array this only runs one
  }, [])

  // 3) If dependencies are included, the side effect function runs whenever the dependency data changes.
  useEffect(()=> {
    console.log('I have a dependency, I will run on component mount and whenever the item in my dependency array changes')

    const colors = ['red', 'yellow', 'blue', 'orange']
    const randomColorIndex = Math.floor(Math.random() * colors.length)
    console.log(randomColorIndex, 'random Index')
    setColor(colors[randomColorIndex])
  },[city]) // This will only run again whenever the state in the dependency array changes


  useEffect(() => {
    // Define a fetch function:
    const fetchDefaultData = async () => {
      const data = await weatherService.show('New York');
      const newWeatherState = {
        location: data.location.name,
        temperature: data.current.temp_f,
        condition: data.current.condition.text,
      };
      setWeather(newWeatherState);
    };

    // Call the fetch function when the page loads:
    fetchDefaultData();
  }, []); // an empty dependency array means this runs once after the initial render

  return (
    <section>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Enter a city:</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default WeatherSearch;
