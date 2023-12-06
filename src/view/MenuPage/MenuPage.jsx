import {
  useState, useLayoutEffect, useMemo, useEffect,
} from 'react';
import { useSelector, shallowEqual } from 'react-redux';

// components
import Grid from '@mui/material/Grid';
import MerchantImage from './MerchantImage';
import MerchantInfo from './MerchantInfo';
import MenuList from './MenuList/MenuList';
import MenuSearch from './MenuSearch';

// state
import { merchantSelector } from '../../state/merchant';

// custom hooks
import useBackBtn from '../../hooks/useBackBtn';
import useBottombar from '../../hooks/useBottombar';
import useIntersection from './useIntersection';
import useScrollToView from '../../hooks/useScrollToView';
import useDebounce from '../../hooks/useDebounce';

function MenuPage() {
  const { hideBackBtn } = useBackBtn();
  const { toCartBar } = useBottombar();
  const [
    addTargetRef,
    intersectingIndex,
    targetRefs,
    resetRef,
  ] = useIntersection({ threshold: 0.5 });
  const { scrollToItem } = useScrollToView(targetRefs.current);

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const merchantData = useSelector(merchantSelector.merchantData, shallowEqual);

  const debouncedSeachTerm = useDebounce(search, 200);
  const filteredFoodList = useMemo(
    () => merchantData
      ?.menu_list
      ?.reduce((acc, item) => {
        const filteredMenuItems = item.menu_items
          .filter((food) => food.name.toLowerCase().includes(search.toLowerCase()));

        if (filteredMenuItems.length > 0) {
          acc.push({
            ...item,
            menu_items: filteredMenuItems,
          });
        }

        return acc;
      }, []),
    [debouncedSeachTerm, merchantData.menu_list],
  );

  const categoryListSelect = useMemo(
    () => merchantData
      ?.menu_list
      ?.map((item) => ({ value: item.id, label: item.category_name })),
    [search, merchantData.menu_list],
  );

  const onChangeCategory = (value) => {
    const targetIndex = categoryListSelect.findIndex((item) => item.value === value);
    setCategory(categoryListSelect.at(targetIndex).value);
    scrollToItem(targetIndex);
  };

  const onChangeSearch = (value) => {
    resetRef();
    setSearch(value);
  };

  useEffect(() => {
    if (categoryListSelect?.length) {
      setCategory(categoryListSelect.at(0).value);
    }
  }, [categoryListSelect]);

  useEffect(() => {
    if (categoryListSelect?.length && intersectingIndex !== null) {
      setCategory(categoryListSelect.at(intersectingIndex).value);
    }
  }, [categoryListSelect, intersectingIndex]);

  useLayoutEffect(() => {
    hideBackBtn();
    toCartBar({});
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <MerchantImage
          imgSrc={merchantData.store_image}
        />
      </Grid>
      <Grid item xs={12}>
        <MerchantInfo
          name={merchantData.name}
          address={merchantData.address}
          hours={merchantData.hours}
        />
      </Grid>
      <Grid item xs={12} position="sticky" top={60} zIndex={2} sx={{ backgroundColor: '#f5f5f5' }}>
        <MenuSearch
          selectValue={category}
          onChangeSelect={onChangeCategory}
          selectItems={categoryListSelect}
          searchValue={search}
          onChangeSearch={onChangeSearch}
        />
      </Grid>
      <Grid item xs={12}>
        <MenuList menuItems={filteredFoodList} addRef={addTargetRef} />
      </Grid>
    </Grid>
  );
}

export default MenuPage;
