import React from 'react';
// import './styles.sass';
import { Logo } from './components/Logo/Logo';
import { Boards } from './components/Boards/Boards';
import { NeedHelp } from '../NeedHelp/NeedHelp';
import { Logout } from './components/Logout/Logout';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUserBoard } from 'redux/dashboards/operation';
// import { selectDashboards } from 'redux/dashboards/selectors';

// 


export const Sidebar = ({
  isNeedHelp = false
}) => {
  const navigate = useNavigate();
  // 
  const dispatch = useDispatch();
  // const dashboard = useSelector(selectDashboards);
  // console.log(dashboard)

  const newBoard = {
    title: "test dshboard1",
    background: 'testUrl',
    dashboardIcon: 'testIcon',
  };



  const handleLogout = () => {
    console.log('Logout');
    console.log('Await for connect auth slices to react project');

  }

  const handleCreateNewProject = () => {
    dispatch(addUserBoard(newBoard));
    console.log('Create new project');
  }

  const handleHome = (e) => {
    e.stopPropagation();
    e.preventDefault();
    navigate('/home');
  }

  return (
    <div className="sidebar-main">
      <div className="inn">

        <Logo
          goHome={handleHome}
        />
        <p>My boards</p>

        <Boards
          onCreateNew={handleCreateNewProject}
        />

        {isNeedHelp && (<NeedHelp />)}

        <Logout
          onLogout={handleLogout}
        />
      </div>
    </div>
  );
};
