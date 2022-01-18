import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { Navbar, Nav, Container, NavDropdown, Badge} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ShoppingCartOutlined } from '@ant-design/icons';


const Navbarr = () => {
  return (
          <Navbar bg="light" expand="lg" sticky="top" className={styles.navbar}>
            <Container>
              <Navbar.Brand href="#home">HC pizza</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                  <Nav.Link className={styles.nav_mr} href="#home">Homepage</Nav.Link>
                  <Nav.Link className={styles.nav_mr} href="#link">Products</Nav.Link>
                  <Nav.Link className={styles.nav_mr}  href="#link">Menu</Nav.Link>
                  <Nav.Link className={styles.nav_mr}  href="#link">Events</Nav.Link>
                  <Nav.Link className={styles.nav_mr}  href="#link">Blog</Nav.Link>
                  <Nav.Link className={styles.nav_mr} href="#link">Contact</Nav.Link>
                  <Nav.Link className={styles.nav_mr} href="#cart">
                        <ShoppingCartOutlined
                          style={{
                            fontSize: "25px",
                            color: "#d1411e"
                          }}
                        />
                        <span className={styles.nav_badge}>
                          <Badge bg="danger">3</Badge>
                        </span>
                  </Nav.Link>

                  
                  {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    // <div className={styles.container}>
    //   <div className={styles.item}>
    //     <div className={styles.callButton}>
    //       <Image src="/img/telephone.png" alt="" width="32" height="32" />
    //     </div>
    //     <div className={styles.texts}>
    //       <div className={styles.text}>ORDER NOW!</div>
    //       <div className={styles.text}>012 345 678</div>
    //     </div>
    //   </div>
    //   <div className={styles.item}>
    //     <ul className={styles.list}>
    //       <li className={styles.listItem}>Homepage</li>
    //       <li className={styles.listItem}>Products</li>
    //       <li className={styles.listItem}>Menu</li>
    //       <Image src="/img/logo.png" alt="" width="160px" height="69px" />
    //       <li className={styles.listItem}>Events</li>
    //       <li className={styles.listItem}>Blog</li>
    //       <li className={styles.listItem}>Contact</li>
    //     </ul>
    //   </div>
    //   <div className={styles.item}>
    //     <div className={styles.cart}>
    //       <Image src="/img/cart.png" alt="" width="30px" height="30px" />
    //       <div className={styles.counter}>2</div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbarr;
