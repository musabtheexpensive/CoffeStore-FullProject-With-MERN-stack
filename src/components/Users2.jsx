import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const Users2 = () => {
  // using tanStack Query
  const { isPending,isError,error, data: users } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://coffee-store-server-fullproject-module56-huhgsnlbs.vercel.app/user");
      return res.json();
    },
  });

  //   const [users, setUsers] = useState([]);
  //   useEffect(() => {
  //     fetch("https://coffee-store-server-fullproject-module56-huhgsnlbs.vercel.app/user")
  //       .then((res) => res.json())
  //       .then((data) => setUsers(data));
  //   }, []);

  const handleDelete = (id) => {
    // make sure user is confirmed to delete
    fetch(`https://coffee-store-server-fullproject-module56-huhgsnlbs.vercel.app/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          console.log("Deleted successfully");
          //remove the user from the ui
          //   const remainingUsers = users.filter((user) => user._id !== id);
          //   setUsers(remainingUsers);
        }
      });
  };

  if (isPending) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  if(isError){
    return <p>{error.message}</p>
  }

  return (
    <div>
      {/* <h2>Users : {loadedUsers.length}</h2> */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last Logged In</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastLoggedAt}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users2;
