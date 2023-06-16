import { useState, useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import './PinnedRepo.css';

interface Repository {
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  size: number;
  created_at: string;
  commits_url: string;
  topics: Array<string>;
}

interface PinnedRepoProps {
  repository: Repository;
}

const getLanguageIcon = (language: string) => {
  const lowercasedLanguage = language.toLowerCase();
  let iconName = '';

  switch (lowercasedLanguage) {
    case 'css':
      iconName = 'css3';
      break;
    case 'shell':
      iconName = 'bash';
      break;
    case 'c#':
      iconName = 'csharp';
      break;
    default:
      iconName = lowercasedLanguage;
  }

  return <i className={`devicon-${iconName}-plain colored`}></i>;
};

const getCommitCount = (commits_url: string): Promise<string> => {
  commits_url = commits_url.replace("{/sha}", "?per_page=1&page=1");

  return fetch(commits_url)
    .then(
      (res) => {
        const linkHeader = res.headers.get("Link") || "";
        console.log(linkHeader);
        const commitCountRegex = /page=(\d+)>;\s*rel="last"/;
        const match = commitCountRegex.exec(linkHeader);

        if (match && match[1]) {
          const commitCount = match[1];
          return commitCount;
        }

        return "0"; // Default to 0 if commit count is not found
      }
    );
};
const formatTimestamp = (timestamp: string) => {
  const date = new Date(timestamp);
  return date.toLocaleString();
};

const PinnedRepo: React.FC<PinnedRepoProps> = ({ repository }) => {
  const [commitCount, setCommitCount] = useState<string>("0");
  const created_time = formatTimestamp(repository.created_at);
  const [isVisible, setIsVisible] = useState(false); // Track visibility state
  const handleVisibilityChange = (isVisible: boolean) => {
    setIsVisible(isVisible);
  };
  useEffect(() => {
    getCommitCount(repository.commits_url)
      .then((count) => {
        setCommitCount(count);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [repository.commits_url]);

  const displaySize =
    repository.size > 1024
      ? `${(repository.size / 1024).toFixed(2)} MB`
      : `${repository.size} KB`;
  const languageIcon = getLanguageIcon(repository.language);

  return (
    <VisibilitySensor partialVisibility onChange={handleVisibilityChange}>
      <a className={`repo-container none-decoration  ${isVisible ? 'visible' : ''}`} href={repository.html_url} aria-label='visit repo'>
        <div className="repo-info">
          <h1 className='green'>
            {repository.name}
          </h1>
          <h3 className='white font-default'>{repository.description}</h3>
        </div>
        <div className="repo-stats white font-default">
          <span>
            {languageIcon}&nbsp;&nbsp;{repository.language}
          </span>
          <span>
            &nbsp;  {repository.stargazers_count}&nbsp;
            <img className="icon" src="/assets/imgs/star.svg"></img>
          </span>
          <span>
            &nbsp;  {repository.forks_count}&nbsp;
            <img className="icon" src="/assets/imgs/fork.svg"></img>
          </span>
          <span>
            &nbsp;{commitCount}&nbsp;commits
          </span>
          <span>
            &nbsp;&nbsp;{displaySize}
          </span>
          <p>Created at {created_time}</p>

          <p> {repository.topics.map((item) => {
            return <span> &nbsp;#{item}</span>
          })}</p>
        </div>
      </a>
    </VisibilitySensor>
  );
};

export default PinnedRepo;
