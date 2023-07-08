import { useEffect, useState } from "react";
import UserCard from "./UserCard";

function Users() {
  // useState to save users

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetch("https://dummyjson.com/users", {
          mode: "cors",
        });
        const res = await data.json();
        setUsers(res.users.slice(0, 20));
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []); // run on first mounts

  return (
    <div className="text-white mx-auto w-[80%]  pt-[120px] text-center flex flex-col gap-10">
      <h1 className="font-light underline underline-offset-4 decoration-1 text-4xl">
        Our Users Data
      </h1>
      <div className="min-w-[300px]  h-max lg:grid-cols-[repeat(4,minmax(200px,1fr))] flex-shrink-0 p-4  grid  grid-cols-[repeat(auto-fit,minmax(150px,1fr))]   gap-8">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
export default Users;
