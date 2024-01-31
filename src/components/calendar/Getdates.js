const calcNum = (year, month) => {
  const numweeks = 6
  const numdays = 7
  let day = new Date(year, month);
  day.setDate(1)
  day.setDate(day.getDate() - day.getDay() - 1);
  let week = [[], [], [], [], [], []];
 
  for(let i = 0; i < numweeks; i++){
    for(let j = 0; j < numdays; j++){
      day.setDate(day.getDate() + 1)
      week[i].push(<td>{day.getDate()}</td>)
    }
  }
  return (
    <table>
      <tr>{week[0]}</tr>
      <tr>{week[1]}</tr>
      <tr>{week[2]}</tr>
      <tr>{week[3]}</tr>
      <tr>{week[4]}</tr>
      <tr>{week[5]}</tr>
    </table>);
}

export default calcNum;