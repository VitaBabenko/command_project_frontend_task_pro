import ProjectOffice from 'components/ProjectOffice/ProjectOffice';
// import { TestBg } from 'components/TestBg/TestBg';
import { Header } from '../components/Header/Header';
import { Sidebar } from '../components/Sidebar/Sidebar';

const HomePage = () => {
  return (
    <>
      <Header />
      {/* <TestBg /> */}
      <Sidebar />
      <ProjectOffice />
    </>
  );
};

export default HomePage;
