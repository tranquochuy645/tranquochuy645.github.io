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
                <div id='contact_info_basic'>
                    <div className="contact_block">
                        <img className="provider-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAYAAACMGIOFAAAC8UlEQVRoQ+2aXW7TQBSFj2vUNAKJdgWEt6JEoqyAsAKyA9odpCsoXUHLCvAOKCto2EGREok3wgowElWaCmu449rFnY7HY3ccj8nkpQ+9M3O/e07mNx7W4OOtASMc5P+islPSKdmiCji7tkgsZapOybVSkvWw7c0RthU6164cbPkYR7Qn2ie47QRwwv7goPsN8yaBF7vobfg4YsCQ8uuBYe55CDpTHMvykkImgOfUwV4OzHhrig9NgC5fYMR8fMwU/l8aDBdbM7wS85JCLvoIqDLvVBAeQ7B5icNV2viqjxMq/FiVF6l73J3ifTZGCnk1wE9ppcTeqXIbwMHmDBd1qho76wk+0RhDjXFCctmOEpL73XuE7xqdpSEhYzjszhCUaKMduhhgSEpwwHReKGxL88bz7LxxT8mk0/PCnoSAOuy7HMSTyx3r6eRFbd6QZSdprDHIuEND9k3cxCcXHXve464X8ma4B9lXOXvqyBjXuk4lM0lUsa/O7KnDuTLIMvaN7enT5JK/Luuw3casFlLDvibsKVagCcg4B5l9TdnTGsisfaMIoUl72gWZ2DdJSntxL/WFXOXsWjYxk/GNfSdNQhT15SB5hUruXX9Rk6dFlTX0f+2xjCpJnX3xGcYRcEbnz2eGYO50QyecHz4wijyc0kb7tc4YxiFptz9MbhIC2rG81UlCO4bhc+cS+/xgTg6bNAqZJk2L+5hAT7QhVIF0RqWrjNM0xBpIntB1H3sPsW9qT/G2wSpIDlrZvhl7iiJbB1nJvoI9WwOpY988e7YKUmlfhT1bBym1b4E9WwuZ2pf/LXtXa+3EY2S9TDpxkEI1a9nWmVQsry+npFOSLtFEeyQvSPxVq/DDj1r8FFIYaCCgjF07v7GTfVKUv09qHmtshJTlJIe8udE+I51fqk9DlinJ8JVFGInP/cqfuPCrEBUk3QqEZRf1qs6Nj3Ce+o0y+1yXHcf9jqdq1W1r55S0TZGq+Tglq1bOtnZOSdsUqZrPX6QHvUnhbtM8AAAAAElFTkSuQmCC" />
                        <p className="green">
                            <strong>Email:</strong><br /> tranquochuy645@gmail.com
                        </p>
                        <img className="cpy-clipboard" alt="copy to clipboard"
                            src="/assets/imgs/copy-alt-regular-24.png"
                            onClick={
                                () => { navigator.clipboard.writeText("tranquochuy645@gmail.com") }
                            } />
                    </div>
                    <div className="contact_block">
                        <img className="provider-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFGUlEQVR4Xu2a71nbMBDGlQKfSydoOkHbCRomKExAmIAyATBBYYKaCUonACZomKDpBE0/A03fixwe45ysV39sAsTPkycEy6e7n053J8k988Kv3gu336wArDzghRNYnikwNR82jNmfGjOWMZFvKDe+7ZmrNsdoaQCsT80AylxoxgLGJe6d3xhzhqg1yQnkSQCoGgwY5/h9Cs+4zAEiCcDa1OxCQP/WjszMdWOvJg9weQX63UvtNw7A1Gxivoq7fpgr9w/K3PVM0RWAeT/wiCN4w3Fsv+EAbLD6VjU+CwTIXTfmRGRBqU8hBkmMgDfsxMSHMABWyQs8tOlSEIHqIxQZhRjgaosptv3KmG3cH+Dz1iNzjL4FQlDfNAAoM4QyMvKNF0ZjgtHYClXEJ1diBNocNXlHTN8UAHR+iIZHPiUr87IVCCK/DJYyVd479BnBE2QAqHTpBYAOhfoha3ylXZAiQfIRhDEVC+j1WXtuFhN6gEBcXgAbU/MLcvqELK1JexCsNzgHBxCOAcHrtQwAyEq6Rjc9BEbPVakDxmU5PJKRvDPmuinXN0HAVHjnqxO6ACCmF4Cw18TAUwgVMObYZQyePdemAzMVugLghcBUgs5iyxZml1pgBIStprKZATCGYF8O9nn47H7TvGQAlJ2o3uR6Hn3+AACpJdTLCwCCZSUWVJk10cAo7qBklgXNgysAgHF5gktXTJ83rrTIAFDnFzXkSiOMyBVGZLBwC268hqpPFlfywX1p4/Q8LcA1QDxADJqV2fWLARBbB6iMnACU1lIKQ0HJ96+V22cwalj/P9L2uA6uqU8vALYEZj3CNQWcz9uiR3aHFiBoXgAABWTt1uUBlmqrFwAil6z+frIGeuZ/1JK5XBR9r8vWYLraurKBHwB6xdyaONyQ5pK6X+BwbdkZ+qJMg4XizdU/CyApEKYaLwZqru2a22i7AMCVgikAECiUv9LDXWmYw3gR5yh51TJbS4dJAMCzjzggi6KgK5fxpQeog6AFN0c9oGYNygNKBWSnxbUGXwCT0/iZcJsN7vcg5x2qZa7duXqwa4VNmom2SRMCgJ4GcDc1OAW5T0eNaQAyApgGf0i9qCUwKavVZjwARyR2acesxVu1jBQeBCCwKFKDDqlXZ83CANh0RK8On4IXxABwHmLWh43ZkfENdbkg2reJwJxqS2mfjKb7wQDKlFjge2HBoXWUkhG0hRjkJR2F1XWMAiCFEfLsiF0fxNQEnlWod4+R9Yo4ADYj0HWBKBMCgVyCZ4EQDUCMCgmI5Rw+QeV20DQ6pPFzEcnnDkkAyvJU3axwGTkLjAYQlEPMQOOzQEgDYL2Azgo1KA/2+iONr0KQlyWCTobl4WQAIiRVeYgQxYds4HJkm6gD2SwAyniQdfM0BgamVzCEbABC64MYA9lnQjJOVgDL4gkhaTc7gAwxgR1obztmLdIKgNITBviWzVTtUMOrfI4GzDsCrQGYGWBLZjnZyXa2GAKGiQXtAii1lbJZFjEde8M1NkwX9hDrADsBUPGGE3SovtcTMrJE22vM/wHzolR3AEqtmdfdCAOdTeBpf1Fqi/FUVdg5gHvN7ZmjrCipfQUWSuiLmo8HYG6R3W0e4qd86HMHDQgT9B4vBjBDaE+gtuHGkkJlkUWnUCblaSo8vgc0gcE0wVsj8saIRHP5bOLvPr6rb478hvEF807g0wPAeE1im+X2gETjmMdXABhKz7nNygOe8+gytq08gKH0nNv8B6fj0VCVf1EJAAAAAElFTkSuQmCC" />
                        <p className="green">
                            <strong>Mobile:</strong><br /> +84 37 825 8645
                        </p>
                        <img className="cpy-clipboard" alt="copy to clipboard"
                            src="/assets/imgs/copy-alt-regular-24.png"
                            onClick={
                                () => { navigator.clipboard.writeText("+84378258645") }
                            } />
                    </div>
                </div>
                <DecorLine />

                <div id="gh-short">
                    <div id="gh_left" >
                        <div className="contact_block">
                            <a href='https://github.com/tranquochuy645' target='_blank' rel='noopener noreferrer'>
                                <img className="provider-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
                            </a>
                            <p><a className="green none-decoration-exhov" href="https://github.com/tranquochuy645" aria-label="HCMUTE website">https://github.com/tranquochuy645</a></p>
                        </div>
                        <img id="contribution-chart" src="https://ghchart.rshah.org/39BD00/tranquochuy645" alt="Huy's contributions this year"></img>
                    </div>
                    <img id="prefered-langs" src="https://github-readme-stats.vercel.app/api/top-langs?username=tranquochuy645&langs_count=8&layout=donut&hide_border=true&bg_color=00000000&title_color=70ff2d&text_color=fff" />
                </div>
            </div>
        </>
    );
}

export default Contact;
