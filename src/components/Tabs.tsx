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
      <ul>
        {tabsData.map(({ tab }, idx) => (
          <li>
            <a onClick={() => setActiveTab(idx)}>{tab}</a>
          </li>
        ))}
      </ul>
      <div>{tabsData[activeTab] && tabsData[activeTab].children}</div>
    </div>
  );
};
const TabPane = ({ children }) => {
  return { children };
};
Tab.TabPane = TabPane;

export default Tab;
