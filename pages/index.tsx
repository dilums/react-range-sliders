import Head from "@/components/Head";
import DemoA from "@/components/DemoA";
import DemoB from "@/components/DemoB";
import DemoC from "@/components/DemoC";
import DemoD from "@/components/DemoD";
import DemoE from "@/components/DemoE";
import DemoF from "@/components/DemoF";

export default function Home() {
  return (
    <>
      <Head title="React Range Sliders" slug="/" />
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center">
        <DemoA />
        <DemoB />
        <DemoC />
      </div>
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center">
        <DemoD />
        <DemoE />
        <DemoF />
      </div>
    </>
  );
}
