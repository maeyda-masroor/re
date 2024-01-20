import {Link} from 'react-router-dom';
function Footer(){
    return <div>
         <div class="container-fluid text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s" style={{backgroundColor:'#986931'}}>
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-light mb-4">Address</h5>
                    <p class="mb-2" style={{color:'white'}}><i class="fa fa-map-marker-alt me-3"></i>D-9, BLOCK-I, NORTH NAZIMABAD, KARACHI, PAKISTAN-74700.</p>
                    <p class="mb-2" style={{color:'white'}}><i class="fa fa-phone-alt me-3"></i>+92 21-36633834 - 5</p>
                    <p class="mb-2" style={{color:'white'}}><i class="fa fa-envelope me-3"></i>info@remedialcentre.com</p>
                    <div class="d-flex pt-2">
                        <Link class="btn btn-outline-light btn-social rounded-circle" to=""><i class="fab fa-twitter" style={{color:'white'}}></i></Link>
                        <Link class="btn btn-outline-light btn-social rounded-circle" to=""><i class="fab fa-facebook-f" style={{color:'white'}}></i></Link>
                        <Link class="btn btn-outline-light btn-social rounded-circle" to=""><i class="fab fa-youtube" style={{color:'white'}}></i></Link>
                        <Link class="btn btn-outline-light btn-social rounded-circle" to=""><i class="fab fa-linkedin-in" style={{color:'white'}}></i></Link>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                        <h3 class="text-white mb-4">Photo Gallery</h3>
                        <div class="row g-2 pt-2">
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="cme.gif" alt=""/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="mbti3.gif" alt=""/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="mbti2.gif" alt=""/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="mbti4.gif" alt=""/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="mbti5.gif" alt=""/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="mbti1.gif" alt=""/>
                            </div>
                        </div>
                    </div>
                   
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-light mb-4">Quick Links</h5>
                    {/*<Link class="btn btn-link" to="/gallery" style={{fontFamily:'Serif'}}>Youtube Gallery</Link>*/}
                    <Link class="btn btn-link" to="/trainingAnddevelopment"style={{fontFamily:'Serif'}} >training and development</Link>
                    <Link class="btn btn-link" to="/healthAdvice"style={{fontFamily:'Serif'}}>health Advice</Link>
                    <Link class="btn btn-link" to="/healthClinic"style={{fontFamily:'Serif'}}>health CLinic</Link>
                    <Link class="btn btn-link" to="/becomeAnrcMember"style={{fontFamily:'Serif'}}>become an RC member</Link>
                    <Link class="btn btn-link" to = '/pharmacist'style={{fontFamily:'Serif'}}>Pharmacists</Link>
                    <Link class="btn btn-link" to = "/checkyouremail"style={{fontFamily:'Serif'}}>Check Your Email</Link>
                    <Link class="btn btn-link" to = "/help"style={{fontFamily:'Serif'}}>Help</Link>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-white mb-4">Newsletter</h5>
                    <p class='text-white'>Subscribe to Our Newsletter</p>
                    <div class="position-relative mx-auto" propsstyle="max-width: 400px;">
                        <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </div>

}
export default Footer; 
