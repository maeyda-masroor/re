import ReactWhatsapp from "react-whatsapp";
function TopNavbar(){
    return <div><div class="container-fluid bg-light p-0 wow fadeIn" data-wow-delay="0.1s">
    <div class="row gx-0 d-none d-lg-flex ">
        <div class="col-lg-7 px-3 text-start">
            <div class="d-inline-flex align-items-center py-1 me-4 h-28">
                <small class="fa fa-map-marker-alt color me-2"></small>
                <small> BLOCK-I, NORTH NAZIMABAD, KARACHI, PAKISTAN-74700.</small>
            </div>
            <div class="h-28 d-inline-flex align-items-center py-3">
                <small class="far fa-clock color me-2"></small>
                <small>Mon - Sun : 09.00 AM - 09.00 PM</small>
            </div>
        </div>
        <div class="col-lg-5 px-5 text-end">
            <div class="h-28 d-inline-flex align-items-center py-3 me-4">
                <small class="fa fa-phone-alt color me-2"></small>
                <ReactWhatsapp number = "+92 03415444406">  
                <small>03415444406</small>
                </ReactWhatsapp>
            </div>
            <div class="h-28 d-inline-flex align-items-center py-3 me-4">
                <small class="fa fa-envelope color me-2"></small>
                <small>info@remedialcentre.com</small>
            </div>
        </div>
    </div>
</div>
</div>
}
export default TopNavbar;