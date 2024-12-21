import React, { PropsWithChildren } from "react";
import "./index.css";

const PortfolioWrap: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className='border-round-sm bg-white'>
        <div>{children}</div>
      </div>
    </>
  );
};

export default PortfolioWrap;
