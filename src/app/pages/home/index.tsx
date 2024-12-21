import portfolio from "../../../assets/Portfolio.png";
import PersonalInfoCarousel from "./Carousel/Carousel";
import "./index.css";
import ScrollableDemo from "./TabView/TabView";
import ProfessionalExp from "./ProfessionalExp/ProfessionalExp";
import ContactForm from "./ContactForm/ContactForm";

const Home = () => {
  return (
    <>
      <div className='image-cont'>
        <img
          src={portfolio}
          alt='portfolio'
          width={"100%"}
          className='image-container'
        />
      </div>
      <PersonalInfoCarousel />
      <ScrollableDemo />
      <ProfessionalExp />
      <ContactForm />
    </>
  );
};

export default Home;
