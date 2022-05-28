import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import type { User } from "../types/api/user";

export const useAuth = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const login = (id: string) => {
    setLoading(true);
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users?id=${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          history.push("/home");
        } else {
          alert("ユーザが見つかりません");
        }
      })
      .catch(() => alert("ログインできません"))
      .finally(() => setLoading(false));
  };
  /*
  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            console.log(res.data);
            history.push("/home");
          } else {
            alert("ユーザが見つかりません");
          }
        })
        .catch(() => alert("ログインできません"))
        .finally(() => setLoading(false));
    },
    [history]
  );
  */

  return { login, loading };
};
