import React from 'react'

function Navbar() {
  return (
    <div class="menu">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fw-bold">
            <a href="" class="navbar-brand ms-5">Painel</a>
            <div class="collapse navbar-collapse justify-content-center" id="menu">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="" class="nav-link">Teste</a>
                    </li>
                    <li class="nav-item">
                        <a href="./sobrenos" class="nav-link">sobre nos</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="" class="nav-link dropdown-toggle " data-bs-toggle="dropdown">Inicio</a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="" class="dropdown-item">Trabalhe Conosco</a>
                            </li>
                            <li>
                                <a href="" class="dropdown-item">Blog</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link">Contato</a>
                    </li>
                </ul>
            </div>
            <button class="navbar-toggler mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#menu" 
            aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </nav>
    </div>
  )
}

export default Navbar