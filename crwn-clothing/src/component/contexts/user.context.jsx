import { createContext, useEffect, useReducer } from "react";
import {
  onAuthStateChangeListener,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
export const UserContext = createContext({
  currentUser: null,
  setcurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const INITIAL_STATE = { currentUser: null };

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state, //useReducer 的return 是回傳state內修改後的物件, 也就是const [state,dispatch]中的state物件被修改後的樣子
        currentUser: payload,
      };

    default:
      throw new Error(`Unhandle type ${type} in Reducer`);
  }
};

export const UserProvider = ({ children }) => {
  // const [currentUser, setcurrentUser] = useState(null);
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE); //利用dispatch 設定current user

  const setcurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };

  const value = { currentUser, setcurrentUser };

  useEffect(() => {
    /*
有些時候我們需要訂閱（subscription）一些外部資料，在這情況下「清理（cleanup）」就顯得很重要，如此才可以避免記憶體洩漏（memory leak）的問題。

在傳統 React class 的寫法中，我們會在 componentDidMount 時去註冊監聽某事件，在 componentWillUnmount 時去移除監聽事件的註冊。

在 useEffect 中，則可以回傳一個清理用的函式（可以是匿名函式），它會在 React 元件要 unmount 時被執行，此外，由於每次元件轉譯時，

執行的都是一個全新的 effect，因此在每此元件轉譯前也都會執行 cleanup 的函式。也就是說，cleanup 函式會在「每次元件轉譯前」，以及「元件 unmount」時被執行。
*/
    //利用觀查者模式，讓每次login stat 有改變時，能夠取得auth user 的狀態，並使用usercontext重
    //新設定user 的狀態，讓頁面fresh 後可以再次抓到auth 的使用者登入狀態
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setcurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>; //children 為<element>chileren</element>
};
