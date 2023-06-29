import { Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';
// import ProjectOffice from 'components/ProjectOffice/ProjectOffice';
// import { TestBg } from 'components/TestBg/TestBg';
import { Header } from '../components/Header/Header';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { useDispatch } from 'react-redux';
// import { selectDashboards } from 'redux/dashboards/selectors';
import { useEffect, Suspense } from 'react';
import { fetchUserDashboards } from 'redux/dashboards/operation';

const HomePage = () => {
  // const dashboards = useSelector(selectDashboards);
  // const token = useSelector(state => state.auth.token);
  // console.log(token)
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDashboards = async () => {
      dispatch(fetchUserDashboards());
    };
    fetchDashboards();
  }, [dispatch]);
  // console.log(dashboards);

  return (
    <Container>
      <Sidebar />
      <div style={{width: "100%"}}>
        <Header />
        {/* <Routes>
        { dashboards && dashboards.map(dashboard => {
          return (<Route key={dashboard._id} path={`/boards/${dashboard._id}`} element={<ScreensPage dashboard={dashboard} />} />);
        })}

      </Routes> */}
        {/* <TestBg /> */}
        {/* <ProjectOffice /> */}
      </div>
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default HomePage;
