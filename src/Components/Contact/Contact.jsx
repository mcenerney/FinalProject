import React from "react";
import './Contact.css';
import { useForm } from "react-hook-form";
const Contact = () => {

    const {register, handleSubmit, watch, formState: {errors}, } = useForm();
    const onSubmit = (d) =>
        console.log(JSON.stringify(d));


return (
    <>
    <div className="contact">
        <div className="container">
            <h1>Contact Me!</h1>
            <div className="form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                    <label>Name:
                        <br></br>
                        <input type="text" defaultValue="" placeholder="Enter name here" {...register("name")}/>
                    </label>
                    </div>
                    <div>
                    <label>
                        Email:
                        <br></br>
                        <input type="email" defaultValue="" placeholder="Enter email here" {...register("email")}/>
                    </label>
                    </div>
                    <div>
                    <label>
                        Comments:
                        <br></br>
                        <textarea rows="10" cols="40" defaultValue="" placeholder="Enter comment here" {...register("comment")}/>
                    </label>
                    </div>
                    <div>
                    <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
          
        </div>
    </div>
    </>
 );
}
export default Contact