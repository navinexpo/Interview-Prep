import { useEffect, useReducer, useMemo, useCallback } from "react";
import axios from "axios";

const USER_PER_PAGE = 5;

const initialData = {
  users: [],
  selectedUsers: [],
  loading: false,
  error: null,
  query: "",
  currentPage: 1,
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
        currentPage: 1,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    case "SET_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

const UseCallbackAndUseMemo = () => {
  const [state, dispatch] = useReducer(reducer, initialData);
  const { users, query, loading, error, currentPage } = state;

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
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  const startIndex = (currentPage - 1) * USER_PER_PAGE;

  const paginatedUsers = useMemo(() => {
    return users.slice(startIndex, startIndex + USER_PER_PAGE);
  }, [users, startIndex]);

  const totalPages = Math.ceil(users.length / USER_PER_PAGE);

  const handlePrev = useCallback(() => {
    dispatch({ type: "SET_PAGE", payload: currentPage - 1 });
  }, [currentPage]);

  const handleNext = useCallback(() => {
    dispatch({ type: "SET_PAGE", payload: currentPage + 1 });
  }, [currentPage]);

  return (
    <>
      <div>React Dashboard - Pagination Feature</div>
      <input
        type="text"
        placeholder="Search by Name.."
        value={query}
        onChange={(e) =>
          dispatch({ type: "SET_QUERY", payload: e.target.value })
        }
      />
      <div>
        {!loading && !error && paginatedUsers.length > 0 ? (
          <>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <button disabled={currentPage === 1} onClick={handlePrev}>
                Previous
              </button>
              <span>{currentPage} of {totalPages}</span>
              <button disabled={currentPage === totalPages} onClick={handleNext}>
                Next
              </button>
            </div>
          </>
        ) : !loading && !error ? (
          <div>No data found</div>
        ) : null}
      </div>
    </>
  );
};
export default UseCallbackAndUseMemo;
