import { useState } from 'react' 
import axios from 'axios' 

const useAxios = (url, options = {}) => {
    const [response, setResponse] = useState([]) 

    const getData = async () => {
        try {
            const res = await axios.get(url) 
            const data = await res.data
            setResponse([...response, data]) 
        } catch(err) {
            alert(new Error('Sorry something went wrong...'))
        }
    }

    return [response, getData]  

}

export default useAxios