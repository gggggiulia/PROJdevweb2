import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginAdm() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Credenciais fictícias do Administrador para o seu teste front-end
    if (email === 'admin@sistema.com' && senha === 'admin123') {
      localStorage.setItem('usuarioRegra', 'admin');
      alert('Login realizado com sucesso como Administrador!');
      
      // Redireciona o ADM direto para a página de gerenciamento
      window.location.href = '/gerenciamento'; 
    } else {
      alert('E-mail ou senha incorretos! Apenas o Administrador tem acesso.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '60px auto', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: '#fff' }}>
      <div className="breadcrumb" style={{ marginBottom: '20px' }}>
        <Link to="/">Início</Link>
        <span> › </span>
        <span>Login</span>
      </div>

      <section className="titulo-padrao" style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h3>Acesso Administrativo</h3>
        <p>Insira suas credenciais para gerenciar o sistema.</p>
      </section>

      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label style={{ fontWeight: '600' }}>E-mail do ADM</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="admin@sistema.com"
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label style={{ fontWeight: '600' }}>Senha</label>
          <input 
            type="password" 
            value={senha} 
            onChange={(e) => setSenha(e.target.value)} 
            placeholder="••••••••"
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
        </div>

        <button 
          type="submit" 
          style={{ padding: '12px', backgroundColor: '#0b3d91', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}
        >
          Entrar no Painel
        </button>
      </form>

      <div style={{ textAlign: 'center', marginTop: '15px', color: '#777', fontSize: '14px' }}>
        <p>Dica de teste: use <strong>admin@sistema.com</strong> e senha <strong>admin123</strong></p>
      </div>
    </div>
  );
}

export default LoginAdm;