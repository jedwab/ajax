var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);
$('#country-name').keypress(function(e) {
	if(e.which == 13) {
		searchCountries();
	}
});


function searchCountries() {
 	var countryName = $('#country-name').val();

$.ajax({
  		url: url + countryName,
  		method: 'GET',
		success: showCountriesList,
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			notFound();
		}
		  
	  });
	  function notFound () {
		  alert("Country not found, try again");
	  }
}

function showCountriesList(resp) {
	countriesList.empty();
	$('#country-name').val('');
	resp.forEach(function(item) {
		countriesList.append(
			`<div class="wrapper">
				<div class="header">
					<h3>${item.name}</h3>
				</div>
				<div>
					<h4>Additional Information</h4>
					<div class="row">
						<div class="col-sm-6">Capital:</div>
						<div class="col-sm-6">${item.capital}</div>
					</div>
					<div class="row">
						<div class="col-sm-6">Native Name:</div>
						<div class="col-sm-6">${item.nativeName}</div>
					</div>
					<div class="row">
						<div class="col-sm-6">Population:</div>
						<div class="col-sm-6">${item.population + " people"}</div>
					</div>
					<div class="row">
						<div class="col-sm-6">Region:</div>
						<div class="col-sm-6">${item.region},  ${item.subregion}</div>
					</div>
					<div class="row">
						<div class="col-sm-6">Area:</div>
						<div class="col-sm-6">${item.area + " km"}</div>
					</div>
					<div class="row">
						<div class="col-sm-6">Currency:</div>
						<div class="col-sm-6">${item.currencies}</div>
					</div>
				</div>
			</div>`
		);
		});
}





