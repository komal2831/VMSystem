import React, { Component } from 'react';
import Axios from 'axios';

class FrontPage extends Component {

    state = {
        RegistratonForm: false,
        mainPage: true,
        dataPage: false,
        persons: []
    }

    Registrationpage() {
        this.setState({ RegistratonForm: true, mainPage: false, dataPage: false })
    }

    showMain() {
        this.setState({ RegistratonForm: false, mainPage: true, dataPage: false })
    }

    UserDetails() {
        this.setState({ RegistratonForm: false, mainPage: false, dataPage: true })
    }
    details (){
        this.setState({ RegistratonForm: false, mainPage: true, dataPage: false })
    }

    SubmitData() {

        var name = document.getElementById("name").value;
        var mobile = document.getElementById("mobile").value;
        var email = document.getElementById("email").value;
        var contactperson = document.getElementById("contactperson").value;
        var purpose = document.getElementById("purpose").value;
        var idtype = document.getElementById("idtype").value;
        var govtidno = document.getElementById("govtidno").value;
        var entrytime = document.getElementById("entrytime").value;
        var exittime = document.getElementById("exittime").value;
        const postObject = {
            "Name": name,
            "Gender": 'male',
            "Mobile": mobile,
            "Email": email,
            "ContactPerson": contactperson,
            "Purpose": purpose,
            "IdType": idtype,
            "GovtIdNo": govtidno,
            "EntryDateTime": entrytime,
            "ExitDateTime": exittime,
            "Status": 'pending',
        }
        Axios.post('http://localhost:5000/visitor', postObject).then(response => {
            if (response != null) {
                this.showMain();
            }
        })
        
    }

    componentDidMount() {
        Axios.get(`http://localhost:5000/visitor`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
                console.log(persons)
            })
    }


    render() {
        return (
            <div>
                {
                    this.state.mainPage ?
                        <div>
                            <div>
                                {/* navbar */}
                                <nav className="navbar navbar-expand-md navbar-light sticky-top" style={{ background: "black" }}>
                                    <div className="container-fluid">
                                        <img src="/img/user.png" style={{ height: "30px", width: "30px" }} alt=""></img>
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarResponsive">
                                            <ul className="navbar-nav ml-auto">

                                                <li className="nav-item active">
                                                    <input className="form-control nav-link m-1" placeholder="Search" style={{ width: "660px" }}></input>
                                                </li>
                                                <li className="nav-item">
                                                    <button className="btn-sm text-info btn-light  nav-link bg-dark m-1" style={{ width: "300px" }}><i className="fa fa-globe text-light p-1" aria-hidden="true"></i>Search</button>
                                                </li>
                                                <li className="nav-item">
                                                    <button onClick={() => this.Registrationpage()} className="btn text-info btn-light  nav-link bg-dark m-1"><i className="fa fa-globe text-light p-1" aria-hidden="true"></i>Add Visitor</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>


                            <div>{this.state.persons.map(st =>
                                <div className="container-fluid padding">
                                    <div className="row padding p-2" style={{ marginTop: "40px", border: "2px dotted yellow" }}>
                                        <div className="col-lg-5">
                                            {/* eslint-disable-next-line */}
                                            <img onClick={() => this.UserDetails()} src="img/user.png" className="img-fluid" style={{ height: '150px' }} />
                                        </div>
                                        <div className="col-md-12 col-lg-5 text-light">
                                            <input type="number" className="form-control btn-sm p-1 m-1 col-8" value={st.VisitorID} readOnly />
                                            <input type="text" className="form-control btn-sm p-1 m-1 col-8" value={st.Name} readOnly />
                                            <input type="emil" className="form-control btn-sm p-1 m-1 col-8" value={st.Email} readOnly />
                                            <input type="number" className="form-control p-1 btn-sm m-1 col-8" value={st.Mobile} readOnly />
                                        </div>
                                        <div className="col-lg-2">
                                            <input type="text" className="form-control p-1 btn-sm m-3 btn-primary text-dark col-8" value={st.Status} readOnly />
                                        </div>
                                    </div>
                                </div>
                            )}</div>



                            {/* userdetail */}

                            
                        </div>
                        : false
                }

                {
                    this.state.RegistratonForm ?
                        <div className="container-fluid center m-4 p-4">
                            <div id="modal" className="col-8 border bg-dark mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                <img alt="" src="img/download.jpeg" className="m-1" style={{ width: "380px", height: "100px" }} />
                                <div className="row">
                                    <div className="col-6">
                                        <input id="name" type="text" placeholder="Name" className="form-control btn-sm m-2" />
                                        <input id="mobile" type="number" placeholder="Enter Number" className="form-control btn-sm m-2" />
                                        <input id="purpose" type="text" placeholder="Purpose of visit" className="form-control btn-sm m-2" />
                                        <select id="idtype" className="form-control m-2">
                                            <option>Select Identity Proof</option>
                                            <option>Adhar Card</option>
                                            <option>Pan Card</option>
                                            <option>Voter Card</option>
                                            <option>Passport</option>
                                        </select>
                                        <input id="entrytime" type="datetime-local" placeholder="Entry Date Time" className="form-control btn-sm m-2" />
                                    </div>
                                    <div className="col-6">
                                        {/* <input type="text" placeholder="Last Name" className="form-control btn-sm m-2" /> */}
                                        <input id="contactperson" type="text" placeholder="Contact Person" className="form-control btn-sm m-2" />
                                        <input id="email" type="email" placeholder="Email" className="form-control btn-sm m-2" />
                                        <input id="govtidno" type="number" placeholder="Enter Government ID Number" className="form-control btn-sm m-2" />
                                        <input id="exittime" type="datetime-local" placeholder="Exit Date Time" className="form-control btn-sm m-2" />
                                    </div>
                                </div>
                                <div className="row">
                                    <button className="btn m-2 btn-primary" style={{ width: "220px" }}>Reset</button>
                                    <button onClick={() => this.SubmitData()} className="btn m-2 btn-primary" style={{ width: "225px" }}>Submit</button>
                                </div>
                            </div>
                        </div>
                        : false
                }

                {
                    this.state.dataPage ? 
                    <div className="container-fluid center m-4 p-4">
                                <div id="modal" className=" border bg-dark mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                    <div className="row">
                                        <div className="col-6">
                                            <img src="/img/download.jpeg" className="img-fluid m-2" alt="product" style={{ height: "115px", width: "230px" }} />
                                            <input type="number" placeholder="Enter Number" className="form-control btn-sm m-2" />
                                            <input type="text" placeholder="Enter Name" className="form-control btn-sm m-2" />
                                            <input type="number" placeholder="Enter Adhar Number" className="form-control btn-sm m-2" />
                                            <input type="number" placeholder="Enter DOB" className="form-control btn-sm m-2" />
                                        </div>
                                        <div className="col-6">
                                            <input type="number" placeholder="Enter Id" className="form-control m-2 btn-sm" />
                                            <input type="text" placeholder="Enter Name" className="form-control m-2 btn-sm" />
                                            <input type="text" placeholder="Enter Gender" className="form-control m-2 btn-sm" />
                                            <input type="email" placeholder="Enter Email" className="form-control m-2 btn-sm" />
                                            <input type="text" placeholder="Enter purpose" className="form-control m-2 btn-sm" />
                                            <input type="number" placeholder="Enter Number" className="form-control m-2 btn-sm" />
                                            <input type="number" placeholder="Enter Date" className="form-control m-2 btn-sm" />
                                        </div>
                                    </div>
                                    <button className="btn btn-primary m-2" style={{ width: "380px" }}>Delete</button>
                                    <div className="row">
                                        <button className="btn m-2 btn-primary" style={{ width: "220px" }}>Edit</button>
                                        <button className="btn m-2 btn-primary" style={{ width: "225px" }}>Print ID</button>
                                    </div>
                                    <div className="row">
                                        <button className="btn m-2 btn-primary" style={{ width: "220px" }}>Approve</button>
                                        <button className="btn m-2 btn-primary" style={{ width: "225px" }}>Reject</button>
                                    </div>
                                    <button className="btn btn-primary m-2" onClick={() => this.details()}  style={{ width: "380px" }}>Back to main Page</button>
                                </div>
                            </div>
                            : false
                }
            </div>
        );
    }
}

export default FrontPage;