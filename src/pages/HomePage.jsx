import ProjectOffice from 'components/ProjectOffice/ProjectOffice';
import { Header } from '../components/Header/Header';
import { Sidebar } from '../components/Sidebar/Sidebar';

const HomePage = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <ProjectOffice />
    </>
  );
};

export default HomePage;
