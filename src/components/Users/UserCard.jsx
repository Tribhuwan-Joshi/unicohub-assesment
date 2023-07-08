/* eslint-disable react/prop-types */

function UserCard({ user }) {
  return (
    <div className="p-2  rounded-md bg-gradient-to-tr from-purple-700 to-red-500 border">
      <p className="font-mono text-xl">{user.firstName + " " + user.lastName}</p>
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
  );
}

export default UserCard;
