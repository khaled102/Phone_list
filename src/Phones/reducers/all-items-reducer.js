import { ALLITEMS } from '../actions/ACTION_TYPES';

const AllItemsInitialState = {
  data: null,
  errors: null,
  loading: false,
};

export const allItemsReducer = (
  state = AllItemsInitialState,
  action = {},
) => {
  switch (action.type) {
    case ALLITEMS.PENDING: {
      return {
        ...state,
        loading: true
      };
    }
    case ALLITEMS.SUCCESS: {
        const {response} = action.payload;
        return {
          ...state,
          loading: false,
          data: response,
        }
    }
    case ALLITEMS.ERROR: {
      const {error} = action.payload;
      return {
        ...state,
        loading: false,
        errors: error,
      };
    }
    default:
      return state;
  }
};