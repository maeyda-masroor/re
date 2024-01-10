import Dermatoglist from './page/Dermatologist';
import GeneralPhys from './page/generalPhysician';
import GYNACOLOGIST from './page/gynacologistAndObtretrican';
import PEDIATRICAN from './page/Pediatrician';
import URLOGIST from './page/Urologist';
import NEPHROLOGIST from './page/Nephrologist';
import Gastrologist from './page/Gastrologist';
import CARDIOLOGIST from './page/Cardologist';
import NeuroSurgeon from './page/neurosurgeon';
import Orthopedic from './page/orthopedicSurgeon';
import GeneralSurgeon from './page/generalSurgeon';
import Pediatrician from './page/Pediatrician';
import Phycologist from './page/physcologist';
import Physciatrist from './page/physhiatrist';
import PhysioTherapist from './page/physciotherapist';
import Rheumalogist from './page/RHEUMATOLOGIST';
import Neurologist from './page/Neurologist';
import Sonologist from './page/sonologist';
import SpeechTherapist from './page/speechTherapist';
import ENTSpecialist from './page/ENTSpecialist';
import Inquiry from './page/Inquiry';
import PlasticSurgeon from './page/plastixSurgeon';
import Workshop from './page/workshop';
import Consultant from './page/Consultant';
import Contact from './page/Contact';
import CheckYourEmail from './page/CheckYourEmail';
import HealthAdvice from './page/HealthAdvice';
import HealthClinic from './page/HealthClinic';
import HelpProfile from './component/HelpProfile';
import Help from './page/Help';
import CME from './page/CME';
import Facilities from './component/Facilities';
import { BrowserRouter ,Route , Routes } from 'react-router-dom';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from "./component/Loading";
import { useEffect, useState } from "react";
import Home from './page/Home';
import NoPage from './page/NoPage';
import {HelmetProvider} from 'react-helmet-async';
import FAQs from './page/FAQs';
import News from './component/NewsAndArticle';
import Gallery from './component/Gallery';
import TrainingAndDevelopment from './page/TrainingAndDevelopment';
import MainNavbar from './component/MainNavbar';
import BecomeAnRCmember from './page/BecomeAnRCmember';
import Pharmacists from './page/Pharmacists';
import NewsAndArticle from './component/NewsAndArticle';
export default function App() {
  const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 3300)
    }, [])
    if (loading) {
        return <Loading/>
    }
  return (
    <div className="App">
      <HelmetProvider>
      <BrowserRouter>
          <MainNavbar/>
          <Routes>
          <Route path = '/' element={<Home/>}/>
          <Route path='*' element={<NoPage/>}/>
          <Route path='/faq' element={<FAQs/>}/>
          <Route path = '/helpProfile' element={<HelpProfile/>}/>
          <Route path='/facilities' element={<Facilities/>}/>
          <Route path='/CME' element={<CME/>}/> 
          <Route path='/newsandarticle' element={<News/>}/>
          <Route path='/help' element={<Help/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/trainingAndDevelopment' element={<TrainingAndDevelopment/>}/>
          <Route path='/becomeAnRCmember' element={<BecomeAnRCmember/>}/>
          <Route path='/healthclinic' element={<HealthClinic/>}/>
          <Route path='/healthAdvice' element={<HealthAdvice/>}/>
          <Route path = '/pharmacist' element={<Pharmacists/>}/>
          <Route path = "/checkyouremail" element={<CheckYourEmail/>}/>
          <Route path='/workshop' element={<Workshop/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/inquiry' element={<Inquiry/>}/>
          <Route path = '/facility' element={<Facilities/>}/>
          <Route path = '/newandaritlce' element={<NewsAndArticle/>}/>
          <Route path = '/consultant' element={<Consultant/>}/>
          <Route path="/gastrologist" element={<Gastrologist/>}/>
          <Route path="/pediatrican" element={<PEDIATRICAN/>}/>
          <Route path="/cardiologist"element={<CARDIOLOGIST/>}/>
          <Route path="/urlogist" element = {<URLOGIST/>}/>
          <Route path="/nephrologist"element={<NEPHROLOGIST/>}/>
          <Route path='/dermatoglist' element={<Dermatoglist/>}/>
          <Route path = '/neurologist' element={<Neurologist/>}/>
          <Route path = '/ENTSpecialist' element={<ENTSpecialist/>}/>
          <Route path='/sonologist' element={<Sonologist/>}/>
          <Route path='/speechtherapist' element={<SpeechTherapist/>}/>
          <Route path='/nerosurgeon' element={<NeuroSurgeon/>}/>
          <Route path='/orthopedic' element={<Orthopedic/>}/>
          <Route path='/rheumatologist' element={<Rheumalogist/>}/>
          <Route path='/plasticsurgeon' element={<PlasticSurgeon/>}/>
          <Route path = '/sonolgist' element={<Sonologist/>}/>
          <Route path='/generalsurgeon' element={<GeneralSurgeon/>}/>
          <Route path='/physchiatrist' element={<Physciatrist/>}/>
          <Route path='/pediatrician' element={<Pediatrician/>}/>
          <Route path='/psychotherapist' element={<PhysioTherapist/>}/>
          <Route path='/physcologist' element={<Phycologist/>}/>
          <Route path="/gynacologist" element={<GYNACOLOGIST/>}/>
          <Route path='/generalphysician' element={<GeneralPhys/>}/>
          </Routes>
          <Footer/>
          </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}