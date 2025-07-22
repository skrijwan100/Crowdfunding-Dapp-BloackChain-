import React, { useState } from 'react';
import icone from "../assets/icone.jpg";
import { Link } from 'react-router';
export default function Navbar() {
    const [Address, SetAddress] = useState()
    const {ethereum}=window
    const connectmetamaks = async () => {
        if (!window.ethereum) {
            alert("Install MetaMask frist")
            return;
        }
        const account = await ethereum.request({
            method:'eth_requestAccounts',
        })
        console.log(account[0])
        const fullAddress= account[0]
        const newaddress=`${fullAddress.slice(0, 6)}...${fullAddress.slice(-4)}`

        SetAddress(newaddress)
    }
    return (
        <nav style={{
            width: "100%",
            backgroundColor: "#2c3e50",
            padding: "1rem 2rem",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            position: "fixed",
            top: 0,
            zIndex: 1000,
        }}>
            <div style={{
                maxWidth: "1200px",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <div className="icone">
                    <img
                        src={icone}
                        alt="Logo"
                        style={{
                            height: "50px",
                            width: "50px",
                            borderRadius: "8px",
                            transition: "transform 0.3s ease",
                            cursor: "pointer",
                        }}
                        onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
                        onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                    />
                </div>

                <div className="allLink">
                    <ul style={{
                        listStyle: "none",
                        display: "flex",
                        gap: "30px",
                        margin: 0,
                        padding: 0,
                        textDecoration: "none"
                    }}>

                        <Link to="/" style={{ textDecoration: "none" }}> <li style={{
                            color: "#ecf0f1",
                            cursor: "pointer",
                            padding: "8px 12px",
                            fontSize: "16px",
                            fontWeight: "500",
                            transition: "color 0.3s ease",
                            backgroundColor: "#3498db",
                            borderRadius: "6px",
                            textDecoration: "none"
                        }}
                        >
                            Champing
                        </li></Link>
                        <Link to="/createCamping" style={{ textDecoration: "none" }}> <li style={{
                            color: "#ecf0f1",
                            cursor: "pointer",
                            padding: "8px 12px",
                            fontSize: "16px",
                            fontWeight: "500",
                            transition: "color 0.3s ease",
                            backgroundColor: "#3498db",
                            borderRadius: "6px",
                            textDecoration: "none"
                        }}
                        >
                            Create Champing
                        </li></Link>
                        <Link to="/dashbord" style={{ textDecoration: "none" }}> <li style={{
                            color: "#ecf0f1",
                            cursor: "pointer",
                            padding: "8px 12px",
                            fontSize: "16px",
                            fontWeight: "500",
                            transition: "color 0.3s ease",
                            backgroundColor: "#3498db",
                            borderRadius: "6px",

                        }}
                        >
                            Dashbord
                        </li></Link>

                    </ul>
                </div>

                <div className="login-metamask">
                    <button style={{
                        backgroundColor: "#3498db",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "15px",
                        fontWeight: "500",
                        transition: "all 0.3s ease",
                    }}
                        onMouseOver={(e) => {
                            e.target.style.backgroundColor = "#2980b9";
                            e.target.style.transform = "translateY(-2px)";
                        }}
                        onMouseOut={(e) => {
                            e.target.style.backgroundColor = "#3498db";
                            e.target.style.transform = "translateY(0)";
                        }}
                        onClick={connectmetamaks}
                    >
                        {Address?Address:'Connect Metamask'}
                    </button>
                </div>
            </div>
        </nav>
    );
}
