import React, { useState } from "react";

const App = () => {
  let [data, setData] = useState({
    email: "",
    message: "",
    name: "",
  });

  const onChangeHandler=(e)=>{
    setData({...data,[e.target.email]:e.target.value})
  }
  const msgOnChangeHandler=(e)=>{
    setData({...data,[e.target.message]:e.target.value})
  }

  const nameOnChangeHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

const onSubmitHandler=(e)=>{
  e.preventDefault();
  fetch(" https://admin.srkprojects.com/web/api/client/v1/contact-us/data.json",
  {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({data}),
  }
  
  
  ).then(res=>alert("Data Posted"))
}
  return (
      <center>
        <form>
          <label>Email: </label>
          <input type="text" onChange={onChangeHandler}/><br/>
          <label>Message: </label>
          <input type="text"  onChange={msgOnChangeHandler}/><br/>
          <label>Name: </label>
          <input type="text" onChange={nameOnChangeHandler}/> <br/>
          <input type="submit" value="Post Data" onClick={onSubmitHandler}/>
        </form>
      </center> 
  );
};

export default App;
