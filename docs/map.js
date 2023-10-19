var circle = document.getElementsByClassName("circle");
document.onmousemove = function (event) {
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";

    for (var i = 0; i < 2; i++) {
        circle[i].style.left = x;
        circle[i].style.top = y;
        circle[i].style.transform = "translate(-" + x + ",-" + y + ")";
    }
};
//only if style is future do this
var alertShown = false; 

function showAlert() {
    if (!alertShown) {
        if (confirm("CENSORSHIP ALERT! Do you REALLY want to see what's written here?")) {
            changeBackgroundColor();
        }
        alertShown = true; 
    }
}

function changeBackgroundColor() {
    var textElements = document.getElementsByClassName('censorship');
    for (var i = 0; i < textElements.length; i++) {
        textElements[i].style.backgroundColor = "transparent";
    }
}

var map = L.map('map').setView([51.505, -0.09], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

setInterval(function () {
    map.invalidateSize();
}, 100);


document.addEventListener("DOMContentLoaded", function () {
    var placeSpans = document.querySelectorAll("span.place");
    var contentArray = [];

    placeSpans.forEach(function (span) {
        var content = span.textContent;
        contentArray.push(content);
        span.setAttribute("id", content);
    });

    let uniqueSet = new Set(contentArray);

    let locations = Array.from(uniqueSet);

    locations.forEach(function (content) {
        // Use Mapbox's Geocoding API
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${content}.json?access_token=${mapboxgl.accessToken}`)
            .then(response => response.json())
            .then(data => {
                if (data.features.length > 0) {
                    // Extract coordinates from the response
                    var coordinates = data.features[0].geometry.coordinates;
                    var latitude = coordinates[1];
                    var longitude = coordinates[0];

                    // Create a marker for each location and add it to the map
                    var marker = L.marker([latitude, longitude]).addTo(map)
                        .bindPopup('<a href="#' + content + '">' + content + '</a>')
                        .openPopup();

                    // Get a reference to the link and the element with the ID you want to change
                    var textToChangeColor = document.getElementById(content);

                    // Add a click event listener to the marker
                    marker.addEventListener('click', function () {
                        // Change the color of the element with the specified ID
                        textToChangeColor.style.backgroundColor = 'yellow';
                    });
                }
            })
            .catch(error => console.error(error));
    });
    placeSpans.forEach(function (span) {
        if (span.classList.contains("state")) {
            if (span.id === "Alabama") {
                var Alabama = 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/alabama.geojson'

                fetch(
                    Alabama
                ).then(
                    res => res.json()
                ).then(
                    data => L.geoJSON(data).addTo(map)
                )
            }
            if (span.id === "Georgia") {
                var Georgia = 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/georgia.geojson'

                fetch(
                    Georgia
                ).then(
                    res => res.json()
                ).then(
                    data => L.geoJSON(data).addTo(map)
                )
            }
            if (span.id === "Indiana") {
                var Indiana = 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/indiana.geojson'

                fetch(
                    Indiana
                ).then(
                    res => res.json()
                ).then(
                    data => L.geoJSON(data).addTo(map)
                )
            }
            if (span.id === "Oregon") {
                var oregon = 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/oregon.geojson'

                fetch(
                    oregon
                ).then(
                    res => res.json()
                ).then(
                    data => L.geoJSON(data).addTo(map)
                )
            }
            if (span.id === "North Carolina") {
                var NorthCarolina = 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/north%20carolina.geojson'

                fetch(
                    NorthCarolina
                ).then(
                    res => res.json()
                ).then(
                    data => L.geoJSON(data).addTo(map)
                )
            }
            if (span.id === "South Carolina") {
                var SouthCarolina = 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/south%20carolina.geojson'

                fetch(
                    SouthCarolina
                ).then(
                    res => res.json()
                ).then(
                    data => L.geoJSON(data).addTo(map)
                )
            }
            if (span.id === "Florida") {
                var Florida = 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/florida.geojson'

                fetch(
                    Florida
                ).then(
                    res => res.json()
                ).then(
                    data => L.geoJSON(data).addTo(map)
                )
            }
            if (span.id === "Mississippi") {
                var Mississippi = 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/mississippi.geojson'

                fetch(
                    Mississippi
                ).then(
                    res => res.json()
                ).then(
                    data => L.geoJSON(data).addTo(map)
                )
            }
            if (span.id === "Tennessee") {
                var Mississippi = 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/tennessee.geojson'

                fetch(
                    Mississippi
                ).then(
                    res => res.json()
                ).then(
                    data => L.geoJSON(data).addTo(map)
                )
            }
            if (span.id === "Louisiana") {
                var Louisiana = 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/louisiana.geojson'

                fetch(
                    Louisiana
                ).then(
                    res => res.json()
                ).then(
                    data => L.geoJSON(data).addTo(map)
                )
            }
            if (span.id === "Virginia") {
                var Virginia = 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/virginia.geojson'

                fetch(
                    Virginia
                ).then(
                    res => res.json()
                ).then(
                    data => L.geoJSON(data).addTo(map)
                )
            }
            if (span.id === "Great Britain") {
                var GreatBritain = '..//geojson/united-kingdom_.geojson'

                fetch(
                    GreatBritain
                ).then(
                    res => res.json()
                ).then(
                    data => L.geoJSON(data).addTo(map)
                )
            }
            if (span.id === "Italy") {
                var Italy = '..//geojson/italy-detailed-boundary_943.geojson'

                fetch(
                    Italy
                ).then(
                    res => res.json()
                ).then(
                    data => L.geoJSON(data).addTo(map)
                )
            }
            if (span.id === "Hungary") {
                var Hungary = '..//geojson/hungary_338.geojson'

                fetch(
                    Hungary
                ).then(
                    res => res.json()
                ).then(
                    data => L.geoJSON(data).addTo(map)
                )
            }
            if (span.id === "Germany") {
                var Germany = 'https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/1_deutschland/1_sehr_hoch.geo.json'

                fetch(
                    Germany
                ).then(
                    res => res.json()
                ).then(
                    data => L.geoJSON(data).addTo(map)
                )
            }
            if (span.id === "Russia") {
                var Russia = '..//geojson/russia_609.geojson'

                fetch(
                    Russia
                ).then(
                    res => res.json()
                ).then(
                    data => L.geoJSON(data).addTo(map)
                )
            }
        }
    });
});


function toggleClass(firstId, secondId) {
    var firstEl = document.getElementById(firstId);
    var secondEl = document.getElementById(secondId);
    var body = document.getElementById('body-txt-id')
    if (firstEl.classList.contains("metarticle-vis-txt")) {
        firstEl.classList.remove("metarticle-vis-txt");
        firstEl.classList.add("metarticle-inv-txt");

        body.style.gridTemplateAreas = '" nav nav" " button main" " footer footer"';
        body.style.gridTemplateColumns = "0.08fr 1fr";
    } else {
        if (firstEl.classList.contains("metarticle-inv-txt")) {
            firstEl.classList.remove("metarticle-inv-txt")
        }
        firstEl.classList.add("metarticle-vis-txt");
        body.style.gridTemplateAreas = '"nav nav nav" "sidebar button main" "footer footer footer"';
        body.style.gridTemplateColumns = "0.3fr 0.2fr 1fr";
        if (secondEl.classList.contains("metarticle-vis-txt")) {
            secondEl.classList.remove("metarticle-vis-txt");
            secondEl.classList.add("metarticle-inv-txt");
        }
    }
}


function initializeAccordion() {
    var accordions = document.getElementsByClassName("accordion");

    for (var i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}
initializeAccordion();



function main() {
    // Checkbox interactions
    $('#showasides').click(function () {
        if (this.checked)
            $('.1700').addClass('n1700');
        else
            $('.1700').removeClass('n1700');
    });

    $('#showspeeches').click(function () {
        if (this.checked)
            $('.1800').addClass('n1800');
        else
            $('.1800').removeClass('n1800');
    });

    $('#showquotes').click(function () {
        if (this.checked)
            $('.1900').addClass('n1900');
        else
            $('.1900').removeClass('n1900');
    });
    $('#showpeople').click(function () {
        if (this.checked)
            $('.forrest').addClass('nforrest');
        else
            $('.forrest').removeClass('nforrest');
    });
    $('#showp').click(function () {
        if (this.checked)
            $('.brownlow').addClass('nb');
        else
            $('.brownlow').removeClass('nb');
    });
}
$(document).ready(main);



