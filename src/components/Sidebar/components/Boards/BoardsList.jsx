import React from 'react';
import { ProjectItem } from './ProjectItem';
import { SidebarPrjctList } from './Board.styled';
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchUserDashboards } from 'redux/dashboards/operation';
import { selectDashboards } from 'redux/dashboards/selectors';
import { useNavigate } from 'react-router-dom';

export const BoardsList = () => {
  const dashboards = useSelector(selectDashboards);
  const isLoading = useSelector(state => state.dashboard.isLoading);
  // console.log(isLoading)
  // console.log(dashboards)
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // console.log(dashboards);

  const handleDashboardClick = dashboardiId => {
    navigate(`/boards/${dashboardiId}`);
  };

  return (
    <SidebarPrjctList>
      {dashboards &&
        dashboards.map(dashboard => {
          console.log(dashboard)
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
    </SidebarPrjctList>
  );
};
