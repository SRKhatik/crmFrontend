
import { logout } from "../../handlers/logoutHandler";
import '../../stylesCss/linkbuttons.css'

function UnAuthorised(props){
    return (
        <div className="vh-100 d-flex align-items-center flex-column justify-content-center" >
        
        <div className="card"style={{
            backgroundColor: "rgba(255, 0, 0,0.3)",
            backdropFilter: "blur(3px)",
            borderWidth: "1px",
            borderColor: "rgb(33, 232, 254)",
            width: 18 + "rem",
            height:12 + "rem",
            color:"whitesmoke",
            justifyContent:"center",
            alignItems:"center",
            fontSize:"1.3em"
          }}> <i class="bi bi-exclamation-octagon-fill"></i> OOPS! User of  { props.userType }  type doesn't have sufficient permissons to access this page. </div>
        <button className="bttn mt-4" onClick={logout}> Login as another Role  </button> 
    </div>

    )
}
export default UnAuthorised;