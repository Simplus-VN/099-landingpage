import React from "react";

const HeaderComponent: React.FC = () => {
  return (
    <header className="h-[88px] flex items-center bg-[rgba(255, 255, 255, 1)] max-lg:h-[72px]">
      <div className="container mx-auto ">
        <img
          className="h-[48px] max-lg:h-[40px]"
          src={"/main-logo.png"}
          alt="main-logo"
        />
      </div>
    </header>
  );
};

export default HeaderComponent;
