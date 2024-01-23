import './App.css';

const Boxes = ({number}) => {
  const rows = calcNum(number)
  const days = rows.map(x => <td>{x}</td>);
  return <tr>{days}</tr>;
}

function calcNum(number) {
  const rows = [];
  for(let i = 0; i < 7; i++) {
    if(number + i < 32){
      rows.push(number + i)
    } else {
      rows.push("")
    }
  }
  return rows
}

function App() {
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
