$(document).ready(function () {
    // On click of a link in the list
    $('#article-txt-id a').click(function (e) {
        e.preventDefault();
        var fileDaCaricare = $(this).data('file');
        caricaContenuto(fileDaCaricare);
    })
    function caricaContenuto(url) {
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'html',
            success: function (data) {
                // Create a new HTML document
                var newDoc = document.implementation.createHTMLDocument();
                newDoc.documentElement.innerHTML = data;
                // Replace the <body> content
                $('body').html(newDoc.body.innerHTML);
                $('#metadata-txt-id').removeClass('metarticle-inv-txt').addClass('metarticle-vis-txt');
                $('#article-txt-id').removeClass('metarticle-vis-txt').addClass('metarticle-inv-txt');
                loadMap();
                if (isCssLoaded('90s.css')) {
                    sections90s();
                }
            },
            error: function (error) {
                console.log('Error loading file: ' + error.statusText);
            }
        });
    }
});
$(document).ready(function () {
    // On click of a link in the list
    $('#content-card a').click(function (e) {
        e.preventDefault();
        // Retrieve the URL of the file associated with the link
        var fileDaCaricare = $(this).data('file');
        // Call the function to load the content
        carica(fileDaCaricare);
    })
    function carica(url) {
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'html',
            success: function (data) {
                // Create a new HTML document
                var newDoc = document.implementation.createHTMLDocument();
                newDoc.documentElement.innerHTML = data;
                // Replace the <body> content
                $('body').html(newDoc.body.innerHTML);
                // Add or remove classes from the elements
                $('#metadata-txt-id').removeClass('metarticle-vis-txt').addClass('metarticle-inv-txt');
                $('#article-txt-id').removeClass('metarticle-vis-txt').addClass('metarticle-inv-txt');
                $('body').removeAttr('id').attr('id', 'body-txt-id');
                loadMap();
                if (isCssLoaded('90s.css')) {
                    sections90s();
                }

            },
            error: function (error) {
                console.log('Error loading file: ' + error.statusText);
            }
        });
    }
});
$(document).ready(function () {
    // On click of a link in the list
    $('#titlemainp a').click(function (e) {
        e.preventDefault();
        // Retrieve the URL of the file associated with the link
        var fileDaCaricare = $(this).data('file');
        // Call the function to load the content
        caricaf(fileDaCaricare);
    })
    function caricaf(url) {
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'html',
            success: function (data) {
                var newDoc = document.implementation.createHTMLDocument();
                newDoc.documentElement.innerHTML = data;
                // Replace the <body> content
                $('body').html(newDoc.body.innerHTML);

                $('body').removeAttr('id').attr('id', 'body-main-id');
                if (isCssLoaded('90s.css')) {
                    $("#content-card > div").addClass("card");
                    $("#content-card >div").prepend('<div class="star"></div>');
                    sections90s();
                }
            },
            error: function (error) {
                console.log('Error loading file: ' + error.statusText);
            }
        });
    }
});

function stylechanger(newCSSFileName) {
    const linkElement = document.getElementById("csstochange");

    if (linkElement) {
        linkElement.href = newCSSFileName;
    }

    if (newCSSFileName === "De_Stijl.css") {
        $("#side-image").remove();
        $("#right-image").remove();
        $("body").after('<div class="main-container"></div>')
        $(".main-container").after('<div class="background-grid"></div>')
        $(".background-grid").after('<div class="block", id="square"></div>')
        $(".background-grid").after('<div class="block", id="gold-square"></div>')
        $(".background-grid").after('<div class="block", id="square-3"></div>')
        $(".background-grid").after('<div class="block", id="yellow-square"></div>')
        $(".background-grid").after('<div class="block", id="mini-white-square"></div>')
        $(".background-grid").after('<div class="block", id="blue-square-2"></div>')
        $(".background-grid").after('<div class="block", id="white-square5"></div>')
        $(".background-grid").after('<div class="block", id="place-square2"></div>')
        $(".background-grid").after('<div class="block", id="place-square1"></div>')
        $(".star").remove();
        $(".card").removeClass("card");


    }
    else if (newCSSFileName === "Aldine.css") {
        $("body").before('<img id="right-image" src="https://github.com/giorgiacrosilla/cacty/blob/main/cssfinalimage.png?raw=true")>');
        $("body").before('<img id="side-image" src="https://github.com/giorgiacrosilla/cacty/blob/main/cssfinalimage.png?raw=true")>');
        $(".main-container").display(none);
        $(".background-grid").display(none);
        $(".block").display(none);
        $(".star").remove();
        $(".card").removeClass("card");

    }
    else if (newCSSFileName === "90s.css") {
        $("#side-image").remove();
        $("#right-image").remove();
        $(".block").remove();
        $("#content-card > div").addClass("card");
        $("#content-card >div").prepend('<div class="star"></div>');
        sections90s();
    }
    else if (newCSSFileName === "future.css") {
        $("#side-image").remove();
        $("#right-image").remove();
        $(".block").remove();
        $(".star").remove();
        $(".card").removeClass("card");
    }
};

var circle = document.getElementsByClassName("circle");
var innerBox = document.querySelector(".inner-box");

document.onmousemove = function (event) {
    var x = event.clientX * 100 / innerBox.clientWidth + "%";
    var y = event.clientY * 100 / innerBox.clientHeight + "%";

    // Define the boundaries of the inner box
    var minX = 0;
    var maxX = innerBox.clientWidth - circle[0].clientWidth;
    var minY = 0;
    var maxY = innerBox.clientHeight - circle[0].clientHeight;

    for (var i = 0; i < 2; i++) {
        if (circle[i]) {
            // Constrain x and y within the inner box boundaries
            x = Math.min(Math.max(parseInt(x, 10), minX), maxX) + "%";
            y = Math.min(Math.max(parseInt(y, 10), minY), maxY) + "%";

            circle[i].style.left = x;
            circle[i].style.top = y;
            circle[i].style.transform = "translate(-" + x + ",-" + y + ")";
        }
    }
};

var alertShown = false;

function isCssLoaded(filename) {
    const linkElement = document.getElementById('csstochange');

    if (linkElement && linkElement.href.endsWith(filename)) {
        return true;
    }

    return false;
}

function showAlert() {
    if (isCssLoaded("future.css") && !alertShown) {
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
};

function sections90s() {
    if (isCssLoaded("90s.css")) {
        var textDiv = document.querySelector('div.text');
        console.log(textDiv);
        if (textDiv) {
            var paragraphs = textDiv.getElementsByTagName('p');
            for (var i = 0; i < paragraphs.length; i++) {
                if (paragraphs[i].parentNode.className !== 'footnotes') {
                    if (i % 4 === 0) {
                        paragraphs[i].classList.add('frontier');
                    }
                }
            }
        }
    }
}
sections90s();


function loadMap() {
    var mapcontainer = document.getElementById('map');
    if (mapcontainer) {
        var map = L.map('map').setView([34.225727, -77.944710], 4);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);

        setInterval(function () {
            map.invalidateSize();
        }, 100);

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
                        var coordinates = data.features[0].geometry.coordinates;

                        // Create a marker for each location
                        var marker = L.marker([coordinates[1], coordinates[0]]).addTo(map);

                        marker.bindPopup('<a href="#' + content + '">' + content + '</a');

                        var textToChangeColor = document.querySelectorAll("span.place[id='" + content + "']");

                        // Add a click event listener to the marker
                        marker.addEventListener('click', function () {
                            textToChangeColor.forEach(function (element) {
                                element.style.backgroundColor = 'yellow';
                            });
                        });
                        marker.getPopup().on('remove', function () {
                            textToChangeColor.forEach(function (element) {
                                element.style.backgroundColor = 'transparent';
                            });
                        });
                    }
                })
                .catch(error => console.error(error));
        });

        placeSpans.forEach(function (span) {
            if (span.classList.contains("state")) {
                if (span.id === "France") {
                    var France = 'https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/regions.geojson'

                    fetch(
                        France
                    ).then(
                        res => res.json()
                    ).then(
                        data => L.geoJSON(data).addTo(map)
                    )
                }
                if (span.id === "India") {
                    var India = 'https://raw.githubusercontent.com/giorgiacrosilla/cacty/main/geojson/geoBoundaries-IND-ADM0.geojson'

                    fetch(
                        India
                    ).then(
                        res => res.json()
                    ).then(
                        data => L.geoJSON(data).addTo(map)
                    )
                }
                if (span.id === "Midwest") {
                    var Midwest = 'https://raw.githubusercontent.com/scdoshi/us-geojson/master/geojson/region/Midwest.geojson'

                    fetch(
                        Midwest
                    ).then(
                        res => res.json()
                    ).then(
                        data => L.geoJSON(data).addTo(map)
                    )
                }
                if (span.id === "Massachussetts") {
                    var Massachussetts = 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/massachusetts.geojson'

                    fetch(
                        Massachussetts
                    ).then(
                        res => res.json()
                    ).then(
                        data => L.geoJSON(data).addTo(map)
                    )
                }
                if (span.id === "Pennsylvania") {
                    var Pennsylvania = 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/pennsylvania.geojson'

                    fetch(
                        Pennsylvania
                    ).then(
                        res => res.json()
                    ).then(
                        data => L.geoJSON(data).addTo(map)
                    )
                }
                if (span.id === "North America") {
                    var NorthAmerica = 'https://raw.githubusercontent.com/koopjs/geodata/master/north-america.geojson'

                    fetch(
                        NorthAmerica
                    ).then(
                        res => res.json()
                    ).then(
                        data => L.geoJSON(data).addTo(map)
                    )
                }
                if (span.id === "Northern Europe") {
                    var NorthernEurope = 'https://raw.githubusercontent.com/highcharts/map-collection-dist/master/custom/nordic-countries.topo.json'

                    fetch(
                        NorthernEurope
                    ).then(
                        res => res.json()
                    ).then(
                        data => L.geoJSON(data).addTo(map)
                    )
                }
                if (span.id === "Bretagne") {
                    var Bretagne = 'https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/regions/bretagne/arrondissements-bretagne.geojson'

                    fetch(
                        Bretagne
                    ).then(
                        res => res.json()
                    ).then(
                        data => L.geoJSON(data).addTo(map)
                    )
                }
                if (span.id === "United States") {
                    var USA = 'https://raw.githubusercontent.com/scdoshi/us-geojson/master/geojson/nation/US.geojson'

                    fetch(
                        USA
                    ).then(
                        res => res.json()
                    ).then(
                        data => L.geoJSON(data).addTo(map)
                    )
                }
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
                    var Tennessee = 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/tennessee.geojson'

                    fetch(
                        Tennessee
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
                if (span.id === "Connecticut") {
                    var Connecticut = 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/connecticut.geojson'

                    fetch(
                        Connecticut
                    ).then(
                        res => res.json()
                    ).then(
                        data => L.geoJSON(data).addTo(map)
                    )
                }
                if (span.id === "California") {
                    var California = 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/california.geojson'

                    fetch(
                        California
                    ).then(
                        res => res.json()
                    ).then(
                        data => L.geoJSON(data).addTo(map)
                    )
                }
                if (span.id === "Texas") {
                    var Texas = 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/texas.geojson'

                    fetch(
                        Texas
                    ).then(
                        res => res.json()
                    ).then(
                        data => L.geoJSON(data).addTo(map)
                    )
                }
                if (span.id === "Great Britain") {
                    var GreatBritain = 'https://raw.githubusercontent.com/giorgiacrosilla/cacty/main/geojson/united-kingdom_.geojson'

                    fetch(
                        GreatBritain
                    ).then(
                        res => res.json()
                    ).then(
                        data => L.geoJSON(data).addTo(map)
                    )
                }
                if (span.id === "Italy") {
                    var Italy = 'https://raw.githubusercontent.com/giorgiacrosilla/cacty/main/geojson/italy-detailed-boundary_943.geojson'

                    fetch(
                        Italy
                    ).then(
                        res => res.json()
                    ).then(
                        data => L.geoJSON(data).addTo(map)
                    )
                }
                if (span.id === "Hungary") {
                    var Hungary = 'https://raw.githubusercontent.com/giorgiacrosilla/cacty/main/geojson/hungary_338.geojson'

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
                    var Russia = 'https://raw.githubusercontent.com/giorgiacrosilla/cacty/main/geojson/russia_609.geojson'

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
    }
};
document.addEventListener("DOMContentLoaded", function () {
    loadMap();
});

function adjustGridStructure() {
    var body = document.getElementById('body-txt-id');
    var metarticleList = document.querySelectorAll('.metarticle-vis-txt');

    if (window.innerWidth < 900) {
        body.style.gridTemplateColumns = "1fr";
        body.style.gridTemplateRows = "0.1fr 0.1fr 1fr 0.1fr";
        body.style.gridTemplateAreas = "'nav' 'button' 'main' 'footer'";
        metarticleList.forEach(function (metarticle) {
            if (metarticle) {
                body.style.gridTemplateColumns = "1fr";
                body.style.gridTemplateRows = "0.1fr 0.05fr 0.6fr 1fr 0.1fr";
                body.style.gridTemplateAreas = "'nav' 'button' 'sidebar' 'main' 'footer'";
            } 
        });
    } else {
        body.style.gridTemplateColumns = "0.4fr 1fr";
        body.style.gridTemplateRows = "0.1fr 1fr 0.1fr";
        body.style.gridTemplateAreas = "'nav nav' 'button main' 'footer footer'";
        metarticleList.forEach(function (metarticle) {
            if (metarticle) {
                body.style.gridTemplateAreas = '"nav nav nav" "sidebar button main" "footer footer footer"';
                body.style.gridTemplateColumns = "0.4fr 0.1fr 1fr";
                body.style.gridTemplateRows = "0.1fr 1fr 0.1fr";

            } 
        });
    }
}

// Add a resize event listener to call the adjustGridStructure function when the window size changes
window.addEventListener('resize', adjustGridStructure);




function toggleClass(firstId, secondId) {
    var firstEl = document.getElementById(firstId);
    var secondEl = document.getElementById(secondId);
    var body = document.getElementById('body-txt-id');
    if (window.innerWidth > 900) {
        if (firstEl.classList.contains("metarticle-vis-txt")) {
            firstEl.classList.remove("metarticle-vis-txt");
            firstEl.classList.add("metarticle-inv-txt");
            body.style.gridTemplateAreas = '" nav nav" " button main" " footer footer"';
            body.style.gridTemplateColumns = "0.08fr 1fr";
        } else {
            if (firstEl.classList.contains("metarticle-inv-txt")) {
                firstEl.classList.remove("metarticle-inv-txt")
                firstEl.classList.add("metarticle-vis-txt");
                body.style.gridTemplateAreas = '"nav nav nav" "sidebar button main" "footer footer footer"';
                body.style.gridTemplateColumns = "0.4fr 0.1fr 1fr";
                if (secondEl.classList.contains("metarticle-vis-txt")) {
                    secondEl.classList.remove("metarticle-vis-txt");
                    secondEl.classList.add("metarticle-inv-txt")
                }
            }
        }
    }

    else {
        if (firstEl.classList.contains("metarticle-vis-txt")) {
            firstEl.classList.remove("metarticle-vis-txt");
            firstEl.classList.add("metarticle-inv-txt");
            body.style.gridTemplateAreas = '"nav" " button" "main" "footer"';
            body.style.gridTemplateColumns = "1fr";
            body.style.gridTemplateRows = "0.1fr 0.2fr 1fr 0.1fr";
        }
        else {
            if (firstEl.classList.contains("metarticle-inv-txt")) {
                firstEl.classList.remove("metarticle-inv-txt")
                firstEl.classList.add("metarticle-vis-txt");
                body.style.gridTemplateAreas = '"nav" "button" "sidebar" "main" "footer"';
                body.style.gridTemplateColumns = "1fr";
                body.style.gridTemplateRows = "0.1fr 0.05fr 0.6fr 1fr 0.1fr";
                if (secondEl.classList.contains("metarticle-vis-txt")) {
                    secondEl.classList.remove("metarticle-vis-txt");
                    secondEl.classList.add("metarticle-inv-txt")
                }
            }
        }
    }
};

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
    $('#show1700').click(function () {
        if (this.checked)
            $('.1700').addClass('n');
        else
            $('.1700').removeClass('n');
    });

    $('#show1800').click(function () {
        if (this.checked)
            $('.1800').addClass('n');
        else
            $('.1800').removeClass('n');
    });

    $('#show1900').click(function () {
        if (this.checked)
            $('.1900').addClass('n');
        else
            $('.1900').removeClass('n');
    });
    $('#showf').click(function () {
        if (this.checked)
            $('.forrest').addClass('nb');
        else
            $('.forrest').removeClass('nb');
    });
    $('#showb').click(function () {
        if (this.checked)
            $('.brownlow').addClass('nb');
        else
            $('.brownlow').removeClass('nb');
    });
    $('#showk').click(function () {
        if (this.checked)
            $('.kennedy').addClass('nb');
        else
            $('.kennedy').removeClass('nb');
    });
    $('#showl').click(function () {
        if (this.checked)
            $('.lee').addClass('nb');
        else
            $('.lee').removeClass('nb');
    });
    $('#showj').click(function () {
        if (this.checked)
            $('.johnson').addClass('nb');
        else
            $('.johnson').removeClass('nb');
    });
    $('#showw').click(function () {
        if (this.checked)
            $('.wilson').addClass('nb');
        else
            $('.wilson').removeClass('nb');
    });
    $('#shows').click(function () {
        if (this.checked)
            $('.simmons').addClass('nb');
        else
            $('.simmons').removeClass('nb');
    });
    $('#showr').click(function () {
        if (this.checked)
            $('.reed').addClass('nb');
        else
            $('.reed').removeClass('nb');
    });
    $('#showh').click(function () {
        if (this.checked)
            $('.hayes').addClass('nb');
        else
            $('.hayes').removeClass('nb');
    });
    $('#showa').click(function () {
        if (this.checked)
            $('.adams').addClass('nb');
        else
            $('.adams').removeClass('nb');
    });
    $('#showe').click(function () {
        if (this.checked)
            $('.eliot').addClass('nb');
        else
            $('.eliot').removeClass('nb');
    });
    $('#showadd').click(function () {
        if (this.checked)
            $('.addams').addClass('nb');
        else
            $('.addams').removeClass('nb');
    });
    $('#showc').click(function () {
        if (this.checked)
            $('.clarke').addClass('nb');
        else
            $('.clarke').removeClass('nb');
    });
    $('#showt').click(function () {
        if (this.checked)
            $('.tyler').addClass('nb');
        else
            $('.tyler').removeClass('nb');
    });
    $('#showsm').click(function () {
        if (this.checked)
            $('.smith').addClass('nb');
        else
            $('.smith').removeClass('nb');
    });
    $('#showst').click(function () {
        if (this.checked)
            $('.stephenson').addClass('nb');
        else
            $('.stephenson').removeClass('nb');
    });
    $('#showco').click(function () {
        if (this.checked)
            $('.colescott').addClass('nb');
        else
            $('.colescott').removeClass('nb');
    });
    $('#showev').click(function () {
        if (this.checked)
            $('.evans').addClass('nb');
        else
            $('.evans').removeClass('nb');
    });
    $('#showgr').click(function () {
        if (this.checked)
            $('.green').addClass('nb');
        else
            $('.green').removeClass('nb');
    });
    $('#showed').click(function () {
        if (this.checked)
            $('.edwards').addClass('nb');
        else
            $('.edwards').removeClass('nb');
    });
    $('#showjo').click(function () {
        if (this.checked)
            $('.jones').addClass('nb');
        else
            $('.jones').removeClass('nb');
    });
    $('#showli').click(function () {
        if (this.checked)
            $('.liuzzo').addClass('nb');
        else
            $('.liuzzo').removeClass('nb');
    });
    $('#showev').click(function () {
        if (this.checked)
            $('.evers').addClass('nb');
        else
            $('.evers').removeClass('nb');
    });
    $('#showwa').click(function () {
        if (this.checked)
            $('.washington').addClass('nb');
        else
            $('.washington').removeClass('nb');
    });
    $('#showe1').click(function () {
        if (this.checked)
            $('.reconstruction').addClass('ne');
        else
            $('.reconstruction').removeClass('ne');
    });
    $('#showe2').click(function () {
        if (this.checked)
            $('.ww1').addClass('ne');
        else
            $('.ww1').removeClass('ne');
    });
    $('#showe3').click(function () {
        if (this.checked)
            $('.civilwar').addClass('ne');
        else
            $('.civilwar').removeClass('ne');
    });
    $('#showe4').click(function () {
        if (this.checked)
            $('.shiloh').addClass('ne');
        else
            $('.shiloh').removeClass('ne');
    });
    $('#showe5').click(function () {
        if (this.checked)
            $('.immigration').addClass('ne');
        else
            $('.immigration').removeClass('ne');
    });
    $('#showe6').click(function () {
        if (this.checked)
            $('.armistice').addClass('ne');
        else
            $('.armistice').removeClass('ne');
    });
    $('#showe7').click(function () {
        if (this.checked)
            $('.wallstreet').addClass('ne');
        else
            $('.wallstreet').removeClass('ne');
    });
    

    
}
$(document).ready(main);
