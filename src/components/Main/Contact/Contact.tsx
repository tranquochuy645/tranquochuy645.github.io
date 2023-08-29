import './Contact.css';
import DecorLine from '../../DecorLine/DecorLine';

function Contact() {
    return (
        <>
            <div className='flex-inline'>
                <h1 className='tabLeft green'>Reach out to me !&nbsp;&nbsp;&nbsp;</h1>
                <DecorLine />
            </div>
            <div className='contact_info floating-bg'>
                <div className="contact_block">
                    <img className="provider-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAYAAACMGIOFAAAC8UlEQVRoQ+2aXW7TQBSFj2vUNAKJdgWEt6JEoqyAsAKyA9odpCsoXUHLCvAOKCto2EGREok3wgowElWaCmu449rFnY7HY3ccj8nkpQ+9M3O/e07mNx7W4OOtASMc5P+islPSKdmiCji7tkgsZapOybVSkvWw7c0RthU6164cbPkYR7Qn2ie47QRwwv7goPsN8yaBF7vobfg4YsCQ8uuBYe55CDpTHMvykkImgOfUwV4OzHhrig9NgC5fYMR8fMwU/l8aDBdbM7wS85JCLvoIqDLvVBAeQ7B5icNV2viqjxMq/FiVF6l73J3ifTZGCnk1wE9ppcTeqXIbwMHmDBd1qho76wk+0RhDjXFCctmOEpL73XuE7xqdpSEhYzjszhCUaKMduhhgSEpwwHReKGxL88bz7LxxT8mk0/PCnoSAOuy7HMSTyx3r6eRFbd6QZSdprDHIuEND9k3cxCcXHXve464X8ma4B9lXOXvqyBjXuk4lM0lUsa/O7KnDuTLIMvaN7enT5JK/Luuw3casFlLDvibsKVagCcg4B5l9TdnTGsisfaMIoUl72gWZ2DdJSntxL/WFXOXsWjYxk/GNfSdNQhT15SB5hUruXX9Rk6dFlTX0f+2xjCpJnX3xGcYRcEbnz2eGYO50QyecHz4wijyc0kb7tc4YxiFptz9MbhIC2rG81UlCO4bhc+cS+/xgTg6bNAqZJk2L+5hAT7QhVIF0RqWrjNM0xBpIntB1H3sPsW9qT/G2wSpIDlrZvhl7iiJbB1nJvoI9WwOpY988e7YKUmlfhT1bBym1b4E9WwuZ2pf/LXtXa+3EY2S9TDpxkEI1a9nWmVQsry+npFOSLtFEeyQvSPxVq/DDj1r8FFIYaCCgjF07v7GTfVKUv09qHmtshJTlJIe8udE+I51fqk9DlinJ8JVFGInP/cqfuPCrEBUk3QqEZRf1qs6Nj3Ce+o0y+1yXHcf9jqdq1W1r55S0TZGq+Tglq1bOtnZOSdsUqZrPX6QHvUnhbtM8AAAAAElFTkSuQmCC" />                    <p>
                        <strong>Email:</strong> tranquochuy645@gmail.com
                    </p>
                </div>
                <DecorLine />
                <div id="gh-short">
                    <div id="gh_left" >
                        <div className="contact_block">
                            <a href='https://github.com/tranquochuy645' target='_blank' rel='noopener noreferrer'>
                                <img className="provider-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
                            </a>
                            <p>https://github.com/tranquochuy645</p>
                        </div>
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
