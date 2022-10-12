
import React from "react";
import { useState } from "react";
import { Form, Label, ModalBody, ModalHeader, Input, ModalFooter, FormGroup, Modal, Button } from "reactstrap";
import axios from 'axios';

const Registrar = ({mostrarModal,setMostrarModal}) => {

    const [NombreUsuario, setNombreUsuario] = useState([]);
    const [NombreCompleto, setNombreCompleto] = useState([]);
    const [EmailAddress, setCorreo] = useState([]);
    const [Contraseña, setContraseña] = useState([]);

    const registrarUsuario = async (e) => {
        e.preventDefault()
        const data = {
            NombreUsuario,
            NombreCompleto,
            EmailAddress,
            Contraseña
        }
        axios.post('http://samuelch-001-site1.btempurl.com/api/Autenticacion/RegistrarUsuario', data).then(
            res => {
                console.log(res);
            }
        ).catch(
            err => {
                console.log(err);
            }
        )

    }
    return (

        <Modal isOpen={mostrarModal}>
            <h5 className="d-flex justify-content-between m-3">
                Registrate
                <Button className="btn-close" onClick={() => setMostrarModal(!mostrarModal) }></Button>
            </h5>
            <ModalBody>
                <Form className="Registrar" onSubmit={registrarUsuario}>
                    <FormGroup className="input-container">
                        <Label>Username</Label>
                        <Input type="text" name="uname" required
                            onChange={e => setNombreUsuario(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup className="input-container">
                        <label>Nombre Completo</label>
                        <Input type="text" name="ufullname" required
                            onChange={e => setNombreCompleto(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup className="input-container">
                        <label>Email</label>
                        <Input type="text" name="correo" required
                            onChange={e => setCorreo(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup className="input-container">
                        <label>Password</label>
                        <Input type="password" name="pass" required
                            onChange={e => setContraseña(e.target.value)}
                        />
                    </FormGroup>

                    <span>
                        By signing up, you agree to the{" "}
                        <a href="https://twitter.com/tos" target="blank" className="link">
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="https://twitter.com/privacy" target="blank" className="link">
                            Privacy Policy
                        </a>
                        , including{" "}
                        <a
                            href="https://help.twitter.com/rules-and-policies/twitter-cookies"
                            target="blank"
                            className="link"
                        >
                            Cookie Use
                        </a>
                        .
                    </span>
                    <div className="button-container d-flex justify-content-end">
                        <Button className="">Registrar</Button>
                    </div>
                </Form>
            </ModalBody>
        </Modal>
    );
};

export default Registrar;