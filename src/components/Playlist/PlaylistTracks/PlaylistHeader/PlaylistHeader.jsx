const PlaylistHeader = () => {
  return (
    <div className="flex justify-between mx-auto max-md:mx-1 max-w-2xl bg-purple-200 border rounded-md mt-4">
      <div className="flex items-center ml-2">
        <span className="text-lg mr-2 w-5 text-center">#</span>
        <span className="text-gray-800">Title</span>
      </div>
      <img className="w-6 mr-10 max-[425px]:hidden" src="https://res.cloudinary.com/dk2oxzxoo/image/upload/v1706330723/kodigo-React-SPA/clock_hgqdpq.png" alt="" /> </div>
  );
};

export default PlaylistHeader;