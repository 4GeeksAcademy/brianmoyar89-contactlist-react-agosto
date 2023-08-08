import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import { CreateContact } from "./views/createContact";
import EditContact from "./views/editContact";
import { agregarContacto } from "./store/slice/contactosSlice";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	
	const dispach = useDispatch();
	useEffect(() => {
		const fetchContacts = async () => {
			const serverResponse = await fetch("https://assets.breatheco.de/apis/fake/contact/agenda/smoure");
			const responseAsObject = await serverResponse.json();
			for (let index in responseAsObject){
				const element = responseAsObject[index];
				const newContact = {
					name: element.full_name,
      				address: element.address,
      				phone: element.phone,
      				email: element.email
				};
				dispach(agregarContacto(newContact));

			}
		};
		fetchContacts();
	});

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/newcontact" element={<CreateContact/>}/>
						<Route path="/editcontact" element={<EditContact/>}/>
					</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Layout;
