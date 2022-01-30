import { createContext, useCallback, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);

  const login = (returningUser, successCallback = (f) => f, failCallback = (f) => f) => {
    return (async () => {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: returningUser.email,
          password: returningUser.password,
        }),
      });
      if (res.ok) {
        const u = await res.json();
        setUser(u);
        setErrors([]);
        successCallback();
      } else {
        const data = await res.json();
        failCallback();
        setErrors([data.error]);
        console.log(data);
      }
    })();
  };
  const persist = useCallback((callback = (f) => f) => {
    return (async () => {
      const res = await fetch("/me");
      if (res.ok) {
        const userData = await res.json();
        setUser(userData);
        setErrors([]);
        callback();
      }
    })();
  }, []);
  const logout = (callback = (f) => f) => {
    fetch("/logout", { method: "DELETE" }).then(() => {
      setUser(null);
      callback();
    });
  };

  const value = { user, errors, login, persist, logout };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
