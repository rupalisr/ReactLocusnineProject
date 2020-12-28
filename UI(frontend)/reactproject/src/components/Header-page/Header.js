import './Header.css'
import { Navbar, Nav} from 'react-bootstrap';
import Logo from '../../assests/Logo.svg';
import ico_dashboard from '../../assests/ico_dashboard.svg';
import ico_sessionmanager from '../../assests/ico_sessionmanager.svg';
import ico_users from '../../assests/ico_users.svg';
import ico_notification from '../../assests/ico_notification.svg';
import ico_downarrow from '../../assests/ico_downarrow.svg';
import ico_user from '../../assests/ico_user.svg';

const Header = () => {
  return (
    <Navbar expand="lg" style={{background:"#0D0C06"}}>

      <Navbar.Brand href="#locusnine" className="leftNav">
         <img src={Logo} alt="logo" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

          <Nav.Link href="#dashboard" className="leftNav"><img src={ico_dashboard} alt="dashboard" />
            <span style={{marginLeft:10,color:"white"}}>Dashboard</span></Nav.Link>

          <Nav.Link href="#users" className="leftNav"><img src={ico_users} alt="users" />
            <span style={{marginLeft:10,color:"#F1D417"}}>Users</span></Nav.Link>

          <Nav.Link href="#sessionManager" className="leftNav"><img src={ico_sessionmanager} alt="sessionManager" />
            <span style={{marginLeft:10,color:"white"}}> Session Manager</span></Nav.Link>     
        </Nav>

         <img src={ico_notification} alt="notification" class="right_heading"/>
          <img src={ico_user} alt="notification" class="right_heading"></img>
          <span class="title">John Smith</span>
          <img src={ico_downarrow} alt="notification" class="right_heading"/>
      </Navbar.Collapse>
      
    </Navbar>
  );
}
export default Header;