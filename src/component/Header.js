import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
function Header(){
    return <div class="container-fluid header p-0 mb-5" style={{backgroundColor:'#986931'}}>
    <div class="row g-0 align-items-center flex-column-reverse flex-lg-row">
        <div class="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
            <i><b><p class=" heading1 text-white mb-5" style={{fontSize:'25px'}}>Remedial Centre Hospital was established in 1984 in North Nazimabad by two visionary, entrepreneurial and innovative medics for providing equitable health care with compassion, respect and dignity to a highly diverse population of over 3 million.</p></b></i>
            <div class="row g-4">
                <div class="col-sm-4">
                    <div class="border-start border-light ps-4">
                        <h2 class="text-white mb-1" data-toggle="counter-up">35+</h2>
                        <p class="text-light mb-0">Expert Consultants</p>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="border-start border-light ps-4">
                        <h2 class="text-white mb-1" data-toggle="counter-up">50+</h2>
                        <p class="text-light mb-0">Medical Staff</p>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="border-start border-light ps-4">
                        <h2 class="text-white mb-1" data-toggle="counter-up">30k+</h2>
                        <p class="text-light mb-0">Total Patients</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="header-carousel">
            <Carousel> 
        <Carousel.Item interval={1500}> 
          <img 
            className="d-block w-100"
src="cme.gif"
            alt="Image One"
          /> 
          <Carousel.Caption> 
            <i><h3 style={{color:'white'}}>CME(Continued Medical Education)</h3></i>
            <i><p style={{color:'white'}}>Workshop for CME , two CME has being held till now for more info see CME page</p></i>
          </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item interval={500}> 
          <img 
            className="d-block w-100"
            src="mbti1.gif"
            alt="Image Two"
          /> 
          <Carousel.Caption> 
            <i><h3 style={{color:'white'}}>Picture of workshop(MBTI)</h3></i>
            <i><p style={{color:'white'}}>for more detail see training and development page click on workshop link and see our latest workshop</p></i>
          </Carousel.Caption> 
        </Carousel.Item> 
      </Carousel> 
            </div>
        </div>
    </div>
</div>
}
export default Header;