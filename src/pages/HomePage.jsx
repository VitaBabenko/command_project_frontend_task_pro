import { Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';
import { Header } from '../components/Header/Header';
import { Sidebar } from '../components/Sidebar/Sidebar';

import { useDispatch, useSelector } from 'react-redux';
import { selectDashboards } from 'redux/dashboards/selectors';
import { useEffect, Suspense, useState, useRef } from 'react';
import { fetchUserDashboards } from 'redux/dashboards/operation';

import { Loader } from '../components/Loader/Loader';

const HomePage = () => {
  // const token = useSelector(state => state.auth.token);
  // console.log(token)
  // const dispatch = useDispatch();
  const [shouldShowSidebar, setShouldShowSidebar] = useState(false);
  const sidebarNode = useRef(null)


  useEffect(() => {
    document.addEventListener('click', handleDocumentClick, true);

    return () => {
      document.removeEventListener('click', handleDocumentClick, true);
    };
  }, []);

  const handleDocumentClick = (e) => {
    const { current } = sidebarNode;

    if (current !== null || true) {
      setShouldShowSidebar(e.target === current)
    }
  }

  const handleBurgerClick = (e) => {
    setShouldShowSidebar(!shouldShowSidebar);
  };

  // useEffect(() => {
  //   const fetchDashboards = async () => {
  //     dispatch(fetchUserDashboards());
  //   };
  //   fetchDashboards();
  // }, [dispatch]);
  // console.log(dashboards);

  return (
    <Container>
      <Sidebar
        shouldShowSidebar={shouldShowSidebar}
        sidebarNode={sidebarNode}
      />
      <div style={{ width: '100%' }}>
        <Header onBurgerClick={(e) => handleBurgerClick(e)} />

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </Container>
  );
};

export default HomePage;
