import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { ContactCard } from "./ContactCard";


export const Home = () => {
	const { store, actions } = useContext(Context);
	<div className="container text-center mt-5">
		<input onKeyUp={(e)=> {
			if (e.key == "Enter") {
				actions.addContact(e.target.value);
			}
		}}/>
		<div className="">
			{store.contacts.map((item,i)=>{
				return <ContactCard key={i} item={item}/>
			})}
		</div>
	</div>
	};
