import './Skill.css'
import DecorLine from '../../DecorLine/DecorLine';
import VisibilitySensor from 'react-visibility-sensor';
import { ReactNode } from 'react';

const block_language: ReactNode = (
    <>
        <h2 className='green'>
            Programming languages :
        </h2>
        <div className='flex-wrap'>
            <figure>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <figcaption>Javascript</figcaption>
            </figure>
            <figure>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                <figcaption>Typescript</figcaption>
            </figure>
            <figure>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                <figcaption>Python</figcaption>
            </figure>
            <figure>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                <figcaption>CSS 3</figcaption>
            </figure>
            <figure>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                <figcaption>HTML 5</figcaption>
            </figure>
            <figure>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
                <figcaption>C</figcaption>
            </figure>
            <figure>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
                <figcaption>C + +</figcaption>
            </figure>
            <figure>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
                <figcaption>C #</figcaption>
            </figure>
            <figure>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg" />
                <figcaption>Bash</figcaption>
            </figure>
            <figure>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" />
                <figcaption>Dart</figcaption>
            </figure>
            <figure>
                <img src="/assets/imgs/asm.svg" />
                <figcaption>Assembly</figcaption>
            </figure>

        </div>
    </>
)
const block_framework: ReactNode = (
    <>
        <h2 className='green' >
            Frameworks / Libraries :
        </h2>
        <div className='flex-wrap'>
            <figure>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                <figcaption>React</figcaption>
            </figure>
            <figure>
                <img className='bg-white' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
                <figcaption>ExpressJS</figcaption>
            </figure>
            <figure>
                <img className='bg-white' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" />
                <figcaption>Socket-io</figcaption>
            </figure>
            <figure>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" />
                <figcaption>Arduino</figcaption>
            </figure>
            <figure>
                <img className='bg-white' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
                <figcaption>Next.js</figcaption>
            </figure>
            <figure>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" />
                <figcaption>Flutter</figcaption>
            </figure>
        </div>
    </>
)
const block_other: ReactNode = (
    <>
        <h2 className='green'>
            Others :
        </h2>
        <div className='flex-wrap'>
            <figure>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
                <figcaption>Linux OS</figcaption>
            </figure>
            <figure>
                <img className='bg-white' src="https://upload.wikimedia.org/wikipedia/commons/9/95/Font_Awesome_5_brands_github.svg" />
                <figcaption>GitHub</figcaption>
            </figure>
            <figure>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                <figcaption>Docker</figcaption>
            </figure>
            <figure>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                <figcaption>Node.js</figcaption>
            </figure>
            <figure>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/JWT_LOGO.png" />
                <figcaption>JWT</figcaption>
            </figure>
            <figure>
                <img className='bg-white' src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" />
                <figcaption>AWS</figcaption>
            </figure>
            <figure>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                <figcaption>MongoDB</figcaption>
            </figure>
            <figure>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
                <figcaption>Firebase</figcaption>
            </figure>
            <figure>
                <img className='bg-white' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" />
                <figcaption>Unity</figcaption>
            </figure>
            <figure>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" />
                <figcaption>Blender</figcaption>
            </figure>
        </div>
    </>
)
function SkillBlock({ html }: { html: ReactNode }) {
    return (
        <>
            <VisibilitySensor partialVisibility={true} offset={{ top: 100, bottom: 100 }} >
                {({ isVisible }: { isVisible: boolean }) =>
                (
                    <div className={`skills-block ${isVisible ? 'visible' : ''}`}>
                        {html}
                    </div>
                )}
            </VisibilitySensor >
        </>
    )
}
function Skills() {
    return (
        <>
            <div className='flex-inline'>
                <h1 className='tabLeft'>What I do ?&nbsp;&nbsp;&nbsp;</h1>
                <DecorLine />
            </div>
            <p className='tabLeft font-choco green' >
                I consider myself a self-taught programmer with a strong passion for learning and exploring new technologies.
                <br />
                <br />
                I eager to learn, and I learn it fast.
            </p>

            <SkillBlock html={block_language} />
            <SkillBlock html={block_framework} />
            <SkillBlock html={block_other} />
        </>
    )
}
export default Skills;