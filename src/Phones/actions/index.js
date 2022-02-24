import { createAction } from '../../util/action.helpers';
import {
    ITEMS,
    ALLITEMS,
    EDITAITEM
} from './ACTION_TYPES';


export const items = createAction(ITEMS.ACTION, 'data');
export const itemsPending = createAction(ITEMS.PENDING);
export const itemsSuccess = createAction(ITEMS.SUCCESS, 'response');
export const itemsError = createAction(ITEMS.ERROR, 'error');

export const allItems = createAction(ALLITEMS.ACTION);
export const allItemsPending = createAction(ALLITEMS.PENDING);
export const allItemsSuccess = createAction(ALLITEMS.SUCCESS, 'response');
export const allItemsError = createAction(ALLITEMS.ERROR, 'error');

export const editItem = createAction(EDITAITEM.ACTION, 'data');
export const editItemPending = createAction(EDITAITEM.PENDING);
export const editItemuccess = createAction(EDITAITEM.SUCCESS, 'response');
export const editItemError = createAction(EDITAITEM.ERROR, 'error');
