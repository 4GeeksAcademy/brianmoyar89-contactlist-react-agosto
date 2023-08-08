import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { agregarContacto, borrarContacto } from "../store/slice/contactosSlice";
import { useNavigate } from "react-router-dom";

function EditForm({contactIndex}){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selector = useSelector((store) => {return store.contactos[contactIndex]});
    const [contactForm, setContactForm] = useState(
        {
            name: selector.name,
            address: selector.address,
            phone: selector.phone,
            email: selector.email}
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
                dispatch(borrarContacto(contactIndex));
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
                    <input type="text" className="form-control" value={contactForm.name} name="name" onChange={inputOnChange}/>
                </div>
                <div className="mb-3">
                    <label className={labelClasses}>Email</label>
                    <input type="text" className="form-control" value={contactForm.email} name="email" onChange={inputOnChange}/>
                </div>
                <div className="mb-3">
                    <label className={labelClasses}>Phone</label>
                    <input type="text" className="form-control" value={contactForm.phone} name="phone" onChange={inputOnChange}/>
                </div>
                <div className="mb-3">
                    <label className={labelClasses}>Address</label>
                    <input type="text" className="form-control" value={contactForm.address} name="address" onChange={inputOnChange}/>
                </div>
                <button type="button" className="btn btn-primary w-100" onClick={contactFormIsFull}>Save</button>
            </form>
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

export default EditForm;