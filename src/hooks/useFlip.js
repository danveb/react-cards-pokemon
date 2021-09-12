import React, { useState } from 'react' 

const useFlip = () => {
    // state
    const [flip, setFlip] = useState(true) 
    const flipCard = () => {
        setFlip(useFlip => !useFlip) 
    }
    // return piece of state
    return [flip, flipCard] 
}

export default useFlip 