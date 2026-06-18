import IsometricStack from "@/components/Isometric";
import ExpandableFeatures from "./ExpandableOptions";

function page() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-7xl size-full border-x flex items-center justify-center">
        <div className="w-full h-[70vh] flex flex-row justify-center items-center border-y">
          <IsometricStack indicators={true} />
          <ExpandableFeatures />
        </div>
      </div>
    </div>
  );
}

export default page;