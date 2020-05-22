import React from 'react';

const CreatePost=()=>{
    return (
       <div className="card input-filed"
       style={{
           margin:"4rem auto",
           maxWidth:'550px',
           padding:"25px",
           textAlign:"center",
           borderRadius:"10px",
           
       }}
       >
       <h4>
           Add Your Post here
        </h4>
        <input type="text" placeholder="title"/>
        <input type="text" placeholder="body"/>
          
        <div className="file-field input-field">
        <div className="btn">
            <span>Photo</span>
            <input type="file"/>
        </div>
        <div className="file-path-wrapper">
            <input className="file-path validate" type="text"/>
        </div>
        </div>  
        <button className="btn waves-effect waves-light  blue darken-1">
        Submit 
        </button>  
       
       </div>
    )
}


export default CreatePost
