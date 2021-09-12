import { useState } from 'react' 

const useFlip = () => {
    // state
    const [isFacingUp, setFlip] = useState(true) 
    const toggleFlip = () => {
        setFlip(useFlip => !useFlip) 
    }
    // return piece of state
    // - isFacingUp: current state of card 
    // - toggleFlip: function to toggle the flip
    return [isFacingUp, toggleFlip] 
}

export default useFlip 