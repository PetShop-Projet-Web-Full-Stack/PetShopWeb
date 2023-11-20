import React from "react";

const HomeDescriptionComponent = () => {
  return (
    <div className="flex items-stretch bg-gray-900 text-white">
      <div className="w-3/4 p-4 flex-3">
        <h2 className="text-2xl m-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quae
          nobis est harum delectus saepe et voluptates ipsum repudiandae
          eveniet, culpa molestiae iusto nisi, facilis dignissimos fuga libero
          sint architecto. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. At quae nobis est harum delectus saepe et voluptates ipsum
          repudiandae eveniet, culpa molestiae iusto nisi, facilis dignissimos
          fuga libero sint architecto. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. At quae nobis est harum delectus saepe et voluptates
          ipsum repudiandae eveniet, culpa molestiae iusto nisi, facilis
          dignissimos fuga libero sint architecto.
        </h2>
      </div>
      <div className="w-1/4 p-4 flex-1">
        <img
          className="h-full rounded-full"
          src="https://placekitten.com/200/200"
          alt="Description"
        />
      </div>
    </div>
  );
};

export default HomeDescriptionComponent;
