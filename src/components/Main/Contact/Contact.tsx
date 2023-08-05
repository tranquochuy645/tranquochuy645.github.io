import './Contact.css';
import { useEffect, useState } from 'react';
import DecorLine from '../../DecorLine/DecorLine';

function Contact() {
    const [readmeContent, setReadmeContent] = useState('');
    useEffect(() => {
        const fetchReadme = async () => {
            try {
                const response = await fetch(
                    'https://api.github.com/repos/tranquochuy645/tranquochuy645/contents/README.md'
                );

                const data = await response.json();

                // Decode the base64 content
                const decodedContent = atob(data.content);

                setReadmeContent(decodedContent);
            } catch (error) {
                console.error('Error fetching README:', error);
            }
        };
        fetchReadme();
    }, []);
    return (
        <>
            <div className='flex-inline'>
                <h1 className='tabLeft green'>Reach out to me !&nbsp;&nbsp;&nbsp;</h1>
                <DecorLine />
            </div>
            <div className='contact_info floating-bg'>
                <div className="contact_block green">
                    <img className="provider-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAYAAACMGIOFAAAC8UlEQVRoQ+2aXW7TQBSFj2vUNAKJdgWEt6JEoqyAsAKyA9odpCsoXUHLCvAOKCto2EGREok3wgowElWaCmu449rFnY7HY3ccj8nkpQ+9M3O/e07mNx7W4OOtASMc5P+islPSKdmiCji7tkgsZapOybVSkvWw7c0RthU6164cbPkYR7Qn2ie47QRwwv7goPsN8yaBF7vobfg4YsCQ8uuBYe55CDpTHMvykkImgOfUwV4OzHhrig9NgC5fYMR8fMwU/l8aDBdbM7wS85JCLvoIqDLvVBAeQ7B5icNV2viqjxMq/FiVF6l73J3ifTZGCnk1wE9ppcTeqXIbwMHmDBd1qho76wk+0RhDjXFCctmOEpL73XuE7xqdpSEhYzjszhCUaKMduhhgSEpwwHReKGxL88bz7LxxT8mk0/PCnoSAOuy7HMSTyx3r6eRFbd6QZSdprDHIuEND9k3cxCcXHXve464X8ma4B9lXOXvqyBjXuk4lM0lUsa/O7KnDuTLIMvaN7enT5JK/Luuw3casFlLDvibsKVagCcg4B5l9TdnTGsisfaMIoUl72gWZ2DdJSntxL/WFXOXsWjYxk/GNfSdNQhT15SB5hUruXX9Rk6dFlTX0f+2xjCpJnX3xGcYRcEbnz2eGYO50QyecHz4wijyc0kb7tc4YxiFptz9MbhIC2rG81UlCO4bhc+cS+/xgTg6bNAqZJk2L+5hAT7QhVIF0RqWrjNM0xBpIntB1H3sPsW9qT/G2wSpIDlrZvhl7iiJbB1nJvoI9WwOpY988e7YKUmlfhT1bBym1b4E9WwuZ2pf/LXtXa+3EY2S9TDpxkEI1a9nWmVQsry+npFOSLtFEeyQvSPxVq/DDj1r8FFIYaCCgjF07v7GTfVKUv09qHmtshJTlJIe8udE+I51fqk9DlinJ8JVFGInP/cqfuPCrEBUk3QqEZRf1qs6Nj3Ce+o0y+1yXHcf9jqdq1W1r55S0TZGq+Tglq1bOtnZOSdsUqZrPX6QHvUnhbtM8AAAAAElFTkSuQmCC" />                    <p>
                        <strong>Email:</strong> tranquochuy645@gmail.com
                    </p>
                </div>
                <DecorLine />

                <div className="contact_block green">
                    <img className="provider-logo" src="data:image/png;base64,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" />
                    <p>
                        <strong>Phone:</strong> (+84) 037-8258-645
                    </p>
                </div>
                <DecorLine />
                <div id="gh-short">
                    <div id="gh_left" >
                        <div className="contact_block green">
                            <a href='https://github.com/tranquochuy645' target='_blank' rel='noopener noreferrer'>
                                <img className="provider-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
                            </a>
                            <p>https://github.com/tranquochuy645</p>
                        </div>
                        <p>{readmeContent}</p>
                        <img id="contribution-chart" src="https://ghchart.rshah.org/39BD00/tranquochuy645" alt="Huy's contributions this year"></img>
                    </div>
                    <img id="prefered-langs" src="https://github-readme-stats.vercel.app/api/top-langs?username=tranquochuy645&langs_count=8&layout=donut&hide_border=true&bg_color=00000000&title_color=70ff2d&text_color=fff" />
                </div>
                <DecorLine />

            </div>
        </>
    );
}

export default Contact;
