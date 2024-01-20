import React , {useState} from "react";
function CEOmessage(){
    const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
    return <div>
        <div class="container-xxl py-4">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <b><h1 class="mb-1" style={{fontSize:'35px',color:'#986931',fontFamily:'Serif'}}>CEO Message</h1></b>
                        <p  style={{color:'#986931',fontFamily:'Serif'}}>We have a vision at Remedial Centre to provide medical services to the local community at reasonable costs delivered by competent doctors, caring staff, and modern equipment with prompt response to medical emergencies.

Most people tend to take their health for granted and don’t think about available health care resources until a medical emergency arises. Staff at Remedial Hospital spend a great deal of time and energy planning to meet community’s health care needs and want to offer the best medical and emergency care possible for your family and friends that may have need of our services.
         </p>
      {isShowMore && (
        <p style={{color:'#986931',fontFamily:'Serif'}}>
        We may be small, but we’re capable of handling just about any emergency situation that may arise. We’re proud of our record of superior quality, efficient service, friendly caring staff and reasonable cost of care. We are pleased that our patients continually praise the competence and caring attitudes of our nursing staff and physicians.

We are more than just a hospital, we organize health awareness programmes, school health checkups, occupational health, vaccination camps and free health and well being clinics. As a community hospital, we thrive on your feedback and support. We recognize our responsibility to provide you with the best health care available and ensure that our staff delivers on that promise every day. So when you or your family needs medical services, you can count on us! And we’re there when you need us.
        </p>
      )}

      <button onClick={toggleReadMoreLess}>
        {isShowMore ? "Read Less" : "Read More"}
      </button>
        
                        <div class="row g-4 align-items-center">
                            <div class="col-sm-6">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
                        <div class="row">
                            <div class="col-12 text-center">
                                <img class="img-fluid w-50 circle bg-light p-3" src="frc.gif" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

}
export default CEOmessage;