import OurManagementTeam from '../component/OurManagementTeam';
import WeAreHiring from '../component/WeAreHiring';
import PanelList from '../component/PanelList';
import AboutUs from '../component/AboutUs';
import Features from '../component/Features';
import Header from '../component/Header';
import Appointment from '../component/MakeAnAppointment';
import CEOmessage from '../component/CEOMessage';
import { Helmet } from 'react-helmet';
function Home(){
    return <div>
        <Header/>
        <CEOmessage/>
        <AboutUs/>
        <Features/>
        <Appointment/>
        <WeAreHiring/>
        <OurManagementTeam/>
        <PanelList/>
       </div>
}
export default Home;