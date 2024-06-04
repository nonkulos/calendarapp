async function fetchCountries() {
  const response = await fetch('https://date.nager.at/api/v3/AvailableCountries');

  if(!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const countries = await response.json();
  return countries;
}

export default fetchCountries;