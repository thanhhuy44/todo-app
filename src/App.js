import MainStyle from "./components/MainStyle/MainStyle";
import MainLayout from "./layouts/MainLayout/MainLayout";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MainStyle>
        <MainLayout />
      </MainStyle>
    </div>
  );
}

export default App;
