import data from "./data";

type GraphProps = {
  value: number;
};
export default function Graph({ value }: GraphProps) {
  return (
    <svg
      width="300"
      height="100"
      viewBox="0 0 300 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="background">
        {data.map(({ key, path }) => (
          <path d={path} fill="#E8EBF9" key={key} />
        ))}
      </g>
      <g id="foreground" clipPath="url(#highlight)">
        {data.map(({ key, path }) => (
          <path d={path} fill="#424E82" key={key} />
        ))}
      </g>
      <defs>
        <clipPath id="highlight">
          <rect width={value * 3} height="100" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
