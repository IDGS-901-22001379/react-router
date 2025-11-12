import { useEffect, useMemo, useState } from "react";
import { AuthContext } from "./auth-context";

export default function AuthContextProvider({ children }) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem("session");
    if (!raw) return;
    try {
      const s = JSON.parse(raw);
      if (s && typeof s === "object") setSession(s);
    } catch (err) {
      console.warn("Invalid session in localStorage:", err);
      localStorage.removeItem("session");
    }
  }, []);

  const login = (payload) => {
    localStorage.setItem("session", JSON.stringify(payload));
    setSession(payload);
  };

  const logout = () => {
    localStorage.removeItem("session");
    setSession(null);
  };

  const value = useMemo(
    () => ({
      isAuth: !!(
        session &&
        (session.token || session.accessToken || session.jwt)
      ),
      user: session?.user ?? null,
      role: session?.role ?? null,
      session,
      login,
      logout,
    }),
    [session]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
