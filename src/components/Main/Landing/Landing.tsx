
import './Landing.css';

function Landing() {
    return (
        <div className='container'>
            <h1 className="font-1" >
                <span>H</span>
                <span>i</span>
                <span>,</span>
                <span>&#160;</span>
                <span>I</span>
                <span>'m</span>
                <span>&#160;</span>
                <span className="blue">H</span>
                <span className="blue">u</span>
                <span className="blue">y</span>
            </h1>
            <p>I'm currently studying Embedded Systems and IoT at <a className="blue" href="https://hcmute.edu.vn/" aria-label="HCMUTE website">HCMC University of Technology and Education</a></p>
            <p>With my graduation anticipated by June 2024,<br/> my primary aspiration is to become a<span className='blue bold'>&#160;full-stack developer</span></p>
        </div>
    )
}

export default Landing;