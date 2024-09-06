import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import axios from "axios";

const Countries = () => {
  const CountriesAPI_Endpoint =
    "https://xcountries-backend.azurewebsites.net/all";
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(CountriesAPI_Endpoint)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {countries.map((country, index) => (
        <CountryCard key={index} src={country.flag} name={country.name} />
      ))}
    </div>
  );
};
export default Countries;
