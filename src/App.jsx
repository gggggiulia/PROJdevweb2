import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Prestadores from './pages/Prestadores';
import Gerenciamento from './pages/Gerenciamento';
import LoginAdm from './pages/LoginAdm';
import LoginCliente from './pages/LoginCliente';

import dadosIniciais from './data/dados.json';
import './App.css';

function App() {
  const [dados, setDados] = useState({ servicos: [], prestadores: [], contratos: [], avaliacoes: [] });
  const [menuAberto, setMenuAberto] = useState(false);

  const ehAdmin = localStorage.getItem('usuarioRegra') === 'admin';

  useEffect(() => {
    setDados(dadosIniciais);
  }, []);

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('usuarioRegra');
    fecharMenu();
    window.location.href = '/'; 
  };

  return (
    <Router>
      <div className="app-container">

        <header className="cabecalho">
          <div className="cabecalho-interno">
            <Link to="/" className="logo-container" onClick={fecharMenu}>
              <img src="/imagens/logo.png" alt="Logo ProServiços" className="logo-imagem" />
              <h2 className="titulo-site">ProServiços</h2>
            </Link>

            <button
              className="botao-menu-mobile"
              type="button"
              onClick={() => setMenuAberto(!menuAberto)}
              aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            >
              {menuAberto ? '×' : '☰'}
            </button>

            <nav className={`menu-nav ${menuAberto ? 'menu-aberto' : ''}`}>
              <Link to="/" onClick={fecharMenu}>Início</Link>
              <Link to="/prestadores" onClick={fecharMenu}>Prestadores</Link>
              <Link to="/gerenciamento" onClick={fecharMenu}>Gerenciamento</Link>

              {ehAdmin && (
                <button 
                  onClick={handleLogout} 
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#dc3545',
                    cursor: 'pointer',
                    fontSize: 'inherit',
                    fontFamily: 'inherit',
                    padding: '0',
                    textAlign: 'left'
                  }}
                >
                  Sair
                </button>
              )}
            </nav>
          </div>
        </header>

        <main className="conteudo-principal">
          <Routes>
            <Route path="/" element={<Home servicos={dados.servicos} />} />
            <Route path="/prestadores" element={<Prestadores prestadores={dados.prestadores} servicos={dados.servicos} />} />
            <Route path="/gerenciamento" element={<Gerenciamento />} />
            <Route path="/login-adm" element={<LoginAdm />} />
            <Route path="/login-cliente" element={<LoginCliente />} />
          </Routes>
        </main>

        <footer className="rodape">
          <div className="rodape-conteudo">
            <div>
              <h2 className="rodape-logo">ProServiços</h2>
              <p>Contratação de serviços residenciais com catálogo, prestadores, contratos e avaliações em uma única plataforma.</p>
            </div>

            <div className="rodape-coluna">
              <h4>Navegação</h4>
              <Link to="/">Início</Link>
              <Link to="/prestadores">Prestadores</Link>
              <Link to="/gerenciamento">Gerenciamento</Link>
            </div>
          </div>

          <div className="rodape-base">
            <p>&copy; 2026 ProServiços. Todos os direitos reservados.</p>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;
