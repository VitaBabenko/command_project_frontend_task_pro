import { NeedHelp } from "./NeedHelp/NeedHelp";
import { useDispatch, useSelector } from 'react-redux';
import { setNameModal } from 'redux/modal';
import { MODAL_EDIT_PROFILE } from '../components/Modal/ModalMapContainer/enums';
import "../assets/index.css";
import { fetchUserDashboards } from "redux/dashboards/operation";
import { selectDashboards } from "redux/dashboards/selectors";
import { useEffect } from "react";

export const SideBar = () => {
  const dispatch = useDispatch();
  const dashboards = useSelector(selectDashboards);
  console.log(dashboards)

  const toggle = () => {
    dispatch(setNameModal(MODAL_EDIT_PROFILE));
  };

  
  useEffect(() => {
    dispatch(fetchUserDashboards());
  }, [dispatch])
  


  return (
    <>
      <button onClick={toggle}>open modal</button>
      <h1>TaskPro</h1>
      <NeedHelp></NeedHelp>

      {/* {open && (
        <Modal {...{ open, toggle }}>
          <EditProfile />
        </Modal>
      )} */}
    </>
  );
};
