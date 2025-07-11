import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/slice/userSlice";
import  { useMemo} from 'react';

function ReduxUsers() {
  const dispatch = useDispatch();
  const { users, error, loading } = useSelector(
    (state) => state.users || { users: [], loading: false, error: "" }
  );

  console.log("Users", users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
          </tr>
        </thead>
        <tbody>
          {!loading &&
            !error &&
            users.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default ReduxUsers;
