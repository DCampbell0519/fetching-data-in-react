import { useState, useEffect } from "react";

const WeatherSearch = (props) => {
  const [city, setCity] = useState("");
  const [color, setColor] = useState('black')

  const handleSubmit = (e) => {
    e.preventDefault();
    // We'll call the fetch function here
    props.fetchData(city);
    setCity("");
  };

  // useEffect can run under different conditions depending on the dependency array
  
  // 1. If the dependency array is left out, the side effect function runs after every render
  useEffect(() => {
    console.log('I run after every render or state change')
  })

  // 2. If the dependency array is empty [], the side effect function runs once after the initial render
  useEffect(() => {
    console.log('I run only once because I have an empty dependency array')
  }, [])

  // 3. If dependencies are included, this side effect function runs whenever the dependency data changes
  useEffect(() => {
    console.log('I have a dependency, I will run on component mount and whenever the item in my dependency array changes')

    // const colors = ['red', 'yellow', 'blue', 'orange']
    // const randomColorIndex = Math.floor(Math.random() * colors.length)
    // console.log(randomColorIndex, 'random index')
    // setColor(colors[randomColorIndex])
  }, [city])
  
  return (
    <section>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Enter a city:</label>
        <input
          id="city"
          type="text"
          value={city}
          style={{color: color}}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default WeatherSearch;
