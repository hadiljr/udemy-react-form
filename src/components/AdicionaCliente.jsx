import React from 'react';
import { Formik } from 'formik';
import Campo from './Campo';

const AdicionaCliente = () => {
  return (
    <>
      <h1>Cadastro de Clientes</h1>
      <Formik 
        initialValues={{nome: '', email:'', nascimento:''}}
        validate={(values)=>{
          const errors = {};
          if(!values.nome) errors.nome = "O nome é obrigatório";
          if(!values.email){
            errors.email = "O e-mail é obrigatório";
          } 
          else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
            errors.email="O e-mail é inválido"
          }
          if(!values.nascimento) errors.nascimento = "A data de nascimento é obrigatória";
          
          return errors;
        }}
        onSubmit={(values)=> {alert(JSON.stringify(values))}}
      >
        {(props)=>(
        <form noValidate onSubmit={props.handleSubmit}>
            <Campo id="nome" name="nome" type="text" label="Nome" />
            <Campo id="email" name="email" type="email" label="E-mail"/>
            <Campo id="nascimento" name="nascimento" type="date" label="Data de Nascimento"/>
            <button type="submit">Adicionar</button>
        </form>
        )} 
      </Formik>
    </>
  );
};

export default AdicionaCliente;
