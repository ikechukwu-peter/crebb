import React from 'react'

function Navbar() {
    return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid justify-content-between">
    <a class="navbar-brand" href="#" d>Crebb</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Create a Session</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">View Session</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Signup</a>
        </li>
        
      </ul>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link "  href="#">Contact Us</a>
        </li>     
        
      </ul>
    </div>
    </div>

  </div>
</nav>
   
    )
}

export default Navbar
