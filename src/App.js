import MainStyle from "./components/MainStyle/MainStyle";
import MainLayout from "./layouts/MainLayout/MainLayout";

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
