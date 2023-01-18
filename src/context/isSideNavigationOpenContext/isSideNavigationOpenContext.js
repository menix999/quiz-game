import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { useWindowWidthState } from '../windowWidthContext/WindowWidthContext';

const IsSideNavigationOpenStateContext = createContext(true);
const IsSideNavigationOpenDispatchContext = createContext(() => {});

export const IsSideNavigationOpenProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const { isMobile } = useWindowWidthState();
  useEffect(() => {
    setIsOpen(!isMobile);
  }, [isMobile]);

  const handleSetIsOpen = useCallback((state) => {
    if (state) setIsOpen(state);
    else setIsOpen((prevState) => !prevState);
  }, []);

  return (
    <IsSideNavigationOpenStateContext.Provider value={isOpen}>
      <IsSideNavigationOpenDispatchContext.Provider value={handleSetIsOpen}>
        {children}
      </IsSideNavigationOpenDispatchContext.Provider>
    </IsSideNavigationOpenStateContext.Provider>
  );
};

export const useIsSideNavigationOpenState = () =>
  useContext(IsSideNavigationOpenStateContext);
export const useIsSideNavigationOpenDispatch = () =>
  useContext(IsSideNavigationOpenDispatchContext);
