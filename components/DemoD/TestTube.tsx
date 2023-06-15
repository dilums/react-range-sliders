type TestTubeProps = {
  value: number;
};
export default function TestTube({ value }: TestTubeProps) {
  return (
    <svg
      width="119"
      height="324"
      viewBox="0 0 119 324"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 0C28.3431 0 27 1.34315 27 3V6C27 7.65685 28.3431 9 30 9H34V287C34 300.807 45.1929 312 59 312C72.8071 312 84 300.807 84 287V9H89C90.6569 9 92 7.65685 92 6V3C92 1.34315 90.6569 0 89 0H30Z"
        fill="#E8EBF9"
      />
      <g clipPath="url(#test_tube_clip)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30 0C28.3431 0 27 1.34315 27 3V6C27 7.65685 28.3431 9 30 9H34V287C34 300.807 45.1929 312 59 312C72.8071 312 84 300.807 84 287V9H89C90.6569 9 92 7.65685 92 6V3C92 1.34315 90.6569 0 89 0H30Z"
          fill="#424E82"
        />
      </g>
      <defs>
        <clipPath id="test_tube_clip">
          <rect width="119" height="324" fill="white" y={value * 3 + 12} />
        </clipPath>
      </defs>
    </svg>
  );
}
