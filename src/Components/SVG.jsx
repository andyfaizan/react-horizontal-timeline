import React from "react";

const getPath = (name, props) => {
  switch (name) {
    case "left":
      return (
        <g
          id="Produktkatalog"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Produktkatalog_desktop"
            transform="translate(-94.000000, -63.000000)"
            fill={props.fill}
          >
            <g id="Group-6" transform="translate(64.000000, 24.000000)">
              <g id="Group-5" transform="translate(0.000000, 33.000000)">
                <polygon
                  id="Fill-1"
                  transform="translate(36.042454, 14.711015) rotate(-180.000000) translate(-36.042454, -14.711015) "
                  points="33.0527231 23.0187077 41.3604154 14.7110154 33.0527231 6.40332308 30.7244923 8.73363077 36.7039538 14.7110154 30.7244923 20.6987846"
                />
              </g>
            </g>
          </g>
        </g>
      );
    case "right":
      return (
        <g
          id="Produktkatalog"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Produktkatalog_desktop_smallest"
            transform="translate(-964.000000, -62.000000)"
            fill={props.fill}
          >
            <g id="Group-7" transform="translate(13.000000, 24.000000)">
              <g id="Group-4" transform="translate(943.000000, 33.000000)">
                <polygon
                  id="Fill-1"
                  points="10.3282308 21.6153846 18.6359231 13.3076923 10.3282308 5 8 7.33030769 13.9794615 13.3076923 8 19.2954615"
                />
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
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  height = "100%",
  viewBox = "0 0 32 32"
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
    {getPath(name, { fill })}
  </svg>
);

export default SVG;
