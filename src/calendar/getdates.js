const calcNum = (number) => {
  let day = new Date();
  day.setDate(number)
  day.setDate(day.getDate() - day.getDay() - 1);
  let weekArr = []
  for(let i = 0; i < 7; i++){
    day.setDate(day.getDate() + 1)
    weekArr.push(day.getDate())
  }
  return weekArr;
}

export default calcNum;