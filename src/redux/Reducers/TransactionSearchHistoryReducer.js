import { TransactionSearchHistoryActionTypes } from '../Actions/TransactionSearchHistory';
import { UpdateObject } from '../Utilities/Utility';

const initialState = {
  transactionSearchHistories: []
}

const TransactionSearchHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case TransactionSearchHistoryActionTypes.ADD_HISTORY: return UpdateObject(state, { transactionSearchHistories: [...state.transactionSearchHistories, action.value] })
    default: {
      return state;
    }
  }
}

export default TransactionSearchHistoryReducer;