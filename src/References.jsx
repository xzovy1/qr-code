import { useState, useEffect } from "react"

const References = () => {
    const generateDummy = () => {
        let arr = []
        for (let i = 1; i < 30; i++){
            arr.push({id: i,  name: `Dummy Reference ${i}`})
        }
        return arr;
    }
    const [references, setReferences] = useState(generateDummy);
    const [index, setIndex] = useState(0);
    
    useEffect(()=>{
        function updateIndex(newIndex){
            if(newIndex == 22)return setIndex(0)
            setIndex(newIndex + 1)
        }
       let timer = setInterval(() => {
            updateIndex(index)
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