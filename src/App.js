import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import InstagramComp from "./Component/InstagramComp";
import { Newsletter } from "./Component/Newsletter";
import BecomeSeller from "./Component/BecomeSeller";
import WhyOnlyWe from "./Component/WhyOnlyWe"

function App() {
  return (
    <main >
     <Header/>
     <WhyOnlyWe/>
     <BecomeSeller/>
     <InstagramComp/>
     <Newsletter/>
     <Footer/>
     
    </main>
  );
}

export default App;
