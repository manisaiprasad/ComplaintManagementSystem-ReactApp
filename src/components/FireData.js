import React, { Component } from 'react'
import { db } from "../firebase";
import { Card, Button, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"

export default class fireData extends Component {
    constructor(props) {
        super(props);
        this.state = {Electricity : [], General : [],Theft : []}
        }
        
        componentDidMount() {
            db.ref("hostel/Electricity").on("value", snapshot => {
              let allNotes = [];
              snapshot.forEach(snap => {
                allNotes.push(snap.val());
              });
              this.setState({ Electricity: allNotes });
            });

            db.ref("hostel/General").on("value", snapshot => {
                let allNotes = [];
                snapshot.forEach(snap => {
                  allNotes.push(snap.val());
                });
                this.setState({ General: allNotes });
              });
              db.ref("hostel/Theft").on("value", snapshot => {
                let allNotes = [];
                snapshot.forEach(snap => {
                  allNotes.push(snap.val());
                });
                this.setState({ Theft: allNotes });
              });
          }

          createNote(id,cat,status) {
              console.log(id)
              console.log(cat)
              console.log(status)
              let newStaus = "";
              if (status =="Done") {
                  newStaus = "Pending"
              } else {
                  newStaus = "Done"
              }

              return db.ref(`hostel/${cat}/${id}`)
                .update({
                "status":newStaus,
             })
            // const uid = this.state.user.uid;
            // const { content } = this.state;
            // const note_id = `note-${Date.now()}`;
          
            // db.ref(`all_notes/${uid}/${note_id}`)
            //   .set({
            //     content,
            //     note_id,
            //     uid
            //   })
            //   .then(_ => {
            //     this.setState({ content: "" });
            //   });
          }
    render() {
        return (
            <div>                    

                {this.state.Electricity.map(data => {
                
                return (
                    <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">{data.category}</h2>
                        <img src={data.url} height="300" width="350px" />
                        <strong>Name:</strong> {data.name}
                        <br />
                        <strong>Detail:</strong> {data.detail}
                        <br />
                        <strong>Phone:</strong> {data.phone}
                        <br />
                        <strong>Status:</strong> {data.status}          
                        <Button onClick={() => this.createNote(data.id,data.category,data.status)} className="btn btn-primary w-100 mt-3">
                        Update Status
                        </Button>
                    </Card.Body>
                    </Card>
                    
                );
                })}

                {this.state.Theft.map(data => {
                
                return (
                    <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">{data.category}</h2>
                        <img src={data.url} height="300" width="360px" />
                        <strong>Name:</strong> {data.name}
                        <br />
                        <strong>Detail:</strong> {data.detail}
                        <br />
                        <strong>Phone:</strong> {data.phone}
                        <br />
                        <strong>Status:</strong> {data.status}          
                        <Button onClick={() => this.createNote(data.id,data.category,data.status)} className="btn btn-primary w-100 mt-3">
                        Update Status
                        </Button>
                    </Card.Body>
                    </Card>
                    
                );
                })}

                {this.state.General.map(data => {
                
                return (
                    <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">{data.category}</h2>
                        <img src={data.url} height="300" width="360px" />
                        <strong>Name:</strong> {data.name}
                        <br />
                        <strong>Detail:</strong> {data.detail}
                        <br />
                        <strong>Phone:</strong> {data.phone}
                        <br />
                        <strong>Status:</strong> {data.status}          
                        <Button onClick={() => this.createNote(data.id,data.category,data.status)} className="btn btn-primary w-100 mt-3">
                        Update Status
                        </Button>
                    </Card.Body>
                    </Card>  
                    
                );
                })}
            </div>
        )
    }
}
