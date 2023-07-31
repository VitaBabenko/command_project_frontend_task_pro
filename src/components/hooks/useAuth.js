import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsServerSleeping,
  selectUser,
} from 'redux/authorization/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isServerSleeping = useSelector(selectIsServerSleeping);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    isServerSleeping,
    user,
  };
};
