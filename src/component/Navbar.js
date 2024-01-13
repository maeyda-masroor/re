import { Navbar, Nav , NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Navbars(){
    return <div>
<Navbar collapseOnSelect expand="sm">
    <Navbar.Brand href="/" className="px-3 py-3" style={{color:'#986931'}}>
        <img src = "logo.png" width={40} height={40} alt='logo'/>&nbsp;&nbsp;Remedial Center Hospital</Navbar.Brand>
  <Navbar.Toggle aria-controls='navbarScroll' data-bs-target = "#navbarScroll"/>
  <Navbar.Collapse id = "navbarScroll">
<Nav>
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/consultant">Consultants</Nav.Link>
    <Nav.Link href='/facility'>Facilities</Nav.Link>
    <Nav.Link href="/newsandArticle">News and Events</Nav.Link>
    <Nav.Link href='/faq'>FAQ</Nav.Link>
    <Nav.Link href="/CME">CME</Nav.Link>
    <Nav.Link href='/Inquiry'>Inquiry</Nav.Link>
    <Nav.Link href="/contact">Contact</Nav.Link>
    <NavDropdown title="Departments" id="basic-nav-dropdown">
      <NavDropdown.Item href="/cardiologist">CARDIOLOGIST</NavDropdown.Item>
      <NavDropdown.Item href="/dermatoglist">DERMATOGLIST</NavDropdown.Item>
      <NavDropdown.Item href="/ENTspecialist">ENT SPECIALIST</NavDropdown.Item>
      <NavDropdown.Item href="/generalphysician">GENERAL PHYSICIAN</NavDropdown.Item>
      <NavDropdown.Item href="/gastrologist">GASTROENTROLOGIST</NavDropdown.Item>
      <NavDropdown.Item href="/gynacologist">GYNACOLOGIST& OBSTRETRICIAN</NavDropdown.Item>
      <NavDropdown.Item href="/generalsurgeon">GENERAL SURGEON</NavDropdown.Item>
      <NavDropdown.Item href="/nephrologist">NEPHROLOGIST</NavDropdown.Item>
      <NavDropdown.Item href='/neurologist'>Neurologist</NavDropdown.Item>
      <NavDropdown.Item href="/nerosurgeon">NEURO SURGEON/PHYSICIAN</NavDropdown.Item>
      <NavDropdown.Item href="/orthopedic">ORTHOPEDIC SURGEON</NavDropdown.Item>
      <NavDropdown.Item href="/plasticsurgeon">PLASTIC SURGEON</NavDropdown.Item>
      <NavDropdown.Item href="/pediatrican">PEDIATRICAN</NavDropdown.Item>
   
      <NavDropdown.Item href="/psychotherapist">PHYSIO THERAPIST</NavDropdown.Item>
      <NavDropdown.Item href="/physchiatrist">PHYCHIATRIST</NavDropdown.Item>
      <NavDropdown.Item href="/physcologist">PHYCOLOGIST</NavDropdown.Item>
      <NavDropdown.Item href="/rheumatologist">RHEUMATOLOGIST</NavDropdown.Item>
      <NavDropdown.Item href="/sonologist">SONOLOGIST</NavDropdown.Item>
      <NavDropdown.Item href="/speechtherapist">SPEECH THERAPIST</NavDropdown.Item>
      <NavDropdown.Item href="/urlogist">URLOGIST</NavDropdown.Item>
   
        </NavDropdown>
   </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
}
export default Navbars;