import React from 'react';
import { Logo } from './components/Logo/Logo';
import { Boards } from './components/Boards/Boards';
import { NeedHelp } from '../NeedHelp/NeedHelp';
// import { Logout } from './components/Logout/Logout';
import { useNavigate } from 'react-router-dom';
import { SidebarMain, Inn } from './Sidebar.styled';
import { useDispatch } from 'react-redux';
import { addUserBoard } from 'redux/dashboards/operation';
// import { logout } from '../../redux/Auth/slice';

export const Sidebar = ({ isNeedHelp = true }) => {
  const navigate = useNavigate();
  //
  const dispatch = useDispatch();
  // const dashboard = useSelector(selectDashboards);
  // console.log(dashboard)

  const newBoard = {
    title: 'test dshboard1',
    background: 'testUrl',
    dashboardIcon: 'testIcon',
  };

  // const handleLogout = () => {
  //   console.log('Logout');
  //   console.log('Await for connect auth slices to react project');
  //   dispatch(logout())

  // }

  const handleCreateNewProject = () => {
    dispatch(addUserBoard(newBoard));
    console.log('Create new project');
  };

  const handleHome = e => {
    e.stopPropagation();
    e.preventDefault();
    navigate('/home');
  };

  return (
    <SidebarMain>
      <Inn>
        <Logo goHome={handleHome} />

        <Boards onCreateNew={handleCreateNewProject} />

        {isNeedHelp && <NeedHelp />}

        {/* <Logout
          onLogout={handleLogout}
        /> */}
      </Inn>
    </SidebarMain>
  );
};
