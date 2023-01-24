import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { UserCircleOIcon } from 'react-line-awesome';

import { routes } from '../routes';

const Home = () => <FontAwesomeIcon icon={faHome} />;
const Profile = () => <FontAwesomeIcon icon={faUser} />;

export const navigationArray = [
  {
    id: 1,
    text: 'Home',
    slug: 'home',
    path: routes.home,
    Icon: Home
  },
  {
    id: 2,
    text: 'Profile',
    slug: 'profile',
    path: routes.profile,
    Icon: Profile
  }
];
