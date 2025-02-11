// defince class name interface component
interface WaveBackgroundProps {
  className?: string;
}

const WaveBackground: React.FC<WaveBackgroundProps> = ({ className = "" }) => {
  return (
    <svg
      width="1440"
      height="1057"
      viewBox="0 0 1440 1057"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      <g filter="url(#filter0_d_1773_42642)">
        <path
          d="M1470 75.1547C884.266 22.1844 555.733 22.2437 -30 75.1547V981.225C563.622 1034 891.939 1035.71 1470 981.225V75.1547Z"
          fill="#F4F6F9"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1773_42642"
          x="-65"
          y="0.449219"
          width="1570"
          height="1056"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="17.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.136892 0 0 0 0 0.207932 0 0 0 0 0.345833 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1773_42642"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1773_42642"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default WaveBackground;
