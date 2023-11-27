import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userActions, userSelector } from '../../state/user';

function UserPage() {
  const dispatch = useDispatch();
  const userData = useSelector(userSelector.userData);
  const userStatus = useSelector(userSelector.userFetchStatus);

  useEffect(() => {
    dispatch(userActions.fetchUserStart({ id: 1 }));
  }, []);

  return (
    <div>
      User Data:
      {userStatus}
      <br />
      {JSON.stringify(userData)}
    </div>
  );
}

export default UserPage;
