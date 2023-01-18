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
import MainHome from './pages/MainHome/MainHome';
import Calendarr from './pages/calendar/Calendarr';
import Tasks from './pages/tasks/Tasks';
import RegistrationPage from './pages/registration/RegistrationPage';

const App = () => {
  return (
    <MainProvider>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path={routes.main} element={<Navigate to={routes.login} />} />

          <Route element={<DashboardTemplate />}>
            <Route path={routes.mainHome} element={<MainHome />} />
            <Route path={routes.calendar} element={<Calendarr />} />
            <Route path={routes.tasks} element={<Tasks />} />
          </Route>

          <Route element={<AuthorizationTemplate />}>
            <Route path={routes.login} element={<LoginPage />} />
            <Route path={routes.registration} element={<RegistrationPage />} />
          </Route>

          <Route path={routes.error} element={<Page404 />} />
        </Routes>
      </Router>
    </MainProvider>
  );
};

export default App;
