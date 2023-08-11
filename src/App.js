import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import InstagramComp from "./Component/InstagramComp";
import { Newsletter } from "./Component/Newsletter";
import BecomeSeller from "./Component/BecomeSeller";
import WhyOnlyWe from "./Component/WhyOnlyWe";
import MostTrending from "./Component/MostTrending";
import TodaysDeal from "./Component/TodaysDeal";
import TrendNearrYou from "./Component/TrendNearrYou";
import Categories from "./Component/Categories";
import HeroSection from "./Component/HeroSection";
import SignupForm from "./Component/SignupForm";
import LoginForm from "./Component/LoginForm";
import DummyHeaderForSignupForm from "./Component/dummyHeaderForSignupForm";
import SignupForm1 from "./Component/SignupForm1";
import HeaderForSignUpPage from "./Component/HeaderForSignUpPage";
import SetUpYourStyle from "./Component/SetUpYourStyle";
import HeaderAfterLogin from "./Component/HeaderAfterLogin";
import BodyTermandCondtions from "./Component/BodyTermandCondtions";
import AboutUsWithLogin from "./Component/AboutUsWithLogin";

function App() {
  return (
    <main>
      <HeaderAfterLogin />
      <AboutUsWithLogin />
      {/* <BodyTermandCondtions /> */}
      {/* <Header />


      <DummyHeaderForSignupForm />
      <SignupForm1 />
      <HeaderForSignUpPage />
      <LoginForm />

      <SignupForm />
      <SetUpYourStyle />
      <HeroSection />
      <Categories />
      <TrendNearrYou />
      <TodaysDeal />
      <MostTrending />
      <WhyOnlyWe />
      <BecomeSeller />
      <InstagramComp />
      <Newsletter /> */}

      

      {/* <LoginForm/> */}
      {/* <SetUpYourStyle/> */}
      <Footer />

    </main>
  );
}

export default App;
