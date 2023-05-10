import React from "react";

export const ContactCard = ({ item }) => {
    return <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Email: {item.email}</p>
            <p className="card-text">Address: {item.address}</p>
            <p className="card-text">Phone: {item.phone}</p>
        </div>
    </div>
};