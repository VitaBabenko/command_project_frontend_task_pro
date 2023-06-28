import ProjectOffice from "../components/ProjectOffice/ProjectOffice";

const ScreensPage = ({ board }) => {
  console.log(board)
  return (
    <>
      <ProjectOffice board={board}>

      </ProjectOffice>
    </>
  );
};

export default ScreensPage;
