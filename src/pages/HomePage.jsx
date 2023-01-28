import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from 'redux/usersSelector';
import { deleteUsers } from 'redux/usersSlice';

export const HomePage = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Home</h1>

      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>name </th>
              <th>age </th>
              <th>option </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                  <button onClick={() => dispatch(deleteUsers(user.id))}>
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users</p>
      )}
    </>
  );
};
