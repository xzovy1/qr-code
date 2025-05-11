const Navbar = ({setToggled}) => {
    return(
        <>
        <div className="nav-bar">
            <div onClick={()=>setToggled('references')}>References</div>
            <div onClick={()=>setToggled('about')}>About</div>
            <div onClick={()=>setToggled('other')}>Publications</div>
        </div>
        <h1>BCID 2025</h1>
        </>
    )
}

export default Navbar