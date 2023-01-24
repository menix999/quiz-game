import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import MainProvider from './context/MainProvider';
import { GlobalStyle } from './theme/GlobalStyles';
import { routes } from './routes';
import LoginPage from './pages/login/LoginPage';
import AuthorizationTemplate from './templates/AuthorizationTemplate';
import Page404 from './pages/Page404/Page404';
import DashboardTemplate from './templates/DashboardTemplate';
import RegistrationPage from './pages/registration/RegistrationPage';
import HomePage from './pages/homePage/HomePage';
import Profile from './pages/profile/Profile';

const App = () => {
  return (
    <MainProvider>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path={routes.main} element={<Navigate to={routes.login} />} />

          <Route element={<DashboardTemplate />}>
            <Route path={routes.home} element={<HomePage />} />
            <Route path={routes.profile} element={<Profile />} />
          </Route>

          <Route element={<AuthorizationTemplate />}>
            <Route path={routes.login} element={<LoginPage />} />
            <Route path={routes.register} element={<RegistrationPage />} />
          </Route>

          <Route path={routes.error} element={<Page404 />} />
        </Routes>
      </Router>
    </MainProvider>
  );
};

export default App;
