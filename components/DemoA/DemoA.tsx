import { useState } from "react";
import Card from "@/components/Card";
import Graph from "./Graph";

export default function DemoA() {
  const [value, setValue] = useState(37);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value, 10));
  };
  return (
    <Card title="Volume">
      <div className="px-3">
        <div style={{ width: "300px" }}>
          <Graph value={value} />
        </div>
      </div>
      <div className="relative " style={{ width: "324px", height: "24px" }}>
        <div
          className="absolute rounded-full bg-[#e8ebf9]"
          style={{
            left: "12px",
            right: "12px",
            height: "8px",
            top: "50%",
            transform: "translate(0, -50%)",
          }}
        ></div>
        <div
          className="absolute rounded-full bg-[#424E82]"
          style={{
            left: "12px",
            width: `${value * 3}px`,
            height: "8px",
            top: "50%",
            transform: "translate(0, -50%)",
          }}
        ></div>
        <div
          className="absolute grid place-items-center top-0"
          style={{
            width: "24px",
            height: "24px",
            left: `${value * 3}px`,
          }}
        >
          <div className="bg-white shadow-md rounded-full grid place-items-center w-5 h-5">
            <div
              className="rounded-full bg-[#424e82]"
              style={{
                width: "14px",
                height: "14px",
              }}
            />
          </div>
        </div>
        <input
          type="range"
          id="demoAInput"
          name="demoAInput"
          min={0}
          max={100}
          step={1}
          value={value}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center justify-between px-3 font-semibold h-8">
        <div> 0 </div>
        <div> {value} </div>
        <div> 100 </div>
      </div>
    </Card>
  );
}
