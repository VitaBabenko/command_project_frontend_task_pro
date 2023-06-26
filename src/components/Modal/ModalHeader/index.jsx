// import spriteIcon from '../../../images/sprite.svg'
import './style.css';
import CloseIcon from "@mui/icons-material/Close";


export const ModalHeader = ({ headerTitle, toggle }) => {
  return (
    <div className='modal-header'>
      <div className='modal-header__title-wrapper'>
        <span className='modal-header__title'>{headerTitle}</span>
        <button className='modal-header__close' onClick={toggle}>
          <CloseIcon
            sx={{
              color: "white",
              position: "absolute",
              height: "18px",
              width: "18px",
              cursor: "pointer",
            }} />
          {/* <svg className='modal-header__icon-close' aria-label="icon close" width="18" height="18">
          <use href={spriteIcon + '#icon-x-close'}></use>
        </svg> */}
        </button>
      </div>
    </div>
  );
};