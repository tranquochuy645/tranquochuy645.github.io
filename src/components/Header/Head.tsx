import { useEffect } from 'react';
import './Head.css'
const Head = () => {
    let yPos: number;
    let timer: any;
    let isUnDocked: any = document.getElementById("nav-wrapper")?.classList.contains("undocked");
    let isHidden: any = document.getElementById("nav-wrapper")?.classList.contains("hidden");
    let isOpened: any = document.getElementById("menu-btn-wrapper")?.classList.toggle("opened");

    const checkState = () => {
        if (isOpened) return;
        if (yPos > 1) {
            !isHidden && toggleHide();
        } else {
            isUnDocked && toggleDock();
        }
    };

    const toggleHide = () => {
        isHidden = document.getElementById("nav-wrapper")?.classList.toggle("hidden");
    }

    const toggleOpen = () => {
        isOpened = document.getElementById("menu-btn-wrapper")?.classList.toggle("opened");
        document.getElementById("nav-wrapper")?.classList.toggle("opened");
        document.getElementById("nav-ul")?.classList.toggle("opened");
        if (isOpened) {
            !isUnDocked && toggleDock();
            clearTimeout(timer);
        } else {
            timer = setTimeout(checkState, 1400);
        }
    }

    const toggleDock = () => {
        if (isOpened) return;
        isUnDocked = document.getElementById("nav-wrapper")?.classList.toggle("undocked");
    }

    const handleScroll = () => {
        if (isOpened) return;
        clearTimeout(timer);
        isHidden && toggleHide();
        yPos = window.pageYOffset || document.documentElement.scrollTop;
        if (yPos > 1) {
            !isUnDocked && toggleDock();
        } else {
            isUnDocked && toggleDock();
        }
        timer = setTimeout(checkState, 1400);
    };
    const handleMouseMove = (e: MouseEvent) => {
        if (isOpened) return;
        if (e.clientY > 129) {
            if (yPos > 1) return;
            isUnDocked && toggleDock();
            return;
        }
        clearTimeout(timer);
        !isUnDocked && toggleDock();
        isHidden && toggleHide();
        timer = setTimeout(checkState, 1400);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <header id="nav-wrapper" >
            <div id="nav-div-1" >
                <a id="nav-div-1-a" href="#landing" aria-label="Landing section">
                    <svg id="logo-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox='0 0 70 80'>

                        <circle cx="37" cy="40" r="30" fill="transparent" stroke="white" strokeWidth="2" />
                        <g id="logo-svg-g" fill='white' stroke="white" strokeWidth="1.5">
                            <path d="M20.66,47.92q0-0.56,2.3-4.34q-1.64,0-2.18,0.14q-0.9,0.22-1.34,0.9q-0.16,0.22-0.27,0.24t-0.11-0.09t0.08-0.19q0.76-1.02,1.5-1.4t2.34-0.38l0.48,0q1.22-1.86,3.42-5.52q0.82-1.54,0.82-2.5q0-1.54-1.88-1.56l-0.22,0q-2.56,0-4.66,1.28t-3.32,3.18t-1.22,3.42q0,1.86,1.74,1.86q1.38,0,2.36-1.22t0.98-2.32q0-0.62-0.32-1.02q-0.04-0.04-0.04-0.1q0-0.14,0.16-0.14q0.08,0,0.12,0.06q0.4,0.52,0.4,1.24q0,1.22-1,2.49t-2.1,1.41q-0.34,0.06-0.66,0.06q-1.28,0-1.98-0.82q-0.68-0.74-0.68-2q0-0.52,0.12-1.06q0.6-2.7,3.47-4.72t6.45-2.02q1.38,0,2.37,0.59t0.99,1.65t-0.74,2.24l-3.62,5.56q0.64,0.02,2.29,0.19t2.48,0.17t1.11-0.02l0.76-1.26q1.94-3.26,4.49-6.09t4.45-3.51q0.06-0.02,0.12-0.02q0.14,0,0.14,0.16q0,0.06-0.06,0.1q-1.28,0.72-3.67,3.49t-4.13,5.69l-0.78,1.32q0.92-0.12,1.32-0.46q0.08-0.06,0.14,0.07t-0.02,0.19q-0.6,0.46-1.7,0.66q-1.4,2.6-1.4,3.66q0,0.68,0.58,0.68q0.4,0,0.93-0.27t0.71-0.46t0.22-0.19t0.02,0.13t-0.08,0.21q-0.34,0.32-1.02,0.68t-1.1,0.36t-0.62-0.14q-0.64-0.42-0.64-1.46t1.06-3.04q-0.74,0.06-1.38,0.06q-0.22,0-4.7-0.14q-1.42,2.24-2.28,4.08q-0.26,0.54-0.63,0.54t-0.37-0.3z" />
                            <path d="M40.4634,45.66q0-2.16,1.28-4.28q-1.48-0.94-1.48-2.78q0-2.22,1.96-3.94q2.2-1.94,5.68-1.94q1.6,0,3.44,0.46q0.42,0.1,3.58,1.55t4.54,1.45q0.92,0,1.38-0.52q0.24-0.26,0.24-0.56t-0.26-0.54q-0.14-0.2-0.14-0.26t0.11-0.06t0.38,0.35t0.27,0.82t-0.63,0.9t-1.59,0.43q-1.5,0-4.66-1.45t-3.97-1.61t-1.85-0.16q-4.14,0-6.52,2.68q-0.28,0.3-0.66,1.21t-0.38,1.75q0,1.16,0.82,1.8q1.04-1.52,2.46-2.42t2.88-0.9q1.8,0,1.8,1.4q0,1.68-1.97,3.65t-3.65,1.97q-1.08,0-1.08-0.92q0-0.32,0.17-0.56t0.41-0.18l-0.04,0.46q0,0.3,0.92,0.3q1.36,0,2.87-1.4t1.83-2.74q0.08-0.3,0.08-0.54q0-0.9-1.15-0.9t-2.38,0.88t-2.31,2.32q0.08,0.04,0.62,0.16l1.2,0.04q0.88,0.04,0.88,0.2q0,0.28-0.84,0.28l-0.12,0q-1.22,0-2-0.3q-1.54,2.36-1.54,4.34q0,2.56,1.98,2.56q2.24,0,4.66-3.12l3.92-5.84q2.2-3.2,3.82-3.28l0.76,0.18q0.36,0.2,0.36,0.6t-0.2,0.4l-0.64-0.1q-1.38,0-3.54,2.98l-3.98,5.56q-2.56,2.98-4.9,2.98q-1.6,0-2.21-0.86t-0.61-2.5z" />
                        </g>
                    </svg>
                </a>
                <ul id="nav-ul" >
                    <li className='nav-ul-li'><a className="nav-ul-li-a " href="#skills" aria-label="Skills section"><img className="nav-ul-li-a-img" src='/assets/imgs/tool.svg' />&nbsp;Skills</a></li>
                    <li className='nav-ul-li '><a className="nav-ul-li-a " href="#projects" aria-label="Projects section"><img className="nav-ul-li-a-img" src='/assets/imgs/project.svg' />&nbsp;Projects</a></li>
                    <li className='nav-ul-li'><a className="nav-ul-li-a " href="#contact" aria-label="Contact section"><img className="nav-ul-li-a-img" src='/assets/imgs/contact.svg' />&nbsp;Contact</a></li>
                </ul>
            </div>
            <div id='menu-btn-wrapper' onClick={toggleOpen}>
                <svg id="menu-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='line line2' d="M20 50L81 50" stroke="white" strokeWidth="7" strokeLinejoin="round" />
                    <path className='line line3' d="M20 72.6271H22.0935M22.0935 72.6271H76C76 72.6271 86.0698 75.1272 91 48.6272C99 5.62717 76 27.6271 76 27.6271L22.0935 72.6271Z" stroke="white" strokeWidth="7" strokeLinejoin="round" />
                    <path className="line line1" d="M20 28H22.0935M22.0935 28H76C76 28 86.0698 25.5 91 52C99 95 76 73 76 73L22.0935 28Z" stroke="white" strokeWidth="7" strokeLinejoin="round" />
                </svg>
            </div>
        </header>
    );
}

export default Head;
