import React, { useState } from "react";
import "../App.css";
import { db } from "../firebase";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

       const handleSubmit = (e) => {
        e.preventDefault();
      
        db.collection("contacts")
        .add({
            name:name,
            email:email,
            message:message,
        })

        .then(() => {
            alert("Request has been submitted");
        })
        .catch((error) => {
            alert(error.message);
        });

        setName("");
        setEmail("");
        setMessage("");
    };
    return(
      <div class="container">
        <h1 class="title"><span>Contact Me!</span></h1>
        <br/>
        <div class="wrapper animated bounceInLeft">
            <div class="my-info">
                
                
                <ul>
                    <li><i class="fa fa-road"></i>London Road, Buxton</li>
                    <li><i class="fa fa-phone"></i>+447366392335</li>
                    <li><i class="fa fa-envelope"></i>sandrapatriciacm233@gmail.com</li>
                </ul>
            </div>
            <div class="contact">
                <form>
                    <p>
                      <label>Name</label>
                      <input type="text" name="Name"/>
                    </p>
                    <p>
                      <label>Email</label>
                      <input type="text" name="email"/>             
                    </p>
                    <p class="full">
                        <label>Message</label>
                        <textarea name="message" rows="5"></textarea>
                    </p>
                    <p class="full">
                        <button>Submit</button>
                    </p>
                </form>
            </div>
        </div>
      </div>
           
    );
};

export default ContactForm;