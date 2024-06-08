import Sidebar from "../../components/Sidebar/SideBar.jsx";
import MessageContainer from "../../components/messages/MessageContainer.jsx";
const Home = () => {
  return (
  <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden  bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100">
    <Sidebar/>
    <MessageContainer/>
    </div>
  )  
}
export default Home;

//bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0
//bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0
