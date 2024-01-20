import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function MakeAnInquiry(){
    const [errorMessage, setErrorMessage] = React.useState("");
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [Inquiry,setContent] = useState('');
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
      console.log(data);
         const objt = {name,email,phoneNumber,Inquiry};	
          axios.post('https://sheet.best/api/sheets/4b2c79e0-a5c4-445b-a5c0-67ca1877c2c1',objt)
          .then(response => {
            console.log(response);
          })
  
    };
    return <div class="container"> 
        <h1 style={{fontSize:'35px'}}>Give Us Feeback , If you have an Inquiry , you may <Link to = '/contact'>Contact Us</Link> or Fill the form below</h1>
        <br/>
     <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.5s">
    <center><div class="rounded h-100 d-flex align-items-center p-5" style={{backgroundColor:'#c19468'}}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <i><div class="row g-3">
                <div class="col-12 col-sm-6">
                    <input type="text" class="form-control border-0" placeholder="Your Name" propsstyle="height: 55px;" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div class="col-12 col-sm-6">
                    <input type="email" class="form-control border-0" placeholder="Your Email" propsstyle="height: 55px;"
                    name="email"
                    {...register("email", {
                      required: true,
                      pattern:/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/i
                    })}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                  {errors.email && errors.email.type === "required" && (
                    <p className="errorMsg">Put email in this format example@example.com.</p>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <p className="errorMsg">Put email in this format example@example.com</p>
                  )}
                </div>
                <div class="col-12 col-sm-6">
                    <input type="text" class="form-control border-0" placeholder="Your Mobile" propsstyle="height: 55px;"
                    name="phonenumber"
                    {...register("phonenumber", {
                      required: true,
                      pattern:/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i
                    })}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  {errors.email && errors.email.type === "required" && (
                    <p className="errorMsg">Phone number is required. / Please put phonenumber in this format ... (123)12345678</p>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <p className="errorMsg">Please put phoneNumber in this format ..... (123)12345678.</p>
                  )}
                </div>
                <div class="col-12">
                    <textarea class="form-control border-0" rows="5" placeholder="Submit Inquiry" onChange={(e)=>setContent(e.target.value)}></textarea>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary w-100 py-3" type="submit">Submit Your Inquiry</button>
                </div>
            </div>
            </i>
        </form>
    </div>
    </center>
</div>
</div>


}
export default MakeAnInquiry;