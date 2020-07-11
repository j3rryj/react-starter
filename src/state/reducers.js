const accountReducer = state => state;

const mainReducer = (state, action) => {
  const { account } = state;
  console.log({ state, action });
  return {
    account: accountReducer(account, action)
  };
};

export default mainReducer;
