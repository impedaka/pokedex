import React, { useState, useEffect, FC } from "react";
const Tab: FC = ({ children, active = 0 }) => {
  const [activeTab, setActiveTab] = useState(active);
  const [tabsData, setTabsData] = useState([]);

  useEffect(() => {
    let data: any = [];

    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;
      const {
        props: { tab, children },
      } = element;
      data.push({ tab, children });
    });
    setTabsData(data);
  }, [children]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {tabsData.map(({ tab }, idx) => (
          <div>
            <a onClick={() => setActiveTab(idx)}>{tab}</a>
          </div>
        ))}
      </div>
      <div>{tabsData[activeTab] && tabsData[activeTab].children}</div>
    </div>
  );
};
const TabPane = ({ children }) => {
  return { children };
};
Tab.TabPane = TabPane;

export default Tab;
