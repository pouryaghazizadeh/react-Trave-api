import React from "react";
import { useState, useEffect } from "react";

 function Search() {
    const [error, setError] = useState(null);//this use state is for check error
    const [isLoaded, setIsLoaded] = useState(false);//this use state active when data loading
    const [items, setItems] = useState([]);// this is for update data that comming from api
    const [q, setQ] = useState("");//this useState is for set valeu from search box
    const [searchParam] = useState(["capital", "name"]);
    // part1 => use,  useEffect and fetch for get api
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json()) //1=>this line our api become to json
      .then(
        (result) => {
          setIsLoaded(true);// use this that app Understand finish loading
          setItems(result);//data seted
        },

        (error) => {//is important to handel error here
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);



  function search(items) {
    return items.filter((item) => {
        return searchParam.some((newItem) => {
            return (
                item[newItem]
                    .toString()
                    .toLowerCase()
                    .indexOf(q.toLowerCase()) > -1
            );
        });
    });
}




// write Condition for if we have any problem
  if (error) {
    return <>{error.message}</>;
} else if (!isLoaded) {
    return <>loading...</>;
} else {
    return (
        <div className="wrapper">
            <div className="search-wrapper">
                <label htmlFor="search-form">
                    <input
                        type="search"
                        name="search-form"
                        id="search-form"
                        className="search-input"
                        placeholder="Search for..."
                        value={q}
                        /* 
                        // set the value of our useState e
                        //  anytime the user types in the search box
                        */
                        onChange={(e) => setQ(e.target.value)}
                    />
                    <span className="sr-only">Search countries here</span>
                </label>
            </div>
            <ul className="card-grid">
                {search(items).map((item) => (
                    <li>
                        <article className="card" key={item.callingCodes}>
                            <div className="card-image">
                                <img src={item.flag} alt={item.name} />
                            </div>
                            <div className="card-content">
                                <h2 className="card-name">{item.name}</h2>
                                <ol className="card-list">
                                    <li>
                                        population:{" "}
                                        <span>{item.population}</span>
                                    </li>
                                    <li>
                                        Region: <span>{item.region}</span>
                                    </li>
                                    <li>
                                        Capital: <span>{item.capital}</span>
                                    </li>
                                </ol>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    );



}

 }
 
export default Search
