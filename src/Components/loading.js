import React from "react";
import MoonLoader from "react-spinners/MoonLoader";

const Loading = () => (
  <div className="animate-spin">
        <MoonLoader className="mt-48 mx-auto" color="#000000" size={130} speedMultiplier={0.5}/>
  </div>
);

export default Loading;