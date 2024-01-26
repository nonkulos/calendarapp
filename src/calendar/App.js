import './App.css';
import calcNum from "./getdates.js"

const Boxes = ({number}) => {
  const rows = calcNum(number)
  const days = rows.map(x => <td>{x}</td>);
  return <tr>{days}</tr>;
}

const App = () => {
  return (
    <table>
        <Boxes number = {1} />
        <Boxes number = {8} />
        <Boxes number = {15} />
        <Boxes number = {22} />
        <Boxes number = {29} />
    </table>
  );
}

export default App;
