import { useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import {
  defaultAvatarEditorValue,
  defaultInputTypeRangeProps,
  rotateValue,
} from './util';
import './style.css';

export const AvatarEditorContainer = ({
  image,
  handleSetCurrentImg,
  handleClose,
}) => {
  const editor = useRef(null);
  const [editorValues, setEditorValues] = useState(defaultAvatarEditorValue);
  const { scale, height, width, rotate, position, borderRadius } = editorValues;

  const handlePositionChange = position => {
    setEditorValues({ ...editorValues, position });
  };

  const handleScale = e => {
    const scale = e.target.value;
    setEditorValues({ ...editorValues, scale });
  };

  const handleRotate = rotate => {
    setEditorValues({ ...editorValues, rotate });
  };

  const handleSave = () => {
    const img = editor.current.getImage().toDataURL();
    handleSetCurrentImg(img);
    handleClose();
  };

  return (
    <>
      <AvatarEditor
        ref={editor}
        scale={scale}
        width={width}
        height={height}
        position={position}
        onPositionChange={handlePositionChange}
        rotate={rotate}
        borderRadius={borderRadius}
        image={image}
      />
      <input
        type="range"
        {...defaultInputTypeRangeProps}
        onChange={handleScale}
      />
      <button onClick={() => handleRotate(rotate + rotateValue)}>Left</button>
      <button onClick={() => handleRotate(rotate - rotateValue)}>Right</button>
      <button onClick={handleSave}>save</button>
      <button onClick={handleClose}>close</button>
    </>
  );
};
