/// <reference path="../../index.js" />
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Container, Col, Row, Form, Label, Input, FormGroup, Button } from "reactstrap";
import { Link } from "@material-ui/core";
import Registrar from "./Registrar";
import { Navigate, resolvePath } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    const [nombreUsuario, setNombreUsuario] = useState([]);
    const [contraseña, setContraseña] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [navigate, setNavigate] = useState(false)

    const data = {
        nombreUsuario,
        contraseña
    }



    const IniciarSesion = async (e) => {
        e.preventDefault();
        axios.post('http://samuelch-001-site1.btempurl.com/api/Autenticacion/Login', data)
        .then(res => {
            console.log(res);
            setNavigate(true);
            sessionStorage.setItem('jwt', res.data.jwt);
            sessionStorage.setItem('nombreUsuario', res.data.oUsuario.nombreUsuario);
            sessionStorage.setItem('nombreCompleto', res.data.oUsuario.nombreCompleto);
        })
        .catch(err => {
            console.log(err)
        })
        
    }

    if (navigate) {
        return <Navigate to="/home"/>
    }


   

    return (
        <Container className="vh-100 h-100 d-flex align-items-center">
            <Row className="w-100">
                <Col>
                    IMAGEN DE TWITTER
                </Col>
                <Col className="w-100">
                    <Form className="w-100 d-flex flex-column align-items-center" onSubmit={IniciarSesion}>
                        <h1>Iniciar Sesion</h1>
                        <FormGroup className="w-100">
                            <Label>Username </Label>
                            <Input type="text" name="uname" required
                                onChange={e => setNombreUsuario(e.target.value)}
                            />
                        </FormGroup>

                        <FormGroup className="input-container w-100">
                            <Label>Password </Label>
                            <Input type="password" name="pass" required
                                onChange={e => setContraseña(e.target.value)}
                            />
                        </FormGroup>

                        <FormGroup className="button-container">
                            <Button size="lg">Iniciar Sesion</Button>
                        </FormGroup>
                    </Form>

                    <span>¿Aún no tienes una cuenta?<a className="" onClick={() => setMostrarModal(!mostrarModal)}> Sign up</a></span>

                    
                </Col>
            </Row>
            <Registrar
                mostrarModal={mostrarModal}
                setMostrarModal={setMostrarModal}
            />
        </Container> 

    );
       
};

export default Login;
