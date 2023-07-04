import { useEffect } from 'react';
import ProjectOffice from '../components/ProjectOffice/ProjectOffice';
import { useSelector, useDispatch } from 'react-redux';
import { selectDashboards } from 'redux/dashboards/selectors';
import { fetchUserDashboards } from 'redux/dashboards/operation';
import { DefaultScreen } from 'components/DefaultScreen/DefaultScreen';

const ScreensPage = () => {
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
    <>
      {dashboards && dashboards.length > 0 ? (
        <ProjectOffice />
      ) : (
        <DefaultScreen />
      )}
    </>
  );
};

export default ScreensPage;
