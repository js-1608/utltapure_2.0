import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import Banner from "./components/Banner";
import banner from "./home_banner.png";
import ImageText from "./components/ImageText";

function App() {
  return (
    <div className="App">
      <Banner
        src={banner}
        title="First Banner Title"
        text="This is the first banner text."
        updated="UPGRADE NOW"
        buttonUrl="https://example.com"
        buttonText="Explore Our Products"
      />

      <div>
        <div className="container-fluid">
          <h4 className="text-end heading-end p-5">
            Enjoy all these benefits with our air <br /> purification technology
          </h4>
        </div>
        <ImageText
          imageUrl="https://via.placeholder.com/300x200"
          heading="First Heading"
          text="Estimates of the number of human languages  languages are spoken, signed, or both; however, any language can be encoded into secondary media using auditory, visual, or tactile stimuli – for example, writing, whistling, signing, or braille. In other words, human language is modality-independent, but written or signed language is the way to inscribe or encode the natural human speech or gestures."
        />
        <ImageText
          imageUrl="https://via.placeholder.com/300x200"
          heading="Second Heading"
          text="Estimates of the number of human languages   established between languages and dialects.[2] Natural languages are spoken, signed, or both; however, any language can be encoded into secondary media using auditory, visual, or tactile stimuli – for example, writing, whistling, signing, or braille. In other words, human language is modality-independent, but written or signed language is the way to inscribe or encode the natural human speech or gestures."
        />
        <ImageText
          imageUrl="https://via.placeholder.com/300x200"
          heading="Third Heading"
          text="Estimates of the number of human languages and dialects.[2] Natural languages are spoken, signed, or both; however, any language can be encoded into secondary media using auditory, visual, or tactile stimuli – for example, writing, whistling, signing, or braille. In other words, human language is modality-independent, but written or signed language is the way to inscribe or encode the natural human speech or gestures.."
        />
      </div>
    </div>
  );
}

export default App;
