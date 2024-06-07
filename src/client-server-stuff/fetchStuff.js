async function fetchCountries() {
  const response = await fetch('https://date.nager.at/api/v3/AvailableCountries');

  if(!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const countries = await response.json();
  return countries;
}

async function fetchHolidays(countryCode, year) {
  const response = await fetch(`https://date.nager.at/api/v3/NextPublicHolidays/${countryCode}`);

  if(!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const holidays = await response.json();
  console.log(holidays);
  return holidays;
}

export {fetchCountries, fetchHolidays};