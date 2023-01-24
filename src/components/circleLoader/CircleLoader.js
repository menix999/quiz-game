import ClipLoader from 'react-spinners/ClipLoader';

const CircleLoader = ({ loading, size = 16, color }) => {
  return (
    <ClipLoader loading={loading} size={size} color={color || '#2f2f2f'} />
  );
};

export default CircleLoader;
