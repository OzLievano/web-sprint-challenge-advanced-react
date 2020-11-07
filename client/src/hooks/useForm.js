// write your custom hook here to control your checkout form
import React, {useState} from 'react';

export const useForm = (initalValue) => {
    const [value,setValue] = useState(initalValue);

    

    return [value,setValue] 
}