import { Button, Container, Nav, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.png';
import './Header.css';
import { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
  const nav__links = [
    {
      path: '/home',
      display: 'Home',
    },
    {
      path: '/about',
      display: 'About',
    },
    {
      path: '/tours',
      display: 'Tours',
    },
  ];

  const headerRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };

  const stickyRef = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    stickyRef();

    return () => {
      window.removeEventListener('scroll', stickyRef);
    };
  }, []); // Corrected dependency array

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper wrapper">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="navigation">
              <ul className="menu items">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <Link to={item.path}>{item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__right items">
              <div className="nav-btns items">
                {user ? (
                  <>
                    <h5 className="mb-0">{user.username}</h5>
                    <Button className="btn btn-dark" onClick={logout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="btn secondary__btn">
                      <Nav.Link href="/login">Login</Nav.Link>
                    </Button>
                    <Button className="btn primary__btn">
                      <Nav.Link href="/register">Register</Nav.Link>
                    </Button>
                  </>
                )}
              </div>
              <span className="mobile_menu">
                <img src="images/menu-line.png" alt="" />
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
