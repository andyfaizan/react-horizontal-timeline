import React from "react";

const getPath = (name, props) => {
  switch (name) {
    case "left":
      return (
        <g id="Ebene_2" data-name="Ebene 2">
          <g id="Ebene_1-2" data-name="Ebene 1">
            <g id="Ebene_2-2" data-name="Ebene 2">
              <g id="Ebene_1-2-2" data-name="Ebene 1-2">
                <path
                  d="M29.68,42.51,11.22,24.06,29.68,5.62,24.06,0,0,24.06,24.06,48.13Z"
                  style={{ fill: props.fill }}
                />
              </g>
            </g>
          </g>
        </g>
      );
    case "right":
      return (
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <g id="Ebene_2" data-name="Ebene 2">
              <g id="Ebene_1-2" data-name="Ebene 1-2">
                <g id="Ebene_2-2" data-name="Ebene 2-2">
                  <g id="Ebene_1-2-2" data-name="Ebene 1-2-2">
                    <path
                      d="M5.62,48.13,29.68,24.06,5.62,0,0,5.62,18.46,24.06,0,42.51Z"
                      style={{ fill: props.fill }}
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      );
    default:
      return <path />;
  }
};

const SVG = ({
  name = "",
  style = { fill: "#000" },
  width = "100%",
  className = "",
  height = "100%",
  viewBox = "0 0 30 48"
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name, { fill: style.fill })}
  </svg>
);

export default SVG;
