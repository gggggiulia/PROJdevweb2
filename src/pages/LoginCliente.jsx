import React from 'react';
import { Link } from 'react-router-dom';

function LoginCliente() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <div className="breadcrumb">
        <Link to="/">Início</Link>
        <span> › </span>
        <span>Login Cliente</span>
      </div>
      
      <h2 style={{ marginTop: '20px' }}>Login do Cliente</h2>
      <p>Esta página estará disponível em breve para os nossos clientes.</p>
    </div>
  );
}

export default LoginCliente;