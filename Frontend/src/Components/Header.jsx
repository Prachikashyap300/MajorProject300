
import "./Design.css"
import {ReactTyped} from "react-typed";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { LoginContext } from "../Context/LoginContext";
import { enqueueSnackbar } from "notistack";
import "../Components/FormDesign.css"
import {Link} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  // const LoginState = useContext(LoginContext);
  const handleclick = async () => {
    if (LoginState.login === false) {
      enqueueSnackbar('Please Login to upload project', { variant: "error" });
      return;
    }
    navigate("/UploadProjects")
  }
  return (
    
    <>
    {/*Start Background Animation Body*/}
    {/* <div className="area">
      <ul className="circles">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </div> */}
    {/*End Background Animation Body*/}
    
      <header className="container-md h-screen  ok">
        <div className="container mx-auto py-4 flex justify-center ">
          <div className=" flex justify-center t1">
            <div className="bg-transparent b2  mr-10">
              <div className="b3 mr-[20%]">
                <h1 className="text-5xl  fs text-pink-500">  EXHIBIX   </h1>
                <h5 className="mt-10"><ReactTyped className="text-2xl  " strings={["Innovate. Create. Showcase"]} typeSpeed={100} loop /></h5>
                <button onClick={handleclick} className=" mt-12 text-white text-lg cursur-pointer bg-blue-500 p-1 rounded-md px-4 py-3 hover:bg-blue-700"><Link to="/AddProject">Upload Project</Link></button>
              </div>

            </div>
            <div className=" flex justify-center bg-transparent image ml-5">

            </div>

          </div>


        </div>
      </header>
      
      
    </>
  )
}

export default Header