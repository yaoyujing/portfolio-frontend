import Navbar from "../components/navbar";
import Introduction from "../components/introduction";
export default function Homepage() {
  return (
    <div className="bg-gradient-to-r from-blue-200 h-screen">
      <Navbar></Navbar>
      <Introduction></Introduction>
    </div>
  );
}
