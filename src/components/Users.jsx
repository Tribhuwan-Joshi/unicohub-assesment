function Users() {
  return (
    <div className="text-white mx-auto w-[80%]  pt-[120px] text-center flex flex-col gap-10">
      <h1 className="font-light underline underline-offset-4 decoration-1 text-4xl">
        Our Amazing Users
      </h1>
      <div className="min-w-[300px]  h-max lg:grid-cols-[repeat(4,minmax(200px,1fr))] flex-shrink-0 p-4  grid  grid-cols-[repeat(auto-fit,minmax(150px,1fr))] grid-rows-[repeat(2,minmax(200px,1fr))]  gap-6">
        <div className="bg-red-300"></div>
        <div className="bg-red-300"></div>
        <div className="bg-red-300"></div>
        <div className="bg-red-300"></div>
        <div className="bg-red-300"></div>
        <div className="bg-red-300"></div>
      </div>
    </div>
  );
}
export default Users;
