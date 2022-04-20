import React from "react";

type Props = {
  title: string;
};

const Tab: React.FC<Props> = ({ children }) => {
  return <div style={{ marginTop: "3em" }}>{children}</div>;
};

export default Tab;
