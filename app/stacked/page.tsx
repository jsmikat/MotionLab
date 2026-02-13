import IsometricStack from "@/components/Isometric";

function page() {
  return (
    <div className="size-screen mt-20 flex items-center justify-center">
      <IsometricStack indicators={true} />
    </div>
  );
}

export default page;
