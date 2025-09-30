import './App.css';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import FeatureSection from './components/FeatureSection';
import NumberedList from './components/NumberedList';
import FeatureOverlay from './components/FeatureOverlay';
import KeyTopics from './components/KeyTopics';
import Footer from './components/Footer';


import { FaRegLightbulb } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";

// Import your images from the assets folder
import heroImage from './assets/hero-main.png';
import featureImage1 from './assets/feature-1.png';
import featureImage2 from './assets/feature-2.png';
import featureImage3 from './assets/feature-3.png';
import featureImage4 from './assets/feature-4-bg.png';

function App() {
  const feature1Extras = [
    { icon: <FaRegLightbulb />, text: "Sample text. Click to select the text box. Click again or double click to start editing the text." },
    { icon: <TfiAnnouncement />, text: "Sample text. Click to select the text box. Click again or double click to start editing the text." }
  ];

  return (
    <main>
      
      <Hero 
        image={heroImage} 
        title="VR headsets" 
        text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        credit="Image by Freepik"
      />
      <Benefits />
     
      <FeatureSection 
        image={featureImage1}
        title="Virtual Reality"
        subheading="TECHNOLOGY"
        text="There are only some symptoms such as dizziness, depression, and collapse that appear while the VR experience. The technology is still new and requires investigation and research."
        credit="Image from Freepik"
        imageSide="left"
        extras={feature1Extras}
      />
      <NumberedList />
      <FeatureSection 
        image={featureImage2}
        title="IS VR BAD FOR YOUR BRAIN?"
        text="There is no scientific evidence that Virtual Reality can provoke constant brain damage to adults and kids. There are only some symptoms such as dizziness, depression, and collapse that appear while the VR experience."
        secondaryText="Bibendum neque egestas congue quisque egestas diam in arcu. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Sit amet consectetur adipiscing elit."
        credit="Image from Freepik"
        buttonText="See more"
        iconHeader={<FaRegLightbulb />}
      />
      <FeatureOverlay 
        backgroundImage={featureImage4}
        title="The benefits of virtual reality"
        subheading="TECHNOLOGY"
        credit="Image from Freepik"
        buttonText="See more"
      />
      <KeyTopics />
      <Footer />
    </main>
  );
}

export default App;