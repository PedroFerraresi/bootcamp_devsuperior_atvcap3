import React from 'react';
import { GitHubUser } from 'core/types/GitHub';
import './styles.scss';

type Props = {
  user: GitHubUser;
}

const UserCard = ({user}: Props) => (
  <img src={user.avatar_url} alt={user.url} />
);

export default UserCard; 