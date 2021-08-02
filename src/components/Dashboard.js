import React, { useState, useEffect } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

import { db } from "./../firebase";
import FireData from "./FireData";

export default function Dashboard() {
  const [error, setError, complaintList] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }
  window.addEventListener('load', () => {
    Fetchdata();
  });
      const Fetchdata = ()=>{
          db().ref("hostel/Electricity/").on("value", snapshot => {
      let itemList = [];
      snapshot.forEach(snap => {
        console.log(itemList);
          itemList.push(snap.val());
      });
      complaintList(itemList);
    });
  }
  console.log(complaintList);

  return (
    <>

      <p></p>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
      <FireData />
      {/* {
            complaintList.map((data) => (
            <Frame detail={data.detail} 
                   name={data.name} 
                   phone={data.phone} 
                   status={data.status} 

                   category={data.category}/>
            ))
        } */}

    </>
  )
}

const Frame = ({category , name , detail, phone, status}) => {
  return (
    <Card>
        <Card.Body>
          <h2 className="text-center mb-4">{category}</h2>
          <strong>Name:</strong> {name}
          <br />
          <strong>Detail:</strong> {detail}
          <br />
          <strong>Phone:</strong> {phone}
          <br />
          <strong>Status:</strong> {status}          
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Status
          </Link>
        </Card.Body>
      </Card>
  );
}
