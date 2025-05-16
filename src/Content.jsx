import References from "./References";
import About from "./About";
import Publications from "./Publications";

const Content = ({toggled}) => {
    if(toggled == 'references')return <References />
    else if(toggled == 'about')return <About />
    else if(toggled == 'publications')return <Publications />
    else return (<></>)

}

export default Content;