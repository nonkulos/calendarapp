const hi = () => {
  alert("hi");
}

const calcNum = (year, month) => {
  let day = new Date(year, month);
  day.setDate(1)
  day.setDate(day.getDate() - day.getDay() - 1);

  const weeks = Array.from({ length: 6 }, () => 
      Array.from({ length: 7 }, () => {
        day.setDate(day.getDate() + 1);
        return day.getDate()
      })
  )
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <table>
      <tr>{weekdays.map((week, i) => <td key={i} className="tableHeader">{week}</td>)}</tr>
      {weeks.map((week, i) => (<tr key = {i}>{week.map((day, i) => <td key = {i} className = "calendarNum" onClick = {hi}>{day}</td>)}</tr>))}
    </table>);
}

export default calcNum;