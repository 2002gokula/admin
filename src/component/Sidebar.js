import { Box, Divider, IconButton, Tooltip } from "@mui/material"
import React from "react"
import HomeIcon from "@mui/icons-material/Home"
const Sidebar = () => {
  return (
    <Box
      className="smooth-trasition"
      component="div"
      sx={{
        height: "100vh",
        width: "51px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "50px",
        zIndex: "999",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      <Box />
      <Tooltip className="hoveronsidebar" placement="right" title="Dashboard">
        <svg
          width="19"
          height="16"
          viewBox="0 0 19 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.07778 0L0 8.50388L2.21478 9.61596L9.01868 2.78375L15.9408 9.61738L18.1556 8.50529L9.07778 0ZM2.69792 9.83923L9.08664 3.72769L15.4562 9.83923V15.8349H10.8035V11.5999H7.31216V15.8349H2.69792V9.83923Z"
            fill="black"
          />
        </svg>
      </Tooltip>
      <Tooltip
        className="hoveronsidebar"
        title="Applications"
        placement="right"
      >
        <svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 11.6152V2.99956L7.13254 0.533444L13.7651 2.99956V11.6152L7.13254 14.6978L0.5 11.6152Z"
            fill="white"
            stroke="black"
          />
          <line
            x1="6.93799"
            y1="6.396"
            x2="6.93799"
            y2="14.396"
            stroke="black"
          />
          <line
            x1="7.20559"
            y1="6.95329"
            x2="14.0327"
            y2="3.36945"
            stroke="black"
          />
          <line
            x1="0.243193"
            y1="3.37563"
            x2="6.68118"
            y2="6.95946"
            stroke="black"
          />
        </svg>
      </Tooltip>
      <Tooltip title="Reports" className="hoveronsidebar" placement="right">
        <svg
          width="14"
          height="17"
          viewBox="0 0 14 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 0.5H9.29684L13.5 6.05252V16.5H0.5V0.5Z"
            fill="white"
            stroke="black"
          />
        </svg>
      </Tooltip>
      <Tooltip
        title="Applications setting"
        className="hoveronsidebar"
        placement="right"
      >
        <svg
          width="16"
          height="13"
          viewBox="0 0 16 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3.09375"
            y="0.5"
            width="9.3746"
            height="6.75046"
            fill="white"
            stroke="black"
          />
          <rect
            x="1.79688"
            y="3.0835"
            width="11.9683"
            height="6.75046"
            fill="white"
            stroke="black"
          />
          <rect
            x="0.5"
            y="5.66699"
            width="14.5619"
            height="6.75046"
            fill="white"
            stroke="black"
          />
        </svg>
      </Tooltip>
      <Tooltip title="Help Center" className="hoveronsidebar" placement="right">
        <svg
          style={{
            borderTop: "1px solid #D8D0D0",
            padding: "20px 15px",
            borderBottom: "1px solid #D8D0D0",
          }}
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.97603 0C9.58644 1.72078 11.9448 2.53462 13.9685 2.34248C14.3221 9.77701 11.6819 14.1677 7.00306 16C2.48463 14.2848 -0.187969 10.0832 0.0103136 2.22939C2.38609 2.35873 4.71711 1.82481 6.97603 0ZM5.72505 7.86879C5.88359 8.00859 6.03312 8.15908 6.17268 8.31929C6.61011 7.58699 7.07667 6.91467 7.56907 6.2964C8.96185 4.54719 8.33065 4.88429 10.2624 4.88429L9.99412 5.19452C9.16915 6.14738 8.89095 6.64381 8.21469 7.65947C7.53843 8.67638 6.93397 9.72578 6.3959 10.8058L6.22886 11.1416L6.07504 10.7999C5.79144 10.1663 5.45136 9.58519 5.04638 9.06565C4.6411 8.5461 4.2872 8.20744 3.73772 7.81536C3.98948 6.95591 5.18788 7.39579 5.72505 7.86879ZM6.98053 1.23841C9.14541 2.66521 11.2235 3.46749 12.9017 3.30785C13.1949 9.47335 10.8831 13.2417 7.00336 14.7613C3.25583 13.3392 0.917304 9.72765 1.08164 3.21443C3.25613 3.33284 5.24887 2.6374 6.98053 1.23841Z"
            fill="black"
          />
        </svg>
      </Tooltip>
      <Tooltip
        title="Navigation faetures"
        className="hoveronsidebar"
        placement="right"
      >
        <svg
          width="13"
          height="11"
          viewBox="0 0 13 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="0.5" x2="12.9683" y2="0.5" stroke="black" />
          <line y1="5.06836" x2="12.9683" y2="5.06836" stroke="black" />
          <line y1="9.63623" x2="12.9683" y2="9.63623" stroke="black" />
        </svg>
      </Tooltip>
    </Box>
  )
}

export default Sidebar
