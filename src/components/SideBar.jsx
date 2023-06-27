import { NeedHelp } from "./NeedHelp/NeedHelp";
import { useDispatch } from 'react-redux';
import { setNameModal } from 'redux/modal';
import { MODAL_EDIT_PROFILE } from '../components/Modal/ModalMapContainer/enums';
import "../assets/index.css";

export const SideBar = () => {
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(setNameModal(MODAL_EDIT_PROFILE));
  };

  return (
    <>
      <button onClick={toggle}>open modal</button>
      <h1>TaskPro</h1>
      <NeedHelp></NeedHelp>

    </>
  );
};
