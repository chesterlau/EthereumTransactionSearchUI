export const TransactionSearchHistoryActionTypes = {
  ADD_HISTORY: "ADD_HISTORY"
}

export const addHistory = (value) => {
  return {
    type: TransactionSearchHistoryActionTypes.ADD_HISTORY,
    value: value
  }
}

