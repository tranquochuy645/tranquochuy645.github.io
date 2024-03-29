import { useEffect, useState } from 'react';
import PinnedRepo from './PinnedRepo/PinnedRepo.tsx';
import './Projects.css';
import DecorLine from '../../DecorLine/DecorLine.tsx';

interface Repository {
    id: number;
    html_url: string;
    description: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    size: number;
    created_at: string;
    commits_url: string;
    homepage: string;
    topics: Array<string>;
}

function Projects() {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const url = 'https://api.github.com/users/tranquochuy645/repos?sort=created';

    useEffect(() => {
        try {
            fetch(url)
                .then(
                    (response) => {
                        if (!response.ok) return;
                        response.json().then((data: Repository[]) => {
                            const filteredRepositories = data.filter(repo => (repo.homepage != "" && repo.html_url != "https://github.com/tranquochuy645/tranquochuy645"));
                            setRepositories(filteredRepositories);
                        })
                    }
                ).catch(
                    (onrejected) => {
                        console.log(onrejected?.reason);
                         //prevent browser logging network error to console
                    }
                );
        } catch (error) {
            //Workaround for network error logging
        }
    }, []);

    return (
        <>
            <div className='flex-inline'>
                <h1 className='tabLeft green'>My recent projects&nbsp;&nbsp;&nbsp;</h1>
                <DecorLine />
            </div>
            <div id="projects-container">
                {repositories.map((repository) => (
                    <PinnedRepo key={repository.id} repository={repository} />
                ))}
            </div>
            <div id='checkout-container'>
                <a id='checkout' href='https://github.com/tranquochuy645' aria-label='checkout my github'>
                    <h2 className='green'>Checkout my Github</h2>
                </a>
            </div>
        </>
    );
}

export default Projects;
