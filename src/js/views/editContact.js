import React from "react";
import { useLocation } from "react-router";
import "../../styles/home.css";

import EditForm from "../component/editForm.jsx";

function EditContact(){
	const {state} = useLocation();
	return (
		<div className="text-center m-4">
			<EditForm contactIndex = {state.id}/>
		</div>
	);
}  

export default EditContact;