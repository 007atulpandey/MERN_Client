import React,{Component} from 'react'
import './gallery.css'
const Profile =()=>{
    return (

        <div style={{maxWidth:"840px", margin:"0px auto"}} > 
           <div
           style={{display:"flex",
           justifyContent:"space-around",
           margin:"18px 0px",
           paddingBottom:"10px",
           borderBottom:"2px solid grey"
        }}>
           <div>
                <img src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=911&q=80"
                 style={{width:"160px",height:"160px",borderRadius:"80px"}} />
            </div>
            <div style={{textAlign:"center",alignItems:"center",width:"100%"}}  >
                    <h4>Atul Pandey </h4>
                    <div style={{ padding:"10px 10%",display:"flex",
                justifyContent:"space-around"}}>
                        <h6> 
                            40 Posts                            
                        </h6>
                        <h6> 
                            40 followers
                        </h6>
                        <h6> 
                            40 followings
                        </h6>
                    </div>
            </div>
            </div>


            <div className="gallery"> 
            
            <img className="gallery-item" src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=911&q=80"
            />
            <img className="gallery-item" src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=911&q=80"
            />
            <img className="gallery-item" src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=911&q=80"
            />
            <img className="gallery-item" src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=911&q=80"
            />
            <img className="gallery-item" src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=911&q=80"
            />
            <img className="gallery-item" src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=911&q=80"
            />
            <img className="gallery-item" src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=911&q=80"
            />

            </div>
        </div>
    );
}

export default Profile