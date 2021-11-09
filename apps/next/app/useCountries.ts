import { useEffect, useState } from "react"
import { request, gql } from 'graphql-request'

const query = gql`
    query {
    countries {
      code
      name
    }
  }
`

export const useCountries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        request('https://countries.trevorblades.com/', query)
        .then((data) => setCountries(data.countries))
    }, []);
    
    return [ countries ];
}

export default useCountries;