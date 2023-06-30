import { RotatingLines } from 'react-loader-spinner';
import { LoaderLines } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderLines>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoaderLines>
  );
};
