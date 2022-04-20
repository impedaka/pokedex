import React, { useCallback } from "react";

type Props = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
};

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index }) => {
  const onClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <div>
      <h3 onClick={onClick}>
        <a href="#">{title}</a>
      </h3>
    </div>
  );
};

export default TabTitle;
