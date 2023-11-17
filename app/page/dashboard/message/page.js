import AllMessages from "@/components/globals/AllMessages";
import MessageBox from "@/components/globals/MessageBox";


export default function page() {
  return (
    <div className="lg:flex lg:space-x-3">
      <div className="lg:w-[40%] w-full">
        <AllMessages />
      </div>
      <div className="lg:w-[60%] w-full">
        <MessageBox />
      </div>
    </div>
  );
}
