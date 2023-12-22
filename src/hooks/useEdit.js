import { useNavigate } from 'react-router-dom';

// constants
import PAGE_PATH from '../service/routes/constants';

const useEdit = () => {
  const navigate = useNavigate();

  const toItemPage = (categoryId, itemId, localId) => {
    let searchStr = `?categoryId=${categoryId}&itemId=${itemId}`;

    if (localId) {
      searchStr += `&localId=${localId}`;
    }

    navigate({
      pathname: PAGE_PATH.ITEM_PAGE,
      search: searchStr,
    });
  };

  return {
    toItemPage,
  };
};

export default useEdit;
