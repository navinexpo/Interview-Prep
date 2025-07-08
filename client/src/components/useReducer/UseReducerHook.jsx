import { useEffect, useReducer } from "react";
import axios from "axios";

import './UseReducerHook.css'

const initialData = {
  users: [],
  selectedUsers: [],
  loading: false,
  errors: null,
  query: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        errors: action.payload,
      };
    case "SET_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialData);
  const { users, errors, loading, query } = state;

  useEffect(() => {
    const timer = setTimeout(() => {
      const fetchData = async () => {
        dispatch({ type: "FETCH_INIT" });
        try {
          const res = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
          );
          const filtered = res.data.filter((user) =>
            user.name.toLowerCase().includes(query.toLowerCase())
          );
          dispatch({ type: "FETCH_SUCCESS", payload: filtered });
        } catch (error) {
          dispatch({ type: "FETCH_FAILURE", payload: error.message });
        }
      };
      fetchData();
    }, 600);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <>
      <div>User Reducer Hook Usage</div>
      <div className='container'>
        {loading && <div>loading...</div>}
        {errors && <div>Error: {errors}</div>}
        {!loading && !errors && users.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : !loading && !errors ? (
          <div>No data found</div>
        ) : null}
      </div>
    </>
  );
};
export default UseReducerHook;
