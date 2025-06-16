const Navbar = ({setToggled}) => {

    function scaleNav(index){
        document.querySelectorAll('.nav-bar > div').forEach(e=> e.classList.remove('scale'));
        const divNode = document.querySelectorAll('.nav-bar > div')[index];
        divNode.classList.toggle('scale');
    }

    return(
        <>
        <div className="nav-bar">
            <div onClick={()=>{scaleNav(0); setToggled('references')}} className="scale">References</div>
            <div onClick={()=>{scaleNav(1); setToggled('about')}}>About</div>
            <div onClick={()=>{scaleNav(2); setToggled('publications')}}>Publications</div>
        </div>
        <h1>CSM 2025</h1>
        </>
    )
}

export default Navbar