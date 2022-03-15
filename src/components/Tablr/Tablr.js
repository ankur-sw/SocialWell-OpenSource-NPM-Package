import { useEffect } from "react";
import "./tablr.css";
import PropTypes from "prop-types";

export const Tablr = ({
  rows,
  headers,
  // borderWidth = 'medium',
  cellPadding = "medium",
  cellTextColor = "black",
  headerTextColor = "black",
  // cellBorderColor = '#747381',
  // headerBorderColor = '#494866',
  // backgroundColor = '#a6a5b8',
  headerBackgroundColor = "#ffffff",
}) => {
  // useEffect(() => {
  //   if (headers.length < 1) {
  //     throw Error("Must have at least one header");
  //   } else if (!rows.every((r) => r.length === headers.length)) {
  //     throw Error("Row length must equal header length");
  //   }
  // }, [rows, headers]);

  const cellPaddingMap = {
    small: "3px",
    medium: "8px",
    large: "15px",
  };
  // const borderWidthMap = {
  //   thin: "1px",
  //   medium: "2px",
  //   thick: "3px",
  // };

  return (
    <div className="main">
      {headers.map((h, columnIndex) => (
        <div key={columnIndex} className="column">
          <div className="outerHeader">
            <div
              className="header"
              style={{
                color: headerTextColor,
                padding: cellPaddingMap[cellPadding],
                backgroundColor: "#edf2f7",
                // border: `${borderWidthMap[borderWidth]} solid ${headerBorderColor}`,
              }}
            >
              {h}
            </div>
          </div>

          <div className="rows">
            {rows.map((r, rowIndex) => (
              <div className="outerCell">
                <div
                  key={rowIndex}
                  className="cell"
                  style={{
                    color: cellTextColor,
                    // backgroundColor: backgroundColor,
                    padding: cellPaddingMap[cellPadding],
                    // border: `${borderWidthMap[borderWidth]} solid ${cellBorderColor}`,
                  }}
                >
                  {r[columnIndex]}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

Tablr.propTypes = {
  cellTextColor: PropTypes.string,
  headerTextColor: PropTypes.string,
  // cellBorderColor: PropTypes.string,
  // backgroundColor: PropTypes.string,
  // headerBorderColor: PropTypes.string,
  // headerBackgroundColor: PropTypes.string,
  // borderWidth: PropTypes.oneOf(["thin", "medium", "thick"]),
  cellPadding: PropTypes.oneOf(["small", "medium", "large"]),
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};
