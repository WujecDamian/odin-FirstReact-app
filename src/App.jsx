import "./App.css";
import "./Style.css";
import FunctionalInput from "./components/Class-based-components/FunctionalInput.jsx";
import ClassInput from "./components/Class-based-components/ClassInput.jsx";
function App() {
  return (
    <>
      <FunctionalInput name="Functional component!" />
      <div className="divider" />
      <ClassInput name="Class based component!" />
    </>
  );
}

export default App;
