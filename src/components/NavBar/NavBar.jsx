import logo from './assets/Autosol_Positivo.jpg'
import CartWidget from "../CartWidget/CartWidget"


export default function NavBar() {
  return (
    <>
    <nav className="navbar">
    <div className= "logo">
            <img src={logo} alt="cart"></img>
    </div>
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Modelos</a></li>
        <li><a href="#">Autoahorro</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Posventa</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
    </>
  )
}