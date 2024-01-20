import { Navbar, Nav , NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbars(){
    return <div style={{fontFamily:'Serif'}}>
<Navbar collapseOnSelect expand="sm">
    <Navbar.Brand href="/" className="px-3 py-3 " style={{color:'#986931'}}>
        <img src = "logo.png" width={40} height={40} alt='logo'/><b><span style={{fontFamily:'Serif'}}>Remedial Center Hospital</span></b></Navbar.Brand>
  <Navbar.Toggle aria-controls='navbarScroll' data-bs-target = "#navbarScroll"/>
  <Navbar.Collapse id = "navbarScroll">
<Nav>
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/consultant">Consultants</Nav.Link>
    <Nav.Link href='/facility'>Facilities</Nav.Link>
    {/*<Nav.Link href="/newsandArticle">News and Events</Nav.Link>*/}
    <Nav.Link href='/CME'>CME</Nav.Link>
    <NavDropdown title="Departments" id="basic-nav-dropdown">
      <NavDropdown.Item href="/cardiologist">CARDIOLOGY DEPARTMENT</NavDropdown.Item>
      <NavDropdown.Item href="/dermatoglist">DERMATOLOGY DEPARTMENT</NavDropdown.Item>
      <NavDropdown.Item href="/ENTspecialist">ENT DEPARTMENT</NavDropdown.Item>
      <NavDropdown.Item href="/generalphysician">GENERAL PHYSICIAN DEPARTMENT</NavDropdown.Item>
      <NavDropdown.Item href="/gastrologist">GASTROENTROLOGY DEPARTMENT</NavDropdown.Item>
      <NavDropdown.Item href="/gynacologist">GYNACOLOGY& OBSTRETRICIAN DEPARTMENT</NavDropdown.Item>
      <NavDropdown.Item href="/generalsurgeon">GENERAL SURGEON DEPARTMENT</NavDropdown.Item>
      <NavDropdown.Item href="/nephrologist">NEPHROLOGY DEPARTMENT</NavDropdown.Item>
      <NavDropdown.Item href='/neurologist'>NEURLOGY DEPARTMENT</NavDropdown.Item>
      <NavDropdown.Item href="/nerosurgeon">NEURO SURGEON/PHYSICIAN DEPARTMENT</NavDropdown.Item>
      <NavDropdown.Item href="/orthopedic">ORTHOPEDIC SURGEON DEPARTMENT</NavDropdown.Item>
      <NavDropdown.Item href="/plasticsurgeon">PLASTIC SURGEON DEPARTMENT</NavDropdown.Item>
      <NavDropdown.Item href="/pediatrican">PEDIATRICAN DEPARTMENT</NavDropdown.Item>
   
      <NavDropdown.Item href="/psychotherapist">PHYSIO THERAPIST DEPARTMENT</NavDropdown.Item>
      <NavDropdown.Item href="/physchiatrist">PHYCHIATRY DEPARTMENT</NavDropdown.Item>
      <NavDropdown.Item href="/physcologist">PHYCOLOGY DEPARTMENT</NavDropdown.Item>
      <NavDropdown.Item href="/rheumatologist">RHEUMATOLOGY DEPARTMENT</NavDropdown.Item>
      <NavDropdown.Item href="/sonologist">SONOLOGY DEPARTMENT</NavDropdown.Item>
      <NavDropdown.Item href="/speechtherapist">SPEECH THERAPIST DEPARTMENT</NavDropdown.Item>
      <NavDropdown.Item href="/urlogist">URLOGY DEPARTMENT</NavDropdown.Item>
   
        </NavDropdown>
  
    <Nav.Link href="/faq">FAQ</Nav.Link>
    <Nav.Link href='/Inquiry'>Inquiry</Nav.Link>
    <Nav.Link href="/contact">Contact</Nav.Link>
     </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
}
export default Navbars;