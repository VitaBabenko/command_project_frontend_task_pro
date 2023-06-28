import React from 'react';
import { ProjectItem } from './ProjectItem';
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchUserDashboards } from 'redux/dashboards/operation';
import { selectDashboards } from 'redux/dashboards/selectors';
import { useNavigate } from 'react-router-dom';

export const BoardsList = () => {
  const dashboards = useSelector(selectDashboards);
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchDashboards = async () => { dispatch(fetchUserDashboards()) };
  //   fetchDashboards();

  // }, [dispatch]);

  // console.log(dashboards);

  const handleDashboardClick = dashboardiId => {
    navigate(`/boards/${dashboardiId}`);
  };

  return (
    <ul className="sidebar-projects-list">
      {dashboards &&
        dashboards.map(dashboard => {
          return (
            <ProjectItem
              key={dashboard._id}
              handleDashboardClick={handleDashboardClick}
              title={dashboard.title}
              id={dashboard._id}
              background={dashboard.background}
              dashboardIcon={dashboard.dashboardIcon}
            />
          );
        })}
    </ul>
  );
};
