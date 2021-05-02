import React from 'react';
import Button from 'core/components/Button';
import { useState } from 'react';
import { makeRequest } from 'core/utils/request';
import { GitHubUser } from 'core/types/GitHub';
import UserCard from './components/UserCard';
import UserLoader from './components/Loaders/UserLoader';
import './styles.scss'

type FormState = {
  user: string;
}

const Search = () => {
  const [githubResponse, setGithubResponse] = useState<GitHubUser>({
    html_url: '',
    avatar_url: '',
    public_repos: '',
    followers: '',
    following: '',
    company: '',
    blog: '',
    location: '',
    created_at: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const [requestMade, setRequestMade] = useState(false);

  const [formData, setFormData] = useState<FormState>({
    user: ''
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData(data => ({ ...data, [name]: value }));
  }

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    setRequestMade(true);

    setIsLoading(true);

    makeRequest({user: formData.user})
      .then(response => setGithubResponse(response.data))
      .finally(() => {setIsLoading(false)});
  }

  return (
    <div className="search-container">
      <div className="form-container">
        <div className="form-title">
          Encontre um Perfil no Github
        </div>

        <form onSubmit={handleOnSubmit}>
          <input 
            name="user"
            value={formData.user}
            onChange={handleOnChange}
            type="text" 
            className="form-input" 
            placeholder="Usuário Github" 
          />

          <div className="btn-container">
            <Button text="Encontrar" />
          </div>
        </form>
      </div>

      { requestMade && 
        <div className="response-container">
          { isLoading ? <UserLoader /> : <UserCard user={githubResponse} /> }
        </div>
      }
    </div>
  );
}

export default Search;