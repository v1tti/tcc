import createGlobalState from "react-create-global-state";

const USER_KEY = 'user';

const initialRecords = JSON.parse(localStorage.getItem(USER_KEY)) || {
  records: [],
};

const [_useGlobalUser, Provider] = createGlobalState(initialRecords);

export function useGlobalUser() {
  const [user, _setUser] = _useGlobalUser();

  function setUser(user) {
    const newState = { user };
    _setUser(newState);
    localStorage.setItem(USER_KEY, JSON.stringify(newState));
  }

  return [user, setUser];
}

export const GlobalUserProvider = Provider;