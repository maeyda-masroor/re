import YouTube, { YouTubeProps } from 'react-youtube';
import { useState } from 'react';
function AboutUs(){
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
      const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '540',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };    
    return <div>
         <div class="container py-2">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6">
                    <div class="d-flex flex-column py-1 px-1">
                    <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} />;
                     </div>
                </div>
                <div class="col-lg-6" data-wow-delay="0.5s">
                    <u style = {{color:'#986931'}}><i><h1 style={{fontSize:'45px'}}>About Us</h1></i></u>
                    <i><p class = "heading" style={{color:'#986931'}}>
Remedial Centre Hospital was established in 1984 in North Karachi by two visionary, entrepreneurial and innovative medics for providing equitable health care with compassion, respect and dignity to a highly diverse population of over 3 million at affordable cost.

It is a 55 beds hospital situated on Main Boulevard near five star Roundabout, North Nazimabad. It provides all kinds of day and night health care services to the patients through its 10 beds Intensive Care Unit which is equipped with modern cardiac monitors, 3 ventilators and other necessary equipments.
On the 1st Floor 11 beds High Dependency Unit (HDU) with isolation ward for burn patients to provide best of care to critically ill patients.
         </p></i>
      {isShowMore && (
        <i><p style={{color:'#986931'}}>
         It also has PICU unit with 4 beds and NICU with 4 incubators.
The 2nd floor comprises of General Male and Female Wards, Private and Semi-Private Rooms, Air-Conditioned Rooms. The Operation Theatre is situated on the first floor, & comprises of 2 units. They are fully equipped & all major and minor surgeries are performed by highly qualified surgeons.
The Laboratory provides 24Hrs' services, performing all routine tests, for Out Patients as well as Inpatients.

The hospital has well qualified paramedical staff and doctors, it is fully furnished with all kinds of latest Medical/Surgical equipments and facilities.
          </p></i>
      )}

      <button onClick={toggleReadMoreLess}>
        {isShowMore ? "Read Less" : "Read More"}
      </button>

                 <i><p class="mb-1"><i class="far fa-check-circle color me-1"></i>Quality health care</p></i>
                    <i><p clas="mb-1"><i class="far fa-check-circle color me-1"></i>Only Qualified Doctors</p></i>
                </div>
            </div>
        </div>
    </div>
   
    </div>
}
export default AboutUs;