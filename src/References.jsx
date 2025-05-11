import { useState, useEffect, useRef } from "react"

const References = () => {
    const generateDummy = () => {
        let arr = []
        for (let i = 1; i < 30; i++){
            arr.push({id: i,  name: `Dummy Reference ${i}`})
        }
        return arr;
    }
    // const listRef = useRef(null);
    const listRef = document.querySelector('ul');
    const [references, setReferences] = useState(generateDummy);
    const [index, setIndex] = useState(0);
    
    useEffect(()=>{
        function updateIndex(newIndex){
            if(newIndex == 21)return setIndex(0)
            setIndex(newIndex + 1)
        }
        // updateIndex();
       let timer = setInterval(() => {
            updateIndex(index)
            console.log(index)
        }, 2500)

        return () => clearInterval(timer);
    }, [index])

    return(
        <div className="references">
            <h2>References:</h2>
            
            <div className="reference-list">

            <ul style={{ transform: `translateY(-${index * 3.5}%)`}}>
                {references.map(ref => <li className="reference" key={ref.id}>{ref.name}</li>)}
            </ul>
            </div>
            
            
        </div>
    )
}

export default References