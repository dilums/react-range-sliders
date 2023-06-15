import { useState } from "react";
import Card from "@/components/Card";
import Graph from "./Graph";

export default function DemoB() {
  const [valueA, setValueA] = useState(25);
  const [valueB, setValueB] = useState(75);

  const handleChangeA = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueA(parseInt(event.target.value, 10));
  };
  const handleChangeB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueB(parseInt(event.target.value, 10));
  };

  const start = Math.min(valueA, valueB) * 3;
  const diff = Math.abs(valueA - valueB) * 3;
  return (
    <Card title="Range">
      <div className="px-3">
        <div style={{ width: "300px" }}>
          <Graph start={start} diff={diff} />
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
            left: `${12 + start}px`,
            width: `${diff}px`,
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
            left: `${valueA * 3}px`,
          }}
        >
          <div
            className="bg-white shadow-md rounded-full grid place-items-center"
            style={{
              width: "20px",
              height: "20px",
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: "14px",
                height: "14px",
                background: "#424e82",
              }}
            ></div>
          </div>
        </div>
        <div
          className="absolute grid place-items-center"
          style={{
            width: "24px",
            height: "24px",
            top: 0,
            left: `${valueB * 3}px`,
          }}
        >
          <div
            className="bg-white shadow-md rounded-full grid place-items-center"
            style={{
              width: "20px",
              height: "20px",
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: "14px",
                height: "14px",
                background: "#424e82",
              }}
            ></div>
          </div>
        </div>
        <input
          type="range"
          id="demoBInputA"
          name="demoBInputA"
          min={0}
          max={100}
          step={1}
          value={valueA}
          onChange={handleChangeA}
        />
        <input
          type="range"
          id="demoBInputB"
          name="demoBInputB"
          min="0"
          max="100"
          step="1"
          value={valueB}
          onChange={handleChangeB}
        />
      </div>
      <div className="flex items-center justify-between px-3 font-semibold h-8">
        <div> 0 </div>
        <div>
          {Math.min(valueA, valueB)} - {Math.max(valueA, valueB)}
        </div>
        <div> 100 </div>
      </div>
    </Card>
  );
}
