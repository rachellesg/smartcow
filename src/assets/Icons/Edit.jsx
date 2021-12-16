export default function EditIcon({ background, fill }) {
  return (
    <div
      style={{
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        backgroundColor: background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.3002 1.70047C14.6454 1.04729 13.7582 0.680481 12.8333 0.680481C11.9083 0.680481 11.0212 1.04729 10.3663 1.70047L1.9179 10.1485C1.80968 10.2655 1.7354 10.4098 1.70305 10.5658L0.933823 15.1812C0.913675 15.302 0.922656 15.4258 0.96002 15.5424C0.997384 15.659 1.06205 15.7651 1.14864 15.8517C1.23523 15.9382 1.34125 16.0029 1.45787 16.0403C1.57449 16.0776 1.69834 16.0866 1.81913 16.0665L6.43452 15.2972C6.59054 15.2649 6.73479 15.1906 6.85175 15.0824L15.3002 6.63439C15.6245 6.31063 15.8818 5.92609 16.0574 5.50278C16.2329 5.07947 16.3233 4.6257 16.3233 4.16743C16.3233 3.70917 16.2329 3.2554 16.0574 2.83209C15.8818 2.40878 15.6245 2.02424 15.3002 1.70047ZM6.3079 13.4508L3.54952 10.6924L10.1405 4.10132L12.899 6.85978L6.3079 13.4508ZM2.97467 12.2931L4.70721 14.0256L2.62813 14.3718L2.97467 12.2931ZM14.2121 5.54693L13.9867 5.77232L11.2283 3.01362L11.4537 2.78824C11.8195 2.42246 12.3156 2.21696 12.8329 2.21696C13.3502 2.21696 13.8463 2.42246 14.2121 2.78824C14.5778 3.15402 14.7833 3.65013 14.7833 4.16743C14.7833 4.68473 14.5778 5.18084 14.2121 5.54662V5.54693Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}