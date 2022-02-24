import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import {Progress} from '../../components';
import {Header} from '../components';
import {PhoneDetailComponent} from './PhoneDetailComponent';
import {allItems} from '../actions';

export const PhoneListContainer = props => {
  const dispatch = useDispatch();
  const items_data = useSelector(({ items }) => items.allItemsReducer);
  useEffect(() => {
    dispatch(allItems());
  }, []);
  return (
    <div  className="container">
      <Header title={'Phones'} />
      {items_data.loading &&
        <Progress />}
        <PhoneDetailComponent 
          data={items_data?.data?.phones}
        />
    </div>
  );
}
