import React , {useState} from "react";
function CME(){
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
    return <div> <section class="py-5 py-xl-6"style={{backgroundColor:'#986931'}}>
  <div class="container overflow-hidden">
    <div class="row gy-5">
      <div class="col-12">
        <div class="row align-items-center gy-3 gy-md-0 gx-xl-5">
          <div class="col-xs-12 col-md-6">
            <div class="img-wrapper position-relative hcf-transform">
              <a href="#!">
                <span class="badge rounded-pill bg-black  text-white position-absolute top-10px start-10px m-1">CME</span>
                <img class="img-fluid rounded w-100 hcf-of-cover hcf-op-center hcf-ih-250 hcf-ih-md-400" loading="lazy" src="cme.gif" alt=""/>
              </a>
            </div>
          </div>
          <div class="col-xs-12 col-md-6">
            <div>
            <i><h2 class="h1 mb-3">Continued Medical Education  ( CME )</h2>
              <p style={{color:'white'}}>Remedial Centre Hospital is a pioneer in the field of Continued Medical Education (CME). It has been planning seminars and events for GPs in the North of Karachi since February 2008.
         </p></i>
      {isShowMore && (
        <i><p style={{color:'white'}}>
          Highly qualified doctors who are experts in their respective clinical specialties conduct these events. The aim of CME is to help GPs maintain competence and empower them with new skills, whilst informing them about developments in General Practice. The CME programme at Remedial Centre Hospital is an ongoing project which will be developed further with time.
        </p></i>
      )}

      <button onClick={toggleReadMoreLess}>
        {isShowMore ? "Read Less" : "Read More"}
      </button>
              </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>
<br/>
<section>
  <div class="container">
    <h3>
    CME: 21.03.09 Acid Related Disorders Presented by Dr.Asad Usman</h3>
    <p><i><u><b>Date: </b></u></i>21.03.09</p>
    <p><i><u><b>CME: </b></u></i>Acid Related Disorders</p>
    <p><i><u><b>Presented by: </b></u></i>Dr.Nusrat Husain , Dr.Asad Usman</p>
    <hr/>
    <h3>CME: Drug Choices In Pregnancy Presented by  Dr.Nusrat Husain</h3>
    <p><i><u><b>Date: </b></u></i>July 2010</p>
    <p><i><u><b>CME: </b></u></i>Drug Choices in Pregancy</p>
    <p><i><u><b>Presented by: </b></u></i>Dr.Nusrat Husain</p>
   <hr/>
  </div>
</section>
    </div>
}
export default CME;