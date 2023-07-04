import { Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';
import { Header } from '../components/Header/Header';
import { Sidebar } from '../components/Sidebar/Sidebar';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectDashboards } from 'redux/dashboards/selectors';
import { Suspense, useState } from 'react';
// import { fetchUserDashboards } from 'redux/dashboards/operation';
import { Loader } from '../components/Loader/Loader';

const HomePage = () => {
  // const token = useSelector(state => state.auth.token);
  // console.log(token)
  // const dispatch = useDispatch();
  const [shouldShowSidebar, setShouldShowSidebar] = useState(false);

  const handleBurgerClick = () => {
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
      <Sidebar shouldShowSidebar={shouldShowSidebar} />
      <div style={{ width: '100%' }}>
        <Header onBurgerClick={handleBurgerClick} />

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </Container>
  );
};

export default HomePage;
