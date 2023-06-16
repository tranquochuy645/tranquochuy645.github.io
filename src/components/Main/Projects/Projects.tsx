import  { useEffect, useState } from 'react';
import PinnedRepo from '../../PinnedRepo/PinnedRepo';
import './Projects.css';

interface Repository {
    id: number;
    name: string;
    full_name: string;
    html_url: string;
    description: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    size: number;
    created_at: string;
    commits_url:string;
}

function Projects() {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const url = 'https://api.github.com/users/tranquochuy645/repos?sort=created';

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data: Repository[]) => {
                setRepositories(data);
            })
            .catch((error) => {
                console.error('Error fetching repositories:', error);
            });
    }, []);

    return (
        <>
        <h1>My Projects</h1>
        <div id="projects-container">
            
            {repositories.map((repository) => (
                <PinnedRepo key={repository.id} repository={repository} />
            ))}
        </div>
        </>
    );
}

export default Projects;
