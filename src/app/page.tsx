import { Birthday } from "@/components/birthday";
import { Hello } from "@/components/hello";

export default function Page() {
  return (
    <div className=" flex items-center justify-center flex-col">
      <p className=" mb-3 text-3xl font-semibold text-center p-4">
        Learn to build an online doodle room.
      </p>
      <Hello />
      <Birthday />
    </div>
  );
}
