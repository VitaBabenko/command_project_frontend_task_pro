import { Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';
import { Header } from '../components/Header/Header';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { DefaultScreen } from '../components/DefaultScreen/DefaultScreen';

import { useSelector, useDispatch } from 'react-redux';
import { selectDashboards } from 'redux/dashboards/selectors';
import { useEffect, Suspense, useState, useRef } from 'react';
import { fetchUserDashboards } from 'redux/dashboards/operation';

import { Loader } from '../components/Loader/Loader';

const HomePage = () => {
  const dashboards = useSelector(selectDashboards);
  const dispatch = useDispatch();
  const [shouldShowSidebar, setShouldShowSidebar] = useState(false);
  const sidebarNode = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick, true);

    return () => {
      document.removeEventListener('click', handleDocumentClick, true);
    };
  }, []);

  const handleDocumentClick = e => {
    const { current } = sidebarNode;

    if (current !== null || true) {
      setShouldShowSidebar(e.target === current);
    }
  };

  const handleBurgerClick = e => {
    setShouldShowSidebar(!shouldShowSidebar);
  };

  useEffect(() => {
    const fetchDashboards = async () => {
      dispatch(fetchUserDashboards());
    };
    fetchDashboards();
  }, [dispatch]);

  return (
    <Container>
      <Sidebar
        shouldShowSidebar={shouldShowSidebar}
        sidebarNode={sidebarNode}
      />
      <div style={{ width: '100%', position: 'relative' }}>
        <Header onBurgerClick={e => handleBurgerClick(e)} />

        {dashboards.length !== 0 ? (
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        ) : (
          <DefaultScreen />
        )}
      </div>
    </Container>
  );
};

export default HomePage;
