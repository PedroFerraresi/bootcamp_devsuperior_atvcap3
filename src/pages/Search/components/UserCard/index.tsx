import { GitHubUser } from 'core/types/GitHub';
import Button from 'core/components/Button';
import './styles.scss';
import dayjs from 'dayjs';

type Props = {
  user: GitHubUser;
}

const UserCard = ({user}: Props) => (
  <div className="user-card-container">
    <div className="image-container">
      <img src={user.avatar_url} alt="Imagem do Perfil" />
      
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        <Button text="Ver Perfil" />
      </a>
    </div>

    <div className="content-container">
      <div className="top-section">
        <div className="pubblic-repos">
          Repositórios públicos: {user.public_repos}
        </div>

        <div className="followers">
          Seguidores: {user.followers}
        </div>

        <div className="following">
          Seguindo: {user.following}
        </div>
      </div>

      <div className="main-section">
        <h1>Informações</h1>
        
        <div className="main-section-content-container">
          <h2>Empresa:</h2> {user.company === null || user.company === '' ? "-" : user.company}
        </div>

        <div className="main-section-content-container">
          <h2>Website/Blog:</h2> {user.blog === null || user.blog === '' ? "-" : user.blog}
        </div>

        <div className="main-section-content-container">
          <h2>Localidade:</h2> {user.location === null || user.location === '' ? "-" : user.location}
        </div>

        <div className="main-section-content-container">
          <h2>Membro desde:</h2> {user.created_at === null || user.created_at === '' ? "-" : dayjs(user.created_at).format('DD/MM/YYYY')}
        </div>
      </div>
    </div>
  </div>
);

export default UserCard; 