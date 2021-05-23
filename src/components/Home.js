import React from "react";

const Home = ({ id, title }) => {
  return (
    <div>
      <p className="text-center bg-light ">
        {id}--{title}
      </p>
    </div>
  );
};

export default Home;
