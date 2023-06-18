import { useEffect, useState } from 'react';
import PinnedRepo from '../../PinnedRepo/PinnedRepo';
import './Projects.css';

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
        fetch(url)
            .then((response) => response.json())
            .then((data: Repository[]) => {
                const filteredRepositories = data.filter(repo => repo.homepage != "");
                setRepositories(filteredRepositories);
            })
            .catch((error) => {
                console.error('Error fetching repositories:', error);
            });
    }, []);

    return (
        <>
            <h1 className='tabLeft'>My Projects</h1>
            <div id="projects-container">
                {repositories.map((repository) => (
                    <PinnedRepo key={repository.id} repository={repository} />
                ))}
            </div>
        </>
    );
}

export default Projects;
