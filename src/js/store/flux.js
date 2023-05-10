const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts:[
				{
					name: "Dave Bradley",
					email: "dave@gmail.com",
					agenda_slug: "my_super_agenda",
					address:"47568 NW 34ST, 33434 FL, USA",
					phone:"7864445566"
				}
			]
		},
		actions: {
			addContact: (name) => {
				const contacts = getStore().contacts;

				let higherId = 0;
				for (let x = 0; x < contacts.length; x++) {
					if (contacts[x].id > higherId) {
						higherId = contacts[x].id;
					}
				}
				let newContact = { id: higherId + 1, name: name }
					setStore({contacts: [ ...contacts, newContact ]});
				
			}
		}
	};
};

export default getState;
