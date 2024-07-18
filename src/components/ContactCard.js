import axios from "axios";
import React, { useEffect, useState } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
const ContactCard = () => {
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [items, setItems] = useState([
    {
      name: "Pavan Kumar",
      phone: "987098087",
    },
    {
      name: "Satwik Gupta",
      phone: "987578765",
    },
    {
      name: "Anand Singh",
      phone: "980866886",
    },
  ]);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleMobileNo = (e) => {
    setMobileNo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      phone: mobileNo,
    };
    axios
      .post("http://localhost:8000/contact-list", formData, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then(function (response) {
        const resData = response.data;
        if(resData.status === '200'){
          setItems((prev)=>([...prev,formData]))
        }
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handlClick = (param, event) => {
    event.preventDefault();
    console.log("delete function",param)
  }

  return (
    <div
      style={{
        width: "400px",
        height:"400px",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        marginTop: "5rem",
        padding:"0.6rem",
        boxShadow:"1px 3px 7px rgba(0,0,0,0.2)",
        borderRadius:"7px",
        overflow:"scroll"
      }}
    >
     <h1 style={{display: "flex", alignItems: "center",justifyContent:"center"}}>
  <ContactEmergencyIcon style={{fontSize: 33, marginRight: "10px"}} />
  Create Contacts
</h1>
      <div>
        {items.map((item, index) => (
          <ul
            key={index}
            style={{
              padding: "0 0.3rem",
              margin: "0",
              background: "midnightblue",
              color:"#e3e2de",
              borderBottom: "2px solid #fff",
              fontWeight:"bold",
              borderRadius:"3px"
            }}
          >
            <li
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "space-between",
                alignItems: "center",
                padding:"0"
              }}
            >
              <p>{item.name}</p>
              <p>{item.phone}</p>
              <div onClick={(event)=>{handlClick(item.phone,event)}}>
                <a href="" style={{textDecoration:"none",color:"#e0c61d"}}>
                  <HighlightOffIcon color="#e0c61d" />
                </a>
              </div>
            </li>
          </ul>
        ))}
      </div>
      <form
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
        onSubmit={handleSubmit}
      >
        <input
          id="outlined-basic"
          type="text"
          name="name"
          placeholder="Name"
          required
          onChange={handleName}
          style={{
            outline: "none",
            border: "none",
            background:"#e1e6e2"
          }}
        />
        <input
          type="number"
          name="phoneNumber"
          placeholder="Phone"
          required
          onChange={handleMobileNo}
          style={{
            outline: "none",
            border: "none",
            background:"#e1e6e2"
          }}
        />
        <button
          type="submit"
          style={{
            color: "white",
            outline: "none",
            border: "none",
            cursor: "pointer",
            padding: "5px",
            background:"#7be396"
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default ContactCard;
