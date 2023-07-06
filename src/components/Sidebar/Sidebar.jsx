import React, { useEffect } from 'react';
import { Logo } from './components/Logo/Logo';
import { Boards } from './components/Boards/Boards';
import { NeedHelp } from '../NeedHelp/NeedHelp';
import { Logout } from './components/Logout/Logout';
import { useNavigate } from 'react-router-dom';
import { SidebarMain } from './Sidebar.styled';
import { useDispatch } from 'react-redux';
// import { addUserBoard } from 'redux/dashboards/operation';
import { logOut } from '../../redux/authorization/operations';
import classNames from 'classnames';
import { fetchUserDashboards } from 'redux/dashboards/operation';

export const Sidebar = ({
  isNeedHelp = true,
  shouldShowSidebar = true,
  sidebarNode,
}) => {
  const navigate = useNavigate();
  //
  const dispatch = useDispatch();
  // const dashboard = useSelector(selectDashboards);
  // console.log(dashboard)

  // const newBoard = {
  //   title: 'test dshboard2',
  //   background: 'testUrl',
  //   dashboardIcon: 'testIcon',
  // };

  const handleLogout = () => {
    dispatch(logOut());
  };

  // const handleCreateNewProject = () => {
  //   dispatch(addUserBoard(newBoard));
  //   console.log('Create new project');
  // };

  useEffect(() => {
    const fetchDashboards = async () => {
      dispatch(fetchUserDashboards());
    };
    fetchDashboards();
  }, [dispatch]);

  const handleHome = e => {
    e.stopPropagation();
    e.preventDefault();
    navigate('/home');
  };

  const classes = classNames('', {
    visible: shouldShowSidebar,
  });

  return (
    <SidebarMain className={classes} ref={sidebarNode}>
      <Logo goHome={handleHome} />

      <Boards />

      {isNeedHelp && <NeedHelp />}

      <Logout onClickLogout={handleLogout} />
    </SidebarMain>
  );
};
