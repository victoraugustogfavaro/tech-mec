import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ChatBot from "./components/ChatBot/ChatBot";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
        <ChatBot />
      </main>
      <Footer />
    </div>
  );
}

export default App;
