import './App.css';
import calcNum from "./getdates.js"

const Calendar = () => {
  const rows = calcNum()
  return <table>{rows}</table>;
}

const App = () => {
  return (
    <table>
        <Calendar />
    </table>
  );
}

export default App;
