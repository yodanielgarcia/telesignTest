import "./styles.css";
import HeaderComponent from "./componentes/HeaderComponent";
import Dashboard from "./componentes/Dashboard";

const App = () => {

  return (
    <div style={{ background: "#292929" }}>
      <HeaderComponent/>
      <h2 style={{ background: "#2D2E2E",color: "white", textAlign:"center", fontSize:"24px", fontFamily:"verdana"}}>latest releases</h2>
      <Dashboard/>
    </div>
  );
};

export default App;
