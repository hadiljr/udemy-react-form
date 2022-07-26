import React from 'react';
import { Formik } from 'formik';

const AdicionaCliente = () => {
  return (
    <>
      <h1>Cadastro de Clientes</h1>
      <Formik 
        initialValues={{nome: '', email:'', nascimento:''}}
        onSubmit={(values)=> {alert(JSON.stringify(values))}}
      >
        {(props)=>(
        <form noValidate onSubmit={props.handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input id="nome" name="nome" type="text" onChange={props.handleChange} value={props.values.nome}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" onChange={props.handleChange} value={props.values.email}/>
          </div>
          <div className="form-group">
            <label htmlFor="date">Data de Nascimento</label>
            <input id="nascimento" name="nascimento" type="date" onChange={props.handleChange} value={props.values.nascimento}/>
          </div>
          <button type="submit">Adicionar</button>
        </form>
        )} 
      </Formik>
    </>
  );
};

export default AdicionaCliente;
