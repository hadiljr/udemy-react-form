import React from 'react';
import { Formik } from 'formik';

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
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input id="nome" name="nome" type="text" 
              className={props.errors.nome && props.touched.nome ? 'is-invalid':''} 
              onChange={props.handleChange} 
              value={props.values.nome} 
              onBlur={props.handleBlur}/>
            {props.errors.nome && props.touched.nome ? <div className='invalid-feedback'>{props.errors.nome}</div>:null}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" 
              className={props.errors.email && props.touched.email ? 'is-invalid':''} 
              onChange={props.handleChange} 
              value={props.values.email} 
              onBlur={props.handleBlur}/>
            {props.errors.email && props.touched.email ? <div className='invalid-feedback'>{props.errors.email}</div>:null}
          </div>
          <div className="form-group">
            <label htmlFor="date">Data de Nascimento</label>
            <input id="nascimento" name="nascimento" type="date" 
              className={props.errors.nascimento && props.touched.nascimento ? 'is-invalid':''} 
              onChange={props.handleChange} 
              value={props.values.nascimento} 
              onBlur={props.handleBlur}/>
            {props.errors.nascimento && props.touched.nascimento ? <div className='invalid-feedback'>{props.errors.nascimento}</div>:null}
          </div>
          <button type="submit">Adicionar</button>
        </form>
        )} 
      </Formik>
    </>
  );
};

export default AdicionaCliente;
