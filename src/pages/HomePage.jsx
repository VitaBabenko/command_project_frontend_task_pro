import Container from 'components/Container/Container';
import ProjectOffice from 'components/ProjectOffice/ProjectOffice';
// import { TestBg } from 'components/TestBg/TestBg';
import { Header } from '../components/Header/Header';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { selectDashboards } from 'redux/dashboards/selectors';
import { useEffect } from 'react';
import { fetchUserDashboards } from 'redux/dashboards/operation';

const HomePage = () => {
  const dashboards = useSelector(selectDashboards);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDashboards = async () => {
      dispatch(fetchUserDashboards());
    };
    fetchDashboards();
  }, [dispatch]);
  console.log(dashboards);

  return (
    <Container>
      <Sidebar />
      <div>
      <Header />
      {/* <Routes>
        { dashboards && dashboards.map(dashboard => {
          return (<Route key={dashboard._id} path={`/boards/${dashboard._id}`} element={<ScreensPage dashboard={dashboard} />} />);
        })}

      </Routes> */}
      {/* <TestBg /> */}
        {/* <ProjectOffice /> */}
      </div>
    </Container>
  );
};

export default HomePage;
