import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Banner from './components/Banner';
import banner from './home_banner.png'
import ImageText from './components/ImageText';

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
      <h4 className="text-end heading-end p-3">Enjoy all these benefits with our air <br/> purification technology</h4>
    </div>   
       <ImageText
        imageUrl="https://via.placeholder.com/300x200"
        heading="First Heading"
        text="This is the first text. This text is displayed next to the image."
      />
      <ImageText
        imageUrl="https://via.placeholder.com/300x200"
        heading="Second Heading"
        text="This is the second text. This text is also displayed next to the image."
      />
      <ImageText
        imageUrl="https://via.placeholder.com/300x200"
        heading="Third Heading"
        text="This is the third text. This component is used multiple times with different content."
      />
    </div>
    </div>
  );
}

export default App;