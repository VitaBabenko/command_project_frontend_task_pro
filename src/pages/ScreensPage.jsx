import { useEffect } from "react";
import ProjectOffice from "../components/ProjectOffice/ProjectOffice";
import { useSelector } from "react-redux";
import { selectDashboards } from "redux/dashboards/selectors";
import { DefaultScreen } from "components/DefaultScreen/DefaultScreen";

const ScreensPage = () => {
  const dashboards = useSelector(selectDashboards);

  useEffect(() => {
  }, [dashboards]);


  console.log(dashboards);
  return (
    <>
      {dashboards && dashboards.length > 0 ? <ProjectOffice /> : <DefaultScreen />} 
    </>
  );
};

export default ScreensPage;
