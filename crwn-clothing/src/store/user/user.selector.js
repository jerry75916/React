//此為提供 Redux 中已存的user內容取出給currentUser使用，主要是用來讓很多個頁面reuse用
export const selectcurrentUser = (state) => state.user.currentUser;
