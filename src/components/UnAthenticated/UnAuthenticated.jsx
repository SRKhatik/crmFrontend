import { Link } from "react-router-dom";
import '../../stylesCss/linkbuttons.css'
function UnAuthenticated() {
  return (
    <div className="vh-100 d-flex align-items-center flex-column justify-content-center" >     
    <div className="card"style={{
        backgroundColor: "rgba(255, 0, 0)",
        backdropFilter: "blur(3px)",
        borderWidth: "1px",
        borderColor: "rgb(33, 232, 254)",
        width: 20 + "rem",
        height:10 + "rem",
        color:"whitesmoke",
        justifyContent:"center",
        alignItems:"center",
        fontSize:"1em"
      }}> <i class="bi bi-exclamation-octagon-fill"></i>
          You need to be a logged in to access this page.
        </div>
        <button className="bttn mt-4" to="/"> Move to Login Page  </button> 
      </div>
    
  );
}
export default UnAuthenticated;
