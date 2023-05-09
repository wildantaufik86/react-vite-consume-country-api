import React, { useEffect, useState } from "react";
import axios from "axios";

const Country = (props) => {
  const [country, setCountry] = useState([])

  const getCountry = async () =>{
    try {
      let response = await axios.get('https://restcountries.com/v3.1/all')
      setCountry(response.data)
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    getCountry();
  }, [])


  return (
    <>
        {
       country && country.sort((a,b) => a.name.common > b.name.common ? 1 : -1).map((country, index) => {
          return (
            <div key={index}>{country.name.common}</div>
          )
        })
      }
    </>
  )
}

export default Country;
