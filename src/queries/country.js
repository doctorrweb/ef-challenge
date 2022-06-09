import { useQuery } from 'react-query'
import axios from 'axios'


export const useGetCountryListQuery = () => 
  useQuery(
    'countries', 
      () => axios
        .get(`${process.env.REACT_APP_COUNTRY_BASE_URL}/all`)
        .then(({data}) => data)
        .catch(error => { throw new Error(error) }),
    {
        staleTime: 10 * 60 * 1000,
        cacheTime: 10 * 60 * 1000
    }
  )

