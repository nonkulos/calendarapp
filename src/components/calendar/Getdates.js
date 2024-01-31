const calcNum = (year, month, weeks, days) => {
  let day = new Date(year, month);
  day.setDate(1);
  day.setDate(day.getDate() - day.getDay() - 1);

  const weeks = Array.from({ length: weeks }, () => 
    Array.from({ length: days }, () => {
      day.setDate(day.getDate() + 1);
      return <td>{day.getDate()}</td>;
    })
  );

  return (
    <table>
      {weeks.map((week, i) => <tr key={i}>{week}</tr>)}
    </table>
  );
}

export default calcNum;