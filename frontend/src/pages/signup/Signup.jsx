import GendercheckBox from "./GendercheckBox"
import { Link } from "react-router-dom"
import { useState } from "react"
import useSignup from "../../hooks/useSignup"

const SignUp = () => {

    const [inputs,setInputs]=useState({
      fullName:'',
      username:'',
      password:'',
      confirmPassword:'',
      gender:'',
    })
    const {loading,signup}=useSignup();

    const handleCheckboxChange =(gender)=>{
      setInputs({...inputs,gender})
    }

    const handleSubmit=async(e)=>{
      e.preventDefault();
      await signup(inputs)
    }

  return (
    <div className="'flex flex-col items-center justify-center min-w-96 mx-auto">
    <div className="h-full w-full bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100 p-6">
    <h1 className="text-3xl font-semibold text-center text-gray-300">
        Sign-Up<span className="text-blue-500"> ChatApp</span>
      </h1>
          <form onSubmit={handleSubmit}>
            <div>
                <label className='label p-2'>
                    <span className='text base label-text'>Full Name</span>
                </label>
                <input type='text' placeholder="Ganesh prabhakaran" className="w-full input input-bordered h-10" 
                value={inputs.fullName}
                  onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}
                />
            </div>
            <div>
                <label className='label p-2'>
                        <span className='text base label-text'>User Name</span>
                    </label>
                    <input type='text' placeholder="Lovely__prabha" className="w-full input input-bordered h-10"
                      value={inputs.username}
                      onChange={(e)=>setInputs({...inputs,username:e.target.value})}
                    />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e)=>setInputs({...inputs,password:e.target.value})}
              />
        </div>
        <div>
              <label className="label">
                <span className="text-base label-text">Confirm Password</span>
              </label>
              <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
              />
        </div>
        <GendercheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
        <Link className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block" to={"/Login"}>
          Already have an account?
        </Link>
        <div>
          <button className="btn btn-block btn-sm mt-2 text-center border-slate-700" 
          disabled={loading}
          >
            {loading ? <span className="loading loading-spinner"></span> :"Sign up"}
          </button>
        </div>
          </form>
    </div>
    </div>
  )
}

export default SignUp
 
// STATER CODE THE SIGN-UP COMPONENTS
// import GendercheckBox from "./GendercheckBox"


// const SignUp = () => {
//   return (
//     <div className="'flex flex-col items-center justify-center min-w-96 mx-auto">
//     <div className="h-full w-full bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100 p-6">
//     <h1 className="text-3xl font-semibold text-center text-gray-300">
//         Sign-Up<span className="text-blue-500"> ChatApp</span>
//       </h1>
//           <form>
//             <div>
//                 <label className='label p-2'>
//                     <span className='text base label-text'>Full Name</span>
//                 </label>
//                 <input type='text' placeholder="Ganesh prabhakaran" className="w-full input input-bordered h-10"/>
//             </div>
//             <div>
//                 <label className='label p-2'>
//                         <span className='text base label-text'>User Name</span>
//                     </label>
//                     <input type='text' placeholder="Lovely__prabha" className="w-full input input-bordered h-10"/>
//             </div>
//             <div>
//               <label className="label">
//                 <span className="text-base label-text">Password</span>
//               </label>
//               <input
//               type="password"
//               placeholder="Enter Password"
//               className="w-full input input-bordered h-10"/>
//         </div>
//         <div>
//               <label className="label">
//                 <span className="text-base label-text">Confirm Password</span>
//               </label>
//               <input
//               type="password"
//               placeholder="Confirm Password"
//               className="w-full input input-bordered h-10"/>
//         </div>
//         <GendercheckBox/>
//         <a className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block" href="#">
//           Already have an account?
//         </a>
//         <div>
//           <button className="btn btn-block btn-sm mt-2 text-center">Login</button>
//         </div>
//           </form>
//     </div>
//     </div>
//   )
// }

// export default SignUp
