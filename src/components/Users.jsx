import { useEffect, useState } from "react";

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
        console.log(res.users.slice(0, 1));
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
          <div
            key={user.id}
            className="p-2  rounded-md bg-gradient-to-br from-purple-700 to-red-500 border"
          >
            <p>{user.firstName + " " + user.lastName}</p>
            <img src={user.image} alt="image" />
            <div className="flex mt-5 justify-center items-center">
              <p>Age - </p>
              <p>{user.age}</p>
            </div>
            <div className="flex justify-center items-center">
              <p>Height - </p>
              <p>{user.height}</p>
            </div>
            <div className="flex justify-center items-center">
              <p>mac - </p>
              <p>{user.macAddress}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Users;
