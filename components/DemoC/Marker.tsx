type MarkerProps = {
  value: number;
};

export default function Marker({ value }: MarkerProps) {
  return (
    <div
      className="absolute grid place-items-center"
      style={{
        width: "24px",
        height: "24px",
        top: "-40px",
        left: `${value * 3}px`,
      }}
    >
      <div className="relative w-full h-full text-sm">
        <div
          className="absolute grid place-items-center text-white font-semibold rounded-md"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            background: "#424e82",
            width: "50px",
            height: "30px",
          }}
        >
          ${value * 10}
        </div>

        <div
          className="absolute"
          style={{
            left: "50%",
            top: "150%",
            transform: "translate(-50%, -50%)",
            width: "15px",
            height: "30px",
          }}
        >
          <svg
            className="w-full"
            viewBox="0 0 22 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.874 26.6557C12.3017 28.5519 9.61685 28.5519 9.04458 26.6557L0.999992 0H20.9186L12.874 26.6557Z"
              fill="#424e82"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
