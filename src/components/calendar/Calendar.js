import './Calendar.css';
import calcNum from "./Getdates.js"

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
