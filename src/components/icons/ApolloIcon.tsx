import React from "react";

interface ApolloIconStyle {
  WebkitTranslate: string;
  translate: string;
  rotate: string;
  scale: string;
  WebkitTransformOrigin: number;
  MsTransformOrigin: number;
  transformOrigin: number;
}

const style: ApolloIconStyle = {
  WebkitTranslate: "none",
  translate: "none",
  rotate: "none",
  scale: "none",
  WebkitTransformOrigin: 0,
  MsTransformOrigin: 0,
  transformOrigin: 0,
};

const ApolloIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="animated-logo_logo__noJiC animated-logo_theme-regolith__IZQIQ"
      viewBox="0 0 78 78"
      width={48}
      height={48}
    >
      <path
        fill="currentColor"
        stroke="black"
        d="M39 77.5c21.263 0 38.5-17.237 38.5-38.5S60.263.5 39 .5.5 17.737.5 39 17.737 77.5 39 77.5z"
      ></path>
      <path
        fill="black"
        d="M50.677 46.428l-1.232-3.501-1.622-4.61-1.174-3.336-1.536-4.366-1.785-5.071h-8.656L33.29 29.47l-1.232 3.501-6.118 17.387h5.709l1.79-5.075h8.659l-1.536-4.366H34.97l1.174-3.336 2.45-6.966.406-1.153.405 1.153 6.945 19.74.001.003h5.71l-1.384-3.93z"
      ></path>
      <path
        stroke="black"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2.202"
        d="M61.574 26.297A25.777 25.777 0 0164.9 39c0 14.303-11.595 25.899-25.899 25.899-14.303 0-25.899-11.596-25.899-25.899s11.596-25.899 25.9-25.899a25.776 25.776 0 0113.202 3.614"
      ></path>
      <path
        fill="black"
        d="M53.75 21.1a3.35 3.35 0 100-6.7 3.35 3.35 0 000 6.7z"
        data-svg-origin="50.399898529052734 14.399999618530273"
        style={style}
      ></path>
      <g transform="rotate(0 39 39)">
        <path
          d="M53.7499 21.1C55.6001 21.1 57.0999 19.6002 57.0999 17.75C57.0999 15.8999 55.6001 14.4 53.7499 14.4C51.8997 14.4 50.3999 15.8999 50.3999 17.75C50.3999 19.6002 51.8997 21.1 53.7499 21.1Z"
          fill="black"
          style={{ opacity: 1, visibility: "inherit" }}
        ></path>
      </g>
    </svg>
  );
};

export default ApolloIcon;
