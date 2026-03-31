import React from "react";

const Tab = ({carts,setActiveTab}) => {
  return (
    <div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center mt-20 bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="Products"
           onClick={() => setActiveTab('Products')}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab('Carts')}
        />
        
      </div>
    </div>
  );
};

export default Tab;
