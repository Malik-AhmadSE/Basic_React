import React from "react";
import './Signup.css'
function Signup() {
  return (
    <div className="main_div">
      <div id="inner_div">
            <h1 style={{display:'flex',justifyContent:'center',color:'#8dd4de'}}>Signup</h1>
            <form className="form">
            <div>
            <label htmlFor="name">Name : </label>
            <input type="text" name="name" placeholder="enter name"  maxLength={12}/>
            </div>
            <div>
            <label htmlFor="email">Email : </label>
            <input type="email" name="email" value='abc@gmail.com' />
            </div>
            <div>
            <label htmlFor="age">Age : </label>
            <input type="number" name="age" value='23' min={0}/>
            </div>
            <div>
            <label htmlFor="password">Password : </label>
            <input type="password" name="password" placeholder="********" maxLength={8} />
            </div>
            <div>
            <button id='submit'>Submit</button>
            </div>
            </form>
      </div>
    </div>
  );
}

export default Signup;
