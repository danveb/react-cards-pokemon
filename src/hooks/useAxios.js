import { useState } from 'react' 

import axios from 'axios' 

const useAxios = (url) => {
    const [response, setResponse] = useState([]) 

    const getData = async (options='') => {
        try {
            const res = await axios.get(`${url}${options}`) 
            const data = await res.data
            setResponse([...response, data]) 
        } catch(err) {
            alert(new Error('Sorry something went wrong...'))
        }
    }

    return [response, getData]  

}

export default useAxios