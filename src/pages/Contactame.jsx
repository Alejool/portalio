import { useState, useRef } from "react";
import styled from "@emotion/styled"
import { useForm } from '@formspree/react';
import { redirect, useNavigate  } from "react-router-dom";
import { GrSend } from 'react-icons/gr'




// sytyled components

const Title=styled.h2 `
  color: var(--blanco);
  font-size: 3rem;

  &::after {
    content: '';
    display: block;
    width: 15rem;
    background-color: var(--beige);
    height: .3rem;
    margin: 0 auto;
    border-radius:4rem;
  }
`

const Form = styled.form`
  display: flex;
  color: var(--blanco);
  flex-direction: column;
  max-width: 450px;
  margin: 0 auto;
  margin-bottom: 3rem;
  margin-top: 4rem;
  font-weight:normal;

  p {
    text-align: center;
    text-transform: uppercase;
  }
  
`;

const Fieldset =styled.fieldset `
  border-radius: 5px;
  background-color: var(--gris);
  padding: 3rem 2.5rem;
  border: none;
 
`

const Campo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 1.7rem;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid var(--beige);
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid var(--beige);
  border-radius: 4px;
  display: block;
  overflow-y: auto;
  resize: none;
`;

const Button = styled.button`
  padding-block: 0.8rem ;
  background-color: var(--naranja);
  color: var(--blanco);
  border: none;
  border-radius: 4px;
  font-size: 1.9rem;
  cursor: pointer;
  width: 100%;

 
`;

const Alerta=styled.div `
  padding: .5rem 5rem ;
  display: block;
  text-align: center;
  border-radius: 2rem;
  margin-top: 2rem;
  background-color: var(--rojo);

  /* ${({ tipo }) => {
    switch (tipo) {
      case 'error':
        return `
          background-color: var(--rojo);
        `;
      case 'exito':
        return `
          background-color: var(--verde);
        `;
      default:
        return '';
    }
  }
  } */
`

const Icono=styled(GrSend) `
  margin-left:5px ;
  margin-bottom: -3px;
`


export default function Contactame() {
  const [state, handleSubmit] = useForm('xjvdzlnz');
  const [mensaje, setMensaje] = useState('');
  // manejar la alerta
  const [alerta, setAlerta] = useState(false);
  const formRef = useRef(null);
  

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;


  /// hir¿story
  const navigate=useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const {nombre, asunto, email, telefono, mensaje }=event.target;
    const envio={
      nombre: nombre.value,
      asunto: asunto.value,
      email: email.value,
      telefono: telefono.value,
      mensaje: mensaje.value,
    }

  
    if (Object.values(envio).some(valor => valor.trim() === '')) {
      setAlerta(true);
      setMensaje('Debes llenar todos los campos')
      return;
    }
    else {

      if(!emailRegex.test(envio.email)){
        setAlerta(true);
        setMensaje('formato del correo incorrecto')
      }
      else
      {
        handleSubmit(event).then(() => {
          // Acciones a realizar después de que el formulario se ha enviado correctamente
          setAlerta(true)
          formRef.current.reset()
          navigate('/')
          
        });
      }
      
    }

  

   

   

  };

  return (
    <>
      <Title >Contáctame</Title>
      
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        <p>Llena todos los campos y envialo</p>
        <Fieldset>
          <Campo>
            <Label htmlFor="nombre">Nombre:</Label>
            <Input type="text" id="nombre" nombre="nombre"
            placeholder="Alejandro, josue, maria, etc" />
            </Campo>
          
          <Campo>
            <Label htmlFor="asunto">Asunto:</Label>
            <Input type="text" id="asunto" name="asunto" placeholder="pagina web, servicios, etc" />
            </Campo>
          
          <Campo>
            <Label htmlFor="email" >Correo electrónico:</Label>
            <Input placeholder="correo@corrreo.com" type="email" id="email" name="email"  />
            
          </Campo>
          
          <Campo>
            <Label htmlFor="telefono">Teléfono:</Label>
            <Input 
              type="tel" 
              id="telefono" 
              name="telefono"
              placeholder="3133444345"  />
            </Campo>
          
          <Campo>
            <Label htmlFor="mensaje">Mensaje:</Label>
            <TextArea 
              id="mensaje" 
              name="mensaje"  
              rows={7} placeholder="Te contacto para..."/>
           </Campo>

           <Button type="submit" >
             Enviar
             <Icono/>
          </Button>
          
          
        </Fieldset>
        
        {alerta && 
          <Alerta >
           {mensaje}
          </Alerta>  
        }
      </Form>
    </>
  );
}
