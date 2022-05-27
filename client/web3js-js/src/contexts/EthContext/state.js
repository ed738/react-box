const actions = {
  setWeb3: "SET_WEB3",
  setAccounts: "SET_ACCOUNTS"
};

const initialState = {
  web3: null,
  accounts: null
};

const reducer = (state, { type, data }) => {
  switch (type) {
    case actions.setWeb3:
      return { ...state, web3: data };
    case actions.setAccounts:
      return { ...state, accounts: data };
    default:
      throw new Error("Undefined reducer action type");
  }
};

export {
  actions,
  initialState,
  reducer
};
