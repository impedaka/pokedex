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
          <>
            <div
              style={{
                display: "flex",
                marginBottom: "0.5em",

                justifyContent: "space-between",
              }}
              key={index}
            >
              <h4 key={index}>{s.title}</h4>
              <span key={index}>{s.content}</span>
              <span />
            </div>
          </>
        );
      })}
    </ul>
  );
};
