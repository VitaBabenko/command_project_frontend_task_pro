import React from 'react';
import { Logo } from './components/Logo/Logo';
import { Boards } from './components/Boards/Boards';
import { NeedHelp } from '../NeedHelp/NeedHelp';
import { Logout } from './components/Logout/Logout';
import { useNavigate } from 'react-router-dom';
import { SidebarMain, Inn } from './Sidebar.styled';
import { useDispatch } from 'react-redux';
import { addUserBoard } from 'redux/dashboards/operation';
import { logOut } from '../../redux/Auth/operations';
import classNames from 'classnames';

export const Sidebar = ({
  isNeedHelp = true,
  shouldShowSidebar = true,
}) => {
  const navigate = useNavigate();
  //
  const dispatch = useDispatch();
  // const dashboard = useSelector(selectDashboards);
  // console.log(dashboard)

  const newBoard = {
    title: 'test dshboard2',
    background: 'testUrl',
    dashboardIcon: 'testIcon',
  };

  const handleLogout = () => {
    console.log('Logout');
    dispatch(logOut());
  };

  const handleCreateNewProject = () => {
    dispatch(addUserBoard(newBoard));
    console.log('Create new project');
  };

  const handleHome = e => {
    e.stopPropagation();
    e.preventDefault();
    navigate('/home');
  };

  const classes = classNames('', {
    'visible': shouldShowSidebar
  })

  return (
    <SidebarMain className={classes}>
      <Inn>
        <Logo goHome={handleHome} />

        <Boards onCreateNew={handleCreateNewProject} />

        {isNeedHelp && <NeedHelp />}

        <Logout onClickLogout={handleLogout} />
      </Inn>
    </SidebarMain>
  );
};
