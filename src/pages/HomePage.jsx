import Container from 'components/Container/Container';
import ProjectOffice from 'components/ProjectOffice/ProjectOffice';
// import { TestBg } from 'components/TestBg/TestBg';
import { Header } from '../components/Header/Header';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { selectDashboards } from 'redux/dashboards/selectors';
import { useEffect } from 'react';
import { fetchUserDashboards } from 'redux/dashboards/operation';
import ScreensPage from './ScreensPage';
import { Outlet, Route, Routes } from 'react-router-dom';

const HomePage = () => {
 
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDashboards = async () => { dispatch(fetchUserDashboards()) };
    fetchDashboards();

  }, []);
  
  const dashboards = useSelector(selectDashboards);
  console.log(dashboards)
  
  
  return (
    <Container>
      <Header />
      <Routes>
        {dashboards.length > 1 && dashboards.map(dashboard => {
          return (<Route key={dashboard._id} path={`/boards/${dashboard._id}`} element={<ScreensPage board={dashboard} />} />);
        })}
      </Routes>
      {/* <TestBg /> */}
      <Sidebar />
      {/* <Outlet /> */}
      {/* <ScreensPage /> */}
    </Container>
  );
};

export default HomePage;
