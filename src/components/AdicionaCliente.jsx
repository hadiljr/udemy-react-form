import React from 'react';
import { Formik } from 'formik';
import Campo from './Campo';
import * as yup from 'yup';

const AdicionaCliente = () => {

  const esquema = yup.object({
    nome: yup.string()
          .required("O nome é obrigatório")
          .min(10,"O nome deve ter no mínimo 10 caracteres")
          .max(20,"O nome deve ter no máximo 20 caracteres"),
    email: yup.string()
          .required("A data de nascimento é obrigatória")
          .email("O e-mail é inválido"),
    nascimento: yup.date()
                .required("A data de nascimento é obrigatória")
                .max(new Date(),"Você não pode ter nascido no futuro")

  })


  return (
    <>
      <h1>Cadastro de Clientes</h1>
      <Formik 
        initialValues={{nome: '', email:'', nascimento:''}}
        validationSchema={esquema}
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
