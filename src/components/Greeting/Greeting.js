import React, {useState} from 'react';
import Output from '../Output/Output';

const Greeting = ()=>{
    const [changedText,setChangedText] = useState(false);
    const changeTextHandler = ()=>{
        setChangedText(true);
    }
    return (
    <div>
        <h1>Hello World</h1>
        <p>Welcome to my first React component!</p>
        <button onClick={changeTextHandler}>Change Text</button>
        {!changedText && <Output>It's good to see you!</Output>}
        {changedText && <Output>Changed!</Output>}
    </div>
    )
}

export default Greeting;