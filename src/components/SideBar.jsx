import { useState } from "react";
import { EditProfile } from "./EditProfile";
import { Modal } from "./Modal";
import { NeedHelp } from "./NeedHelp/NeedHelp";
import "../assets/index.css";

export const SideBar = () => {
  const [open, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button onClick={toggle}>open modal</button>
      <h1>TaskPro</h1>
      <NeedHelp></NeedHelp>

      {open && (
        <Modal {...{ open, toggle }}>
          <EditProfile />
        </Modal>
      )}
    </>
  );
};
