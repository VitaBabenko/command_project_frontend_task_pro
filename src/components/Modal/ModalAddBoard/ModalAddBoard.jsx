import { useForm } from 'react-hook-form';
import { icons } from 'utils.js/icons';
import sprite from '../../../images/sprite.svg';
import { images } from 'utils.js/bgImgPreview';
import { useDispatch } from 'react-redux';
import { addUserBoard } from 'redux/dashboards/operation';

const { CustomDialog } = require('./ModalAddBoard.styled');

export const ModalAddBoard = ({ isOpen, onClose, type = 'create' }) => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(addUserBoard(data));
    reset();
  };

  return (
    <CustomDialog open={isOpen} onClose={onClose}>
      <div>
        <p>{type === 'create' ? 'New board' : 'Edit board'}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input type="text" {...register('title')} />
          </div>
          <div>
            <p>Icons</p>
            {icons.map((icon, index) => {
              return (
                <label key={index}>
                  <input
                    type="radio"
                    value={icon}
                    {...register('dashboardIcon')}
                    style={{ display: 'none' }}
                  />
                  <svg width={18} height={18} stroke="white">
                    <use href={sprite + icon} width={18} height={18} />
                  </svg>
                </label>
              );
            })}
          </div>
          <div>
            {images.map((img, index) => {
              return (
                <label key={index}>
                  <input
                    type="radio"
                    value={img.id}
                    {...register('background')}
                    style={{ display: 'none' }}
                  />
                  <img
                    srcSet={`${img.backgroundImage} 1x, ${img.retinaBackgroundImage} 2x`}
                    alt=""
                  />
                </label>
              );
            })}
          </div>
          <button type="submit"> ADD</button>
        </form>
      </div>
    </CustomDialog>
  );
};
