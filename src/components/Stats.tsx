import React from "react";

interface StateProps {
  stats: {
    title: string;
    content: string | string[] | undefined;
  }[];
}
export const Stats: React.FC<StateProps> = ({ stats }) => {
  return (
    <ul>
      {stats.map((s, index) => {
        return (
          <li key={index}>
            <span key={index}>{s.title}</span>
            <span key={index}>{s.content}</span>
          </li>
        );
      })}
    </ul>
  );
};
