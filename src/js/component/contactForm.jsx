import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { agregarContacto } from "../store/slice/contactosSlice";
import { Link, useNavigate } from "react-router-dom";

function ContactForm(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [contactForm, setContactForm] = useState(
        {
            name: '',
            address: '',
            phone: '',
            email: ''}
    );

    function inputOnChange(event){
        setContactForm({
            ...contactForm,
            [event.target.name]: event.target.value
        });
    }

    function contactFormIsFull(){
        if (contactForm.name == "" || contactForm.email == "" || contactForm.address == "" || contactForm.phone == ""){
                document.getElementById("modalAdvise").style.display = 'block';
                setTimeout(() => {document.getElementById("modalAdvise").style.display = 'none';}, 2000);
                }
            else{
                dispatch(agregarContacto(contactForm));
                navigate("/");
            }
    }

    const labelClasses = "form-label fw-bold w-100 text-start ms-1";

    return (
        <div className="container">
            <form>
                <div className="mb-3">
                    <label className={labelClasses}>Full Name</label>
                    <input type="text" className="form-control" placeholder="Full Name" name="name" onChange={inputOnChange}/>
                </div>
                <div className="mb-3">
                    <label className={labelClasses}>Email</label>
                    <input type="text" className="form-control" placeholder="Enter email" name="email" onChange={inputOnChange}/>
                </div>
                <div className="mb-3">
                    <label className={labelClasses}>Phone</label>
                    <input type="text" className="form-control" placeholder="Enter phone" name="phone" onChange={inputOnChange}/>
                </div>
                <div className="mb-3">
                    <label className={labelClasses}>Address</label>
                    <input type="text" className="form-control" placeholder="Enter address" name="address" onChange={inputOnChange}/>
                </div>
                <button type="button" className="btn btn-primary w-100" onClick={contactFormIsFull}>Save</button>
            </form>
            <Link to={"/"} className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" style={{float: "left"}}>
                or get back to contacts
            </Link>
            <div className="modal" tabIndex="-1" id="modalAdvise">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Contact Information Missing</h5>
                        </div>
                        <div className="modal-header">
                            <p>This modal will close in two seconds</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;