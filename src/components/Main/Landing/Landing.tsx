import './Landing.css';
import { useEffect } from 'react';
interface TypeTextOptions {
    element: HTMLElement;
    text: string;
    delay: number;
}
function Landing() {
    const arrT = [
        "Hi, I'm ",
        "Huy",
        "I'm currently studying Embedded Systems and IoT at ",
        "HCMC University of Technology and Education",
        "With my graduation anticipated by June 2024, my primary aspiration is to become a ",
        "full-stack developer"
    ]


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
        const el_wrapper = document.querySelector('#landing>.about>span:last-of-type');
        const el_1 = el_wrapper?.querySelector('h1>span:first-of-type');
        const el_2 = el_wrapper?.querySelector('h1>span:last-of-type');
        const el_3 = el_wrapper?.querySelector('p:first-of-type>span:first-of-type');
        const el_4 = el_wrapper?.querySelector('p:first-of-type>a:first-of-type');
        const el_5 = el_wrapper?.querySelector('p:last-of-type>span:first-of-type');
        const el_6 = el_wrapper?.querySelector('p:last-of-type>span:last-of-type');
        if (el_1 && el_2 && el_3 && el_4 && el_5 && el_6) {
            setTimeout(() => {
                typeText(
                    { element: el_1 as HTMLElement, text: arrT[0], delay: 200 },
                    () => {
                        typeText(
                            { element: el_2 as HTMLElement, text: arrT[1], delay: 200 },
                            () => {
                                typeText(
                                    { element: el_3 as HTMLElement, text: arrT[2], delay: 50 },
                                    () => {
                                        typeText(
                                            { element: el_4 as HTMLElement, text: arrT[3], delay: 50 },
                                            () => {
                                                typeText(
                                                    { element: el_5 as HTMLElement, text: arrT[4], delay: 50 },
                                                    () => {
                                                        typeText(
                                                            { element: el_6 as HTMLElement, text: arrT[5], delay: 50 }

                                                        )
                                                    }
                                                )
                                            }
                                        )
                                    }
                                )
                            }
                        )
                    }
                )
            }, 2000)
        }
    }, [])
    return (

        <div className='about'>
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
                <p>
                    <span>

                    </span>
                    <a className="blue" href="https://hcmute.edu.vn/" aria-label="HCMUTE website">

                    </a>
                </p>
                <p>
                    <span>

                    </span>
                    <span className='blue bold'>

                    </span>
                </p>
            </span>
        </div>
    )
}
export default Landing;