import { Link } from 'react-router-dom';
import './Navbar.scss'

function Navbar() {
  return (
    <div className='container'>
        <ul className='list'>
            <li className='item'>
                <Link to='/' className='link'>
                    <span className='label'>
                        Home
                    </span>
                </Link>
            </li>
            <li className='item'>
                <Link to='/about' className='link'>
                    <span className='label'>
                        About
                    </span>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar