import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import InstagramComp from "./Component/InstagramComp";
import { Newsletter } from "./Component/Newsletter";
import BecomeSeller from "./Component/BecomeSeller";

function App() {
  return (
    <main >
     <Header/>
     <BecomeSeller/>
     <InstagramComp/>
     <Newsletter/>
     <Footer/>
     
    </main>
  );
}

export default App;
