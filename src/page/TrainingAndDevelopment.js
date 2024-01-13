import { Link } from "react-router-dom";

function TrainingAndDevelopment(){
    return <div class="container">
        <i><h1 style={{fontSize:'45px'}}>MANAGEMENT TRAINEE</h1></i>
        <i><p class="heading">Pakistan Institute of Learning and Living (PILL) in collaboration with Remedial Centre Hospital has developed Management Trainee Certificate Program for young, motivated and energetic persons. Under this program, trainee will be developed on firm grounds in Hospital Management through a structured program. Motivational lectures, counseling and career guidance will be a part of their training. Upon Successful completion of training, they will be awarded Certificate in Hospital Management. Trainee will be paid stipend.
        </p>
        <br/>
        <p class="heading">Those desirous of availing this unique opportunity should apply through HR.
        <br/> info@remedialcentre.com <br/>PHONE # +92 21 36633834-6 Ext: 121 / 130.
        We are an equal opportunity provider. <br/>Females are encouraged to apply.
        </p>
        <hr/>
        <h1 style={{fontSize:'45px'}}>
        ICU Technician Training program
        </h1>
        <p class="heading">
        Pakistan Institute of Learning and Living (PILL) in collaboration with Remedial Centre Hospital has developed ICU Technician Training Certificate Program for young motivated and energetic persons. Under this training program, trainee will be developed on firm grounds for Patient Care Management through a structured program of one year where they will go through extensive training by rotation in Ward, ICU, HDU, PICU, OT, X-Ray and Casualty. Upon successful completion of training, they will be awarded Aid Nurse Training Certificate. Stipend will be paid to the trainee.
         </p>

         <Link to = '/workshop'><p style={{float:'left'}}>Check OUR Worskhops</p></Link></i>
        </div>
}
export default TrainingAndDevelopment;