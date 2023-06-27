import React from 'react';
// import './styles.sass';
import { Logo } from './components/Logo/Logo';
import { Boards } from './components/Boards/Boards';
import { NeedHelp } from '../NeedHelp/NeedHelp';
import { Logout } from './components/Logout/Logout';
import { useNavigate } from 'react-router-dom';

export const Sidebar = ({
  isNeedHelp = false
}) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log('Logout');
    console.log('Await for connect auth slices to react project');

  }

  const handleCreateNewProject = () => {
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
