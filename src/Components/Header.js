import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    
    <div className='home'>
      <p className='plogo'> Logo </p>
      <ul className='homeul'>
        <li>
            <NavLink className='hlink' to="/"><p>Home</p></NavLink>
        </li>
        <li>
            <NavLink className='hlink' to="/about"><p>About</p></NavLink></li>
        <li><NavLink className='hlink' to="/contact"><p>Contact</p></NavLink></li>
      </ul>
    </div>
    
  )
}

export default Header
