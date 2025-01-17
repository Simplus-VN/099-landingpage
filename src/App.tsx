import "./App.scss";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import BannerComponent from "./pages/BannerComponent";
import PartnershipComponent from "./pages/PartnershipComponent";
import SimListComponent from "./pages/SimList/SimListComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
      <BannerComponent />
      <div className="container mx-auto">
        <SimListComponent />
        <PartnershipComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
