import './App.css';

const Boxes = ({number}) => {
  const rows = calcNum(number)
  const days = rows.map(x => <td>{x}</td>);
  return <tr>{days}</tr>;
}

function calcNum(number) {
  const rows = [];
  for(let i = 0; i < 7; i++) {
    rows.push(number + i)
  }
  return rows
}

function App() {
  return (
    <table>
      <tr>
        <Boxes number = {1} />
      </tr>
      <tr>
        <Boxes number = {8} />
      </tr>
    </table>
  );
}

export default App;
