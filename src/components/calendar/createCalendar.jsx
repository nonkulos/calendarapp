import showEventViewer from "../../style-stuff/logic/toggleEventViewer";

const calcNum = (year, month) => {
  let day = new Date(year, month);
  day.setDate(1);
  day.setDate(day.getDate() - day.getDay() - 1);

  const toggleEventViewer = (event) => {
    const clickedID = event.target.id;
    showEventViewer(day, clickedID);
  }

  const weeks = Array.from({ length: 6 }, () =>
    Array.from({ length: 7 }, () => {
      day.setDate(day.getDate() + 1);
      return day.getDate();
    })
  )
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <table>
      <tr>
        {
          weekdays.map((week, i) =>
            <td key={i} className="tableHeader">{week}</td>
          )
        }
      </tr>
      {
        weeks.map((week, i) => (
          <tr key={i}>
            {
              week.map((day, j) => (
                // If the day is not in the current month, color it grey
                i == 0 && day > 7 || i >= 4 && day < 23 ?
                  <td key={j} className="calendarNum grey" onClick={toggleEventViewer} id = {((5-i)*7)+(7-j)-1}>
                    {day}
                    <div className="dotTemplate dot" />
                    <div className="dotTemplate dot" />
                  </td>
                  :
                  <td key={j} className="calendarNum" onClick={toggleEventViewer} id = {((5-i)*7)+(7-j)-1}>
                    {day}
                    <div className="dotTemplate dot" />
                    <div className="dotTemplate dot" />
                  </td>
                )
              )
            }
          </tr>
        ))
      }
    </table>);
}

export default calcNum;