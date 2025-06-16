import { useState, useEffect } from "react";
import referenceList from "./referenceList";

const References = () => {
    const [index, setIndex] = useState(0);
    useEffect(()=>{
        function updateIndex(newIndex){
            if(newIndex == referenceList.length - 2)return setIndex(0)
            setIndex(newIndex + 1)
        }
       let timer = setInterval(() => {
            updateIndex(index)
        }, 3500)

        return () => clearInterval(timer);
    }, [index])
    return(
        <div className="references body">
            <h2>References:</h2>
            
            <div className="reference-list">

            <ul style={{ transform: `translateY(-${index * 200}px)`}}>
                <li className="reference"> 
                    1. Ortega, L., and Rojas, C.M. (2021). Bacterial panicle blight and <i>Burkholderia glumae</i>: from
pathogen biology to disease control. <a href="https://doi.org/10.1094/PHYTO-09-20-0401-RVW">doi.org/10.1094/PHYTO-09-20-0401-RVW</a>
                </li>

                <li className="reference">
                    2. Maeda, Y., Horita, M., Shinohara, H., Kiba, A., Ohnishi, K., Tsushima, S., and Hikichi, Y.
(2007). Analysis of sources of oxolinic acid-resistant field strains of <i>Burkholderia glumae</i>
based on rep-PCR analysis and nucleotide sequences of <i>gyrB</i> and <i>rpoD</i>. 
<a href="https://doi.org/10.1007/s10327-006-0313-9"> doi.org/10.1007/s10327-006-0313-9</a>
                </li>

                <li className="reference">
                        3. Batuman, O., Britt-Ugartemendia, K., Kunwar, S., Yilmaz, S., Fessler, L., Redondo, A.,
CHumachenko, K., Chakravarty, S., and Wade, T. (2024). The use and impact of antibiotics in
plant agriculture: A review. <a href="https://doi.org/10.1094/PHYTO-10-23-0357-IA">doi.org/10.1094/PHYTO-10-23-0357-IA</a>
                </li>


                <li className="reference">
                    4. Supina, B.S.I., McCutcheon, J.G., Peskett, S.R., Stothard, P., and Dennis, J.J. (2025). A
flagella-dependent Burkholderia jumbo phage controls rice seedling rot and steers
<i>Burkholderia glumae</i> toward reduced virulence in rice seedlings. <a href="https://doi.org/10.1128/mbio.02814-
24">doi.org/10.1128/mbio.02814-
24</a>
                </li>

                <li className="reference">

                    5. Lauman, P., and Dennis, J.J. (2023). Synergistic interactions among <i>Burkholderia cepacia</i>
complex-targeting phages reveal a novel therapeutic role for lysogenization-capable phages.
<a href="https://doi.org/10.1128/spectrum.04430-22">doi.org/10.1128/spectrum.04430-22</a>
                </li>
                <li className="reference"> 
    6. Sasaki, R., Miyashita, S., Ando, A., Ito, K., Fukuhara, T., Kormelink, K., and Takahashi, H.
    (2021). Complete genomic sequence of a novel phytopathogenic <i>Burkholderia</i> phage isolated
    from fallen leaf compost. <a href="https://doi.org/10.1007/s00705-020-04811-3">doi.org/10.1007/s00705-020-04811-3</a>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default References