import {Link} from 'react-router-dom';
function Pharmacists(){
  return  <div class="container">
        <h1 style={{fontSize:'25px'}}>Pharmacist</h1>
        <center><img src = "pharmacy.gif"/></center>
        <p>
        Remedial Centre pharmacy has extensive experience in health care sector and clinical care.
<ul>
<li> Pharmacy deals in dispensing medicines for both inpatient & outpatient.</li>

<li> Services round the clock.</li>

<li>One of the big pharmacies of the area.</li>

<li>Well educated & trained staff.</li>

<li> Fully computerized pharmacy.</li>

<li> All medicines purchase from companies.</li>

<li> Full range of medicine available.</li>
    </ul>
    <br/>
    Our E-Pharmacy website is coming soon!
    <br/>
    <p>Please Check Out Our e-pharmacy(husain remedies)</p>
    <Link to = "https://husain-six.vercel.app/">E-Phamarcy</Link>
    </p>
    </div>
}
export default Pharmacists;