import { ConfigProvider, message, App as AntdApp } from "antd";
import "./App.scss";
import './assets/scss/style.scss';
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import BannerComponent from "./pages/BannerComponent";
import PartnershipComponent from "./pages/PartnershipComponent";
import SimListComponent from "./pages/SimList/SimListComponent";


type ThemeData = {
  borderRadius: number;
  colorPrimary: string;
  controlHeight: number;
  boxShadow: string;
  Button?: {
    colorPrimary: string;
    algorithm?: boolean;
  };
  Divider?: {
    fontSize: number;
  };
  Table?: {
    borderColor: string;
    headerBg: string;
  };
};

message.config({
  // top: 100,
  // duration: 2,
  maxCount: 1,
  // rtl: true,
  // prefixCls: 'my-message',
});

const antDefaultConfig: ThemeData = {
  borderRadius: 10,
  colorPrimary: "#ffc426",
  boxShadow: "0px 2px 6px 0px rgba(59, 59, 66, 0.36)",
  controlHeight: 35,
  Button: {
    colorPrimary: "#ffc426",
    algorithm: true,
  },
};

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: antDefaultConfig.colorPrimary,
          borderRadius: antDefaultConfig.borderRadius,
          controlHeight: antDefaultConfig.controlHeight,
        },
        components: {
          Button: {
            colorPrimary: antDefaultConfig.Button?.colorPrimary,
            algorithm: antDefaultConfig.Button?.algorithm,
          },
        },
      }}
    >
      <AntdApp>
        <HeaderComponent />
        <BannerComponent />
        <div className="container mx-auto px-4">
          <SimListComponent />
          <PartnershipComponent />
        </div>
        <FooterComponent />
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
