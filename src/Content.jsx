import References from "./References";
import About from "./About";
import OtherPublications from "./OtherPublications";

const Content = ({displayed}) => {

    if(displayed == 'references')return <References />
    else if(displayed == 'about')return <About />
    else if(displayed == 'other')return <OtherPublications />
    else return (<></>)

}

export default Content;