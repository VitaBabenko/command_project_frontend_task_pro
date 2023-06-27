import ProjectOffice from 'components/ProjectOffice/ProjectOffice';
// import { TestBg } from 'components/TestBg/TestBg';

import { Header } from '../components/Header';
import { SideBar } from '../components/SideBar';

const HomePage = () => {
  return (
    <>
      <Header />
      <SideBar />
      {/* <TestBg /> */}
      <ProjectOffice />
    </>
  );
};

export default HomePage;
