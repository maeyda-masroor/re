import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
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
        <h1>Give Us Feeback , If you have an Inquiry , you may contact Us or Fill the form below</h1>
        <br/>
     <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
    <div class="bg-light rounded h-100 d-flex align-items-center p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div class="row g-3">
                <div class="col-12 col-sm-6">
                    <input type="text" class="form-control border-0" placeholder="Your Name" propsstyle="height: 55px;" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div class="col-12 col-sm-6">
                    <input type="email" class="form-control border-0" placeholder="Your Email" propsstyle="height: 55px;"
                    name="email"
                    {...register("email", {
                      required: true,
                      //pattern:/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/i
                    })}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                  {errors.email && errors.email.type === "required" && (
                    <p className="errorMsg">Email is required.</p>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <p className="errorMsg">Email is not valid.</p>
                  )}
                </div>
                <div class="col-12 col-sm-6">
                    <input type="text" class="form-control border-0" placeholder="Your Mobile" propsstyle="height: 55px;"
                    name="phonenumber"
                    {...register("phonenumber", {
                      required: true,
                      //pattern:/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/i
                    })}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  {errors.email && errors.email.type === "required" && (
                    <p className="errorMsg">Email is required.</p>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <p className="errorMsg">Email is not valid.</p>
                  )}
                </div>
                <div class="col-12">
                    <textarea class="form-control border-0" rows="5" placeholder="Submit Inquiry" onChange={(e)=>setContent(e.target.value)}></textarea>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary w-100 py-3" type="submit">Submit Your Inquiry</button>
                </div>
            </div>
        </form>
    </div>
</div>
</div>

}
export default MakeAnInquiry;