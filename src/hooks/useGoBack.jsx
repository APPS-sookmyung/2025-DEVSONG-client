import {useNavigate} from 'react-router-dom';

const useGoBack = (fallback = -1) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(fallback);
  };

  return goBack;
};

export default useGoBack;
