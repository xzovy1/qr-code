import References from "./References";
import About from "./About";
import OtherPublications from "./OtherPublications";

const Content = ({toggled}) => {
    if(toggled == 'references')return <References />
    else if(toggled == 'about')return <About />
    else if(toggled == 'publications')return <OtherPublications />
    else return (<></>)

}

export default Content;