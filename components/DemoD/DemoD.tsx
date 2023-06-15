import { useState } from "react";
import Card from "@/components/Card";
import TestTube from "./TestTube";

export default function DemoD() {
  const [value, setValue] = useState(24);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value, 10));
  };
  return (
    <Card title="Volume">
      <div className="relative " style={{ width: "324px", height: "324px" }}>
        <div
          className="absolute rounded-full"
          style={{
            width: "24px",
            height: "24px",
            left: "90px",
            top: `${12 + value * 3}px `,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="relative w-full h-full">
            <div
              className="absolute grid place-items-center rounded-md text-white font-semibold"
              style={{
                width: "60px",
                height: "24px",
                background: "#424E82",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {100 - value}ml
            </div>
            <div
              className="absolute rounded-md"
              style={{
                width: "20px",
                height: "3px",
                background: "#424E82",
                left: "35px",
                top: "50%",
                transform: "translate(0, -50%)",
              }}
            ></div>
          </div>
        </div>
        <div className="absolute" style={{ top: 0, left: "100px" }}>
          <TestTube value={value} />
        </div>
        <div className="absolute" style={{ top: "150px", left: "-50px" }}>
          <div className="relative" style={{ width: "324px" }}>
            <input
              className="rt90"
              type="range"
              id="rangeInput"
              name="rangeInput"
              min={0}
              max={100}
              step={1}
              value={value}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
