import { Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';
// import ProjectOffice from 'components/ProjectOffice/ProjectOffice';
// import { TestBg } from 'components/TestBg/TestBg';
import { Header } from '../components/Header/Header';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { selectDashboards } from 'redux/dashboards/selectors';
import { useEffect, Suspense, useState, useRef } from 'react';
import { fetchUserDashboards } from 'redux/dashboards/operation';
import { Loader } from '../components/Loader/Loader';
import { DefaultScreen } from 'components/DefaultScreen/DefaultScreen';

const HomePage = () => {
  const dashboards = useSelector(selectDashboards);
  // const token = useSelector(state => state.auth.token);
  // console.log(token)
  const dispatch = useDispatch();
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

  useEffect(() => {
    const fetchDashboards = async () => {
      dispatch(fetchUserDashboards());
    };
    fetchDashboards();
  }, [dispatch]);
  // console.log(dashboards);

  return (
    <Container>
      <Sidebar
        shouldShowSidebar={shouldShowSidebar}
        sidebarNode={sidebarNode}
      />
      <main style={{ width: '100%' }}>
        <Header onBurgerClick={(e) => handleBurgerClick(e)} />
        {/* <Routes>
        { dashboards && dashboards.map(dashboard => {
          return (<Route key={dashboard._id} path={`/boards/${dashboard._id}`} element={<ScreensPage dashboard={dashboard} />} />);
        })}

      </Routes> */}
        {/* <TestBg /> */}
        {/* <ProjectOffice /> */}
        {dashboards && dashboards.length <= 0 && <DefaultScreen />}
        <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default HomePage;
