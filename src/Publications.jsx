const Publications = () => {

    return (
        <div className="body">
            <h2>Publications:</h2>
            <ul>
                <li>
                    <a href="https://www.mdpi.com/2079-6382/14/6/545">The Current Landscape of Phage–Antibiotic Synergistic (PAS) Interactions</a>
                </li>
                <hr />
                <li><a href="https://journals.asm.org/doi/10.1128/mbio.02814-24">
                    A flagella-dependent <i>Burkholderia</i> jumbo phage controls rice seedling rot and steers <i>Burkholderia glumae</i> toward reduced virulence in rice seedlings
                    </a>
                </li>
                <hr />
                <li><a href="https://journals.asm.org/doi/10.1128/jb.00196-23">
                    Bacteriophage steering of <i>Burkholderia cenocepacia</i> toward reduced virulence and increased antibiotic sensitivity
                    </a>
                </li>
                {/* <hr /> */}
            </ul>
        </div>
    )
}

export default Publications