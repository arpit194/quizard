import { useState, useCallback, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { gameActions } from "../store/game";

export const useFetch = () => {
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(async (difficulty, category, amount) => {
    dispatch(gameActions.setLoading(true));
    const httpAbortCtrl = new AbortController();
    activeHttpRequests.current.push(httpAbortCtrl);

    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`,
        {
          method: "GET",
          body: null,
          headers: {},
          signal: httpAbortCtrl.signal,
        }
      );

      const responseData = await response.json();

      activeHttpRequests.current = activeHttpRequests.current.filter(
        (req) => req !== httpAbortCtrl
      );

      if (!response.ok) {
        throw new Error(responseData.message);
      }
      dispatch(gameActions.setLoading(false));
      return responseData;
    } catch (err) {
      setError(err.message);
      dispatch(gameActions.setLoading(false));
      throw err;
    }
  }, []);

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return { error, sendRequest, clearError };
};
