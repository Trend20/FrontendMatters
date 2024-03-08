import React from "react";

const Heading = ({ headingText, className }: any) => {
  return <h3 className={`${className} flex font-bold`}>{headingText}</h3>;
};

export default Heading;
