// PART 1: SHOW A FORTUNE

function showFortune(evt) {

  $.get("/fortune", res => {
    $('#fortune-text').html(res);
  });
}

$('#get-fortune-button').on('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();
  const url = `/weather?zipcode=${$('#zipcode-field').val()}`;
  const formData = $('#zipcode-field').val();

  $.get(url, formData, res => {
  $('#weather-info').html(res.forecast);
  });
}

$('#weather-form').on('submit', showWeather);
