import React from "react";
import "./head.css";
import { useState, useEffect } from "react";

function Head() {
  const [mood, setMood] = useState(false);
  const [clockState, setClockState] = useState();
  const [error, setError] = useState(null); //this use state is for check error
  const [isLoaded, setIsLoaded] = useState(false); //this use state active when data loading
  const [items, setItems] = useState([]); // this is for update data that comming from api
  const [q, setQ] = useState(""); //this useState is for set valeu from search box
  const [searchParam] = useState(["capital", "name"]); // this is useState when using that you want check data api and value search box
  // part1 => use,  useEffect and fetch for get api
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all") //our api
      .then((res) => res.json()) //1=>this line our api become to json
      .then(
        (result) => {
          setIsLoaded(true); // use this that app Understand finish loading
          setItems(result); //data seted
        },

        (error) => {
          //is important to handel error here
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  //this function filter our card when user searching sometiog
  function search(items) {
    //item is updated value of searchBox
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        //some() methode is for check data if you whant more information go to (MDN)
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  // write Condition for if we have any problem
  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div className={mood ? "dark-mood":"light-mood"}>
        <div className={mood ? "light-mood" :"dark-mood"} id="navbar">
          <div className="titel">
            <h1>Tworld</h1>
            <button
              value={mood}
              onClick={() => {
                setMood(!mood);
                console.log(mood);
              }}
            >
              mood
            </button>
          </div>

          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search for..."
            value={q} //q comming from use state
            onChange={(e) => setQ(e.target.value)} //get and update value
          />

          <div className="div-clock">{clockState}</div>
        </div>

        {/* this div is our cards */}
        <div className="card-grid">
          {search(items).map((item) => (
            <div>
              <div className="card">
                <div className="Card" key={item.callingCodes}>
                  <h2 className="card-name">{item.name}</h2>
                  <img className="img-card" src={item.flag} alt={item.name} />
                  <ol className="card-list">
                    <li>population: {item.population}</li>
                    <li>Region: {item.region}</li>
                    <li>Capital:{item.capital}</li>
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Head;
