import './Landing.css';
import { useEffect } from 'react';
interface TypeTextOptions {
    element: HTMLElement;
    text: string;
    delay: number;
}
function Landing() {
    function typeParaGraph(e: Array<HTMLElement>, t: Array<string>, delay: number) {
        function typeText({ element, text, delay }: TypeTextOptions): Promise<void> {
            return new Promise((resolve) => {
                let index = 0;
                const textContainer = document.createElement('span');
                element.appendChild(textContainer);
                const cursor = document.createElement('span');
                cursor.className = 'cursor';
                element.appendChild(cursor);
                function typeNextLetter(): void {
                    if (index < text.length) {
                        textContainer.textContent += text.charAt(index);
                        index++;
                        setTimeout(typeNextLetter, delay);
                    } else {
                        element.removeChild(cursor);
                        resolve();
                    }
                }

                typeNextLetter();
            });
        }

        function recurseWithIndex() {
            typeText({ element: e[i], text: t[i], delay: delay }).then(
                () => {
                    if (i < t.length) {
                        i++;
                        recurseWithIndex();
                    }
                }
            )
        }

        let i = 0
        recurseWithIndex();
    }


    useEffect(() => {
        const arrT = [
            "Hi, I'm ",
            "Huy",
            "I will be graduating in June 2024 with a major in Embedded Systems and IoT from ",
            "HCMC University of Technology and Education",
            "My main goal is to pursue a career as a ",
            "full-stack developer"
        ]
        const el_wrapper = document.querySelector('#about-span-2');
        let el: Array<any> = []
        for (let i = 0; i < 6; i++) {
            el.push(el_wrapper?.querySelector(`#t_${i}`));
        }
        setTimeout(() => { typeParaGraph(el, arrT, 50) }, 2000);

    }, [])
    return (

        <div className='about'>
            <span id="about-span-1" className='about-span'>
                <img id="profile-img" src="/assets/profile.jpeg" alt="profile picture" />
                <h2>Tran Quoc Huy</h2>
                <p>Student</p>
            </span>
            <span id="about-span-2" className='about-span'>
                <h1 className="font-1" >
                    <span id='t_0'></span>
                    <span id='t_1' className='blue'></span>
                </h1>
                <p>
                    <span id='t_2'>

                    </span>
                    <a id='t_3' className="blue" href="https://hcmute.edu.vn/" aria-label="HCMUTE website">

                    </a>
                </p>
                <p>
                    <span id='t_4'>

                    </span>
                    <span id='t_5' className='blue bold'>

                    </span>
                </p>
            </span>
        </div>
    )
}
export default Landing;