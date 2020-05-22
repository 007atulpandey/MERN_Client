import React,{Component} from 'react'
import { privateEncrypt } from 'crypto';
import './home.css'
const Home =()=>{
    return (

        <div className="home">
        <div className="card home-card"> 
           <h5>
               atul pandey
            </h5>
            <div className ="card-image">
            <img src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"/>
            </div> 

            <div className="card-content">
                <i className="material-icons" style= {{color:"red"}} > favorite</i>
                <h6>
                    title
                </h6>
                <p > this is awesome scenary</p>
                <input type ="text" placeholder="comment"/>


            </div>
        </div> 




        <div className="card home-card"> 
           <h5>
               atul pandey
            </h5>
            <div className ="card-image">
            <img src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"/>
            </div> 

            <div className="card-content">
                <h6>
                    title
                </h6>
                <p > this is awesome scenary</p>
                <input type ="text" placeholder="comment"/>


            </div>
        </div> 
        <div className="card home-card"> 
           <h5>
               atul pandey
            </h5>
            <div className ="card-image">
            <img src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"/>
            </div> 

            <div className="card-content">
                <h6>
                    title
                </h6>
                <p > this is awesome scenary</p>
                <input type ="text" placeholder="comment"/>


            </div>
        </div> 
        <div className="card home-card"> 
           <h5>
               atul pandey
            </h5>
            <div className ="card-image">
            <img src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"/>
            </div> 

            <div className="card-content">
                <h6>
                    title
                </h6>
                <p > this is awesome scenary</p>
                <input type ="text" placeholder="comment"/>


            </div>
        </div> 
            
        </div>
    );
}

export default Home