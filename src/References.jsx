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
                {/* {references.map(ref => <li className="reference" key={crypto.randomUUID()}>{ref}</li>)} */}
                <li className="reference"> 
                    1. Ortega, L., and Rojas, C.M. (2021). Bacterial panicle blight and <i>Burkholderia glumae</i>: from
pathogen biology to disease control. doi.org/10.1094/PHYTO-09-20-0401-RVW.
                </li>

                <li className="reference">
                    2. Maeda, Y., Horita, M., Shinohara, H., Kiba, A., Ohnishi, K., Tsushima, S., and Hikichi, Y.
(2007). Analysis of sources of oxolinic acid-resistant field strains of <i>Burkholderia glumae</i>
based on rep-PCR analysis and nucleotide sequences of <i>gyrB</i> and <i>rpoD</i>.
doi.org/10.1007/s10327-006-0313-9.
                </li>

                <li className="reference">
                        3. Batuman, O., Britt-Ugartemendia, K., Kunwar, S., Yilmaz, S., Fessler, L., Redondo, A.,
CHumachenko, K., Chakravarty, S., and Wade, T. (2024). The use and impact of antibiotics in
plant agriculture: A review. doi.org/10.1094/PHYTO-10-23-0357-IA.
                </li>

                <li className="reference"> 
                    4. Weinberg, J.B., Alexander, B.D., Majure, J.M., Williams, L.W., Kim, J.Y., Vandamme, P., and
LiPuma, J.J. (2007). <i>Burkholderia glumae</i> infection in an infant with chronic granulomatous
disease. doi.org/10.1128/JCM.02058-06.
                </li>

                <li className="reference">
                    5. Supina, B.S.I., McCutcheon, J.G., Peskett, S.R., Stothard, P., and Dennis, J.J. (2025). A
flagella-dependent Burkholderia jumbo phage controls rice seedling rot and steers
Burkholderia glumae toward reduced virulence in rice seedlings. doi.org/10.1128/mbio.02814-
24.

                </li>

                <li className="reference">

                    6. Lauman, P., and Dennis, J.J. (2023). Synergistic interactions among <i>Burkholderia cepacia</i>
complex-targeting phages reveal a novel therapeutic role for lysogenization-capable phages.
doi.org/10.1128/spectrum.04430-22.
                </li>
            </ul>
            </div>
        </div>
    )
}

export default References