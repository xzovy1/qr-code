import { useState, useEffect } from "react";
import referenceList from "./referenceList";

const References = () => {
    // const generateDummy = () => {
    //     let arr = []
    //     for (let i = 1; i < 30; i++){
    //         arr.push({id: i,  name: `Dummy Reference ${i}`})
    //     }
    //     return arr;
    // }
    const [references, setReferences] = useState(referenceList);
    const [index, setIndex] = useState(0);
    
    useEffect(()=>{
        function updateIndex(newIndex){
            if(newIndex == referenceList.length)return setIndex(0)
            setIndex(newIndex + 1)
        }
       let timer = setInterval(() => {
            updateIndex(index)
        }, 3000)

        return () => clearInterval(timer);
    }, [index])
    return(
        <div className="references body">
            <h2>References:</h2>
            
            <div className="reference-list">

            <ul style={{ transform: `translateY(-${index * (3.5 * 3)}%)`}}>
                {references.map(ref => <li className="reference" key={crypto.randomUUID()}>{ref}</li>)}
            </ul>
            </div>
        </div>
    )
}

export default References