import Navbar from "./Navbar"
import Home from "../images/home.svg"
import { connect } from "react-redux"
import { signInAPI } from "../actions"
import { Navigate } from "react-router-dom"

const Login = (props) => {
    
  return (
    <>
        {
            props.user && <Navigate to="/dashboard"/>
        }
        <Navbar />
        <div className="xl:w-screen h-screen flex bg-white ">
            <div className='flex flex-col justify-center items-center w-1/2  h-full gap-16'>
                <div>
                    <h1 className="text-zinc-700 text-[50px] text-start">Welcome to your</h1>
                    <h1 className="text-zinc-700 text-[50px] leading-12">proffessional network</h1>
                </div>
                <div className="flex flex-col w-full justify-center gap-4 items-center">
                    <input type="submit" value="Sign in with Google" className="signInButtons border-0 bg-blue-600 text-white hover:bg-blue-300" onClick={()=>{
                        props.signIn()
                    }}/>
                    {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="LgbsSe-Bz112c"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg> */}
                    <input type="submit" value="Sign in with email" className="signInButtons text-zinc-950 border-1 border-zinc-700 hover:bg-zinc-100"/>
                </div>
                <div className="flex flex-col gap-5 items-center justify-center">
                    <p className="text-[13px] leading-[5px]">By clicking Continue to join or sign in, you agree to LinkedIn's <span className="text-blue-700">User</span></p>
                    <p className="text-[13px] leading-[5px]"><span className="text-blue-700">Agreement, Privacy Policy</span>, and <span className="text-blue-700">Cookie Policy</span></p><br />
                </div>
                <div className="flex gap-2 leading-0 items-center">
                    <h2 className="text-lg">New to LinkedIn?</h2>
                    <a className="text-blue-700 text-xl">Join Now</a>
                </div>
            </div>
            <div className="flex justify-center items-center w-1/2 h-full">
                <img src={Home} alt="" className="w-[700px] h-[500px] object-cover"/>
            </div>
        </div>
    </>
  )
}
const mapStateToProps = (state) =>{
    console.log(state);
    return {
        user: state.userState.user,
    };
}

const mapDispatchToProps = (dispatch) => ({
    signIn: () => dispatch(signInAPI()),
});

export default  connect(mapStateToProps, mapDispatchToProps)(Login);

