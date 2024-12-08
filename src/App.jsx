import "./App.css";
import moviesList from "./assets/data/movies_rnexgr (1).json";
import Header from "./assets/components/Header";
import Section from "./assets/components/Section";

function App() {
  return (
    <>
      <Header />
      <Section data={moviesList} />
    </>
  );
}

export default App;
