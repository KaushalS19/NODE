


//var countryData = document.getElementById("countryData");

var headers = new Headers();
headers.append("X-CSCAPI-KEY", "UXF2OHQ2WjBMT1Y5Q05MQzVhNE1sT3VJSk02Y3BaNzlRNHRVMHRjZA==");

var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

function getCountry() {


    fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
        .then(response => response.json())
        .then(result => {

            var cData = "";
            for (var i = 0; i < result.length; i++) {

                cData += "<option value=" + result[i].iso2 + ">" + result[i].name + "</option>"

            }

            // console.log(cData);
            countryData.innerHTML = cData;
        })
        .catch(error => console.log('error', error));

}

var countrycode;
function getState(val) {

    countrycode = val;
    fetch(`https://api.countrystatecity.in/v1/countries/${val}/states`, requestOptions)
        .then(response => response.json())
        .then(result => {

            var sData = "";
            for (var i = 0; i < result.length; i++) {

                sData += "<option value=" + result[i].iso2 + ">" + result[i].name + "</option>"

            }

            // console.log(cData);
            stateData.innerHTML = sData;


        })
        .catch(error => console.log('error', error));

}

function getCity(val) {

    fetch(`https://api.countrystatecity.in/v1/countries/${countrycode}/states/${val}/cities`, requestOptions)
        .then(response => response.json())
        .then(result => {

            var ctData = "";
            for (var i = 0; i < result.length; i++) {

                ctData += "<option value=" + result[i].name + ">" + result[i].name + "</option>"

            }

            // console.log(cData);
            cityData.innerHTML = ctData;


        })
        .catch(error => console.log('error', error));

}


function getWeatherData() {

    var city = document.getElementById("cityData").value;
    var state = document.getElementById("stateData").value;
    var country = document.getElementById("countryData").value;
    var location = city + "," + state + "," + country;

    fetch(`/getWdata?location=${location}`).then(data => {

    }).then(result => {

    }).catch(err => {

    })


}