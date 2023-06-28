import './Landing.css';
import { useEffect } from 'react';
import { typeParagraph } from '../../../lib/typeParagraph';

function Landing() {
    useEffect(() => {
        const arrT = [
            "HI, I'M ",
            "HUY",
            "I will be graduating in June 2024 with a major in Embedded Systems and IoT from ",
            "HCMC University of Technology and Education",
            "My main goal is to pursue a career as a ",
            "software developer"
        ]
        const arrTTotalLength = arrT.reduce((accumulator, currentValue) => accumulator + currentValue.length, 0);
        const el_wrapper = document.querySelector('#about-span-2');
        let el: Array<any> = []
        for (let i = 0; i < 6; i++) {
            el.push(el_wrapper?.querySelector(`#t_${i}`));
        }
        typeParagraph(el, arrT, 30, 2000)
        setTimeout(
            () => {
                let d = document.querySelector<HTMLElement>('#download')
                if (d) {
                    d.style.display = "flex";
                }
            }, (arrTTotalLength * 30 + 2000)
        )

    }, [])
    return (
        <>
            <div id='about'>
                <span id="about-span-1" className='about-span'>
                    <img id="profile-img" src="/assets/imgs/profile.jpeg" alt="profile picture" />
                    <h2>Tran Quoc Huy</h2>
                    <p>Student</p>
                    <p>&#x1F4EB;&nbsp;&nbsp;tranquochuy645@gmail.com</p>
                    <p><i className="devicon-github-original"></i>&nbsp;&nbsp; github.com/tranquochuy645</p>
                </span>
                <span id="about-span-2" className='about-span'>
                    <h1>
                        <span id='t_0'></span>
                        <span id='t_1' className='green'></span>
                    </h1>
                    <p>
                        <span id='t_2'>

                        </span>
                        <a id='t_3' className="green none-decoration-exhov" href="https://hcmute.edu.vn/" aria-label="HCMUTE website">

                        </a>
                    </p>
                    <p>
                        <span id='t_4'>

                        </span>
                        <span id='t_5' className='green'>

                        </span>
                    </p>
                    <a id="download" className="font-evil green" href="/assets/cv.pdf" aria-label='see my resume'>SEE MY RESUME</a>
                </span>
            </div>
        </>
    )
}
export default Landing;