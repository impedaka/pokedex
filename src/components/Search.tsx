import React from "react";
import { IconContext } from "react-icons";
import { CgOptions } from "react-icons/cg";
export default function Search() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1em",
        marginTop: "1em",
      }}
    >
      <form action="/" method="get">
        <input
          style={{
            backgroundColor: "#ebf3f5",
            color: "#aab0bf",
            padding: "1em",
            borderRadius: "1em",
            width: "30em",
            borderStyle: "none",
          }}
          type="text"
          id="header-search"
          placeholder="🔍 Name or number"
          name="s"
        />
      </form>
      <IconContext.Provider value={{ color: "#5d5e7d", size: "3.5em" }}>
        <CgOptions />
      </IconContext.Provider>
    </div>
  );
}
