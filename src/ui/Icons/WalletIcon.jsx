import React from "react";
import { SvgIcon } from "@mui/material";

const WalletIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.9681 0.59056C17.1895 0.235826 18.4625 0.954748 18.8115 2.19632C18.8702 2.4052 18.9 2.62138 18.9 2.83862V4.79588H21.2C22.4703 4.79588 23.5 5.84265 23.5 7.1339V21.162C23.5 22.4533 22.4703 23.5 21.2 23.5H2.8C1.52974 23.5 0.5 22.4533 0.5 21.162H0.530713C0.510296 21.0363 0.5 20.9089 0.5 20.7812V6.84665C0.5 5.80277 1.18075 4.88537 2.16814 4.59859L15.9681 0.59056ZM9.86099 21.162H21.2V11.8099H18.9V9.47192H21.2V7.1339H18.9V16.7732C18.9 17.817 18.2193 18.7345 17.2319 19.0212L9.86099 21.162ZM2.79999 6.84662V20.7812L16.6 16.7731V2.83859L2.79999 6.84662ZM14.3 9.47192C14.3 10.1175 13.7851 10.6409 13.15 10.6409C12.5149 10.6409 12 10.1175 12 9.47192C12 8.82629 12.5149 8.30291 13.15 8.30291C13.7851 8.30291 14.3 8.82629 14.3 9.47192Z"
          fill="white"
        />
      </svg>
    </SvgIcon>
  );
};

export default WalletIcon;