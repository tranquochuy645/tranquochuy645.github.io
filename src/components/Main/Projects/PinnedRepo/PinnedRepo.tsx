import { useState, useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import './PinnedRepo.css';

interface Repository {
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
  key: number;
  repository: Repository;
}

const getLanguageIcon = (language: string | undefined) => {
  const lowercasedLanguage = language?.toLowerCase() || "";
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
    case 'c++':
      iconName = 'cplusplus';
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
  useEffect(() => {
    getCommitCount(repository.commits_url)
      .then((count) => {
        setCommitCount(count);
      })
      // .catch((error) => {
      //   console.error("Error:", error);
      // });
  }, [repository.commits_url]);

  const displaySize =
    repository.size > 1024
      ? `${(repository.size / 1024).toFixed(2)} MB`
      : `${repository.size} KB`;
  const languageIcon = getLanguageIcon(repository.language);

  return (
    <VisibilitySensor partialVisibility={true} offset={{ top: 100, bottom: 100 }} >
      {({ isVisible }: { isVisible: boolean }) =>
        <a className={`repo-container floating-bg none-decoration  ${isVisible ? 'visible' : ''}`} href={repository.html_url} aria-label='visit repo'>
          <h2 className='green'>
            <img alt="repo" className='repo-img' src='/assets/imgs/repo.png' ></img> {repository.description}
          </h2>
          <p className=" white">
            <span>
              {languageIcon}&nbsp;&nbsp;&nbsp;{repository.language}&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span>
              {repository.stargazers_count}&nbsp;
              <img alt="star" className="icon" src="/assets/imgs/star.svg"></img>&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span>
              {repository.forks_count}&nbsp;
              <img alt="fork" className="icon" src="/assets/imgs/fork.svg"></img>&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span>
              {commitCount}&nbsp;commits&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span>
              {displaySize}
            </span>
          </p>
          <p className=" white font-default">Created at {created_time}</p>
          <p className=" white font-default"> {repository.topics.map((item, index) => {
            return <span key={repository.created_at + index}>
              &nbsp;#{item}</span>//unique keys
          })}</p>
        </a>
      }
    </VisibilitySensor>
  );
};

export default PinnedRepo;
