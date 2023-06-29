import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import InstagramComp from "./Component/InstagramComp";
import { Newsletter } from "./Component/Newsletter";
import BecomeSeller from "./Component/BecomeSeller";
import WhyOnlyWe from "./Component/WhyOnlyWe"
import MostTrending from "./Component/MostTrending";
import TodaysDeal from "./Component/TodaysDeal";
import TrendNearrYou from "./Component/TrendNearrYou";
import Categories from "./Component/Categories";
import HeroSection from "./Component/HeroSection";

function App() {
  return (
    <main >
     <Header/>
     <HeroSection/>
     <Categories/>
     <TrendNearrYou/>
     <TodaysDeal/>
     <MostTrending/>
     <WhyOnlyWe/>
     <BecomeSeller/>
     <InstagramComp/>
     <Newsletter/>
     <Footer/>
     
    </main>
  );
}

export default App;
