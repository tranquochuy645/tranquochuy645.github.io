import './Landing.css';
import { useEffect } from 'react';
interface TypeTextOptions {
    element: HTMLElement;
    text: string;
    delay: number;
}
function Landing() {
    const text_1 = "Hi, I'm ";
    const text_2 = "Huy";
    function typeText({ element, text, delay }: TypeTextOptions, callback?: () => void): void {
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
                if (callback) {
                    callback();
                }
            }
        }
        typeNextLetter();
    }


    useEffect(() => {
        const el_1 = document.querySelector('#landing>.container:first-child>span:last-child h1 span:first-child');
        const el_2 = document.querySelector('#landing>.container:first-child>span:last-child h1 span:last-child');
        if (el_1 && el_2) {
            setTimeout(() => {
                typeText(
                    {
                        element: el_1 as HTMLElement,
                        text: text_1,
                        delay: 200

                    },
                    () => {
                        typeText({ element: el_2 as HTMLElement, text: text_2, delay: 200 })
                    }
                )
            }, 2000)
        }
    }, [])
    return (

        <div className='container'>
            <span>
                <img src="/assets/profile.jpeg" alt="profile picture" />
                <h2>Tran Quoc Huy</h2>
                <p>Student</p>
            </span>
            <span>
                <h1 className="font-1" >
                    <span></span>
                    <span className='blue'></span>
                </h1>
                <p>I'm currently studying Embedded Systems and IoT at <a className="blue" href="https://hcmute.edu.vn/" aria-label="HCMUTE website">HCMC University of Technology and Education</a></p>
                <p>With my graduation anticipated by June 2024,<br /> my primary aspiration is to become a<span className='blue bold'>&#160;full-stack developer</span></p>
            </span>
        </div>
    )
}
export default Landing;