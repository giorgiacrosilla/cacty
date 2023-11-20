function isCssLoaded(filename) {
    const linkElement = document.getElementById('csstochange');

    if (linkElement && linkElement.href.endsWith(filename)) {
        return true;
    }

    return false;
}
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
                adjustGridStructure();
                loadMap();
                var is90sLoaded = isCssLoaded('90s.css');
                if (is90sLoaded) {
                    $("#content-card > div").addClass("card");
                    $("#content-card >div").prepend('<div class="star"></div>');
                    $('.diagonal').before('<div class="separator left"></div>');
                    $('.due:eq(1)').before('<div class="separator right"></div>');
                    $('#txt-main-id').append('<div class="separator right"></div>');
                    $('.due:eq(0)').before('<div class="separator t"></div>');
                    sections90s();
                }
                var isfutureloaded = isCssLoaded('future.css');
                if (isfutureloaded) {
                    containerfuture();
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
                adjustGridStructure();
                loadMap();
                var is90sLoaded = isCssLoaded('90s.css');
                if (is90sLoaded) {
                    sections90s();
                }
                var isfutureloaded = isCssLoaded('future.css');
                if (isfutureloaded) {
                    containerfuture();
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
                $('body').removeClass();
                adjustGridStructure();
                loadMap();
                var is90sLoaded = isCssLoaded('90s.css');
                if (is90sLoaded) {
                    $("#content-card > div").addClass("card");
                    $("#content-card >div").prepend('<div class="star"></div>');
                    $('.diagonal').before('<div class="separator left"></div>');
                    $('.due:eq(1)').before('<div class="separator right"></div>');
                    $('#txt-main-id').append('<div class="separator right"></div>');
                    $('.due:eq(0)').before('<div class="separator t"></div>');
                    sections90s();
                }
                var isfutureloaded = isCssLoaded('future.css');
                if (isfutureloaded) {
                    containerfuture();
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
    $('#docs a').click(function (e) {
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
                $('body').removeAttr('id').attr('id', 'body-d-id');
                $('body').removeClass();
                adjustGridStructure();
                loadMap();
                var is90sLoaded = isCssLoaded('90s.css');
                if (is90sLoaded) {
                    sections90s();
                }
                var isfutureloaded = isCssLoaded('future.css');
                if (isfutureloaded) {
                    $('.container-doc:eq(0)').before('<div class="left-side"><img src=""></div>');
                    $('.container-doc:eq(1)').before('<div class="left-side"><img src=""></div>');
                    $('.container-doc:eq(2)').before('<div class="left-side"><img src=""></div>');
                    $('.container-doc:eq(3)').before('<div class="left-side"><img src=""></div>');
                    $('.container-doc:eq(4)').before('<div class="left-side"><img src="https://i0.wp.com/www.futurevintagefestival.com/wp-content/uploads/2017/07/cioe-future-vintage-cover-verticale.png?fit=628%2C1024&ssl=1"></div>');
                    $('.container-doc:eq(5)').before('<div class="left-side"><img src="https://i.pinimg.com/550x/8c/95/9c/8c959c596302445cc2be630b55b3473a.jpg"></div>');
                    containerfuture();
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
        $('.imgcontainer img').unwrap();
        $("#destijlprint").remove();
        $("#side-image").remove();
        $("#right-image").remove();
        $("#aldinedelf").remove()
        $(".uno").after('<img id="destijlprint" src="data:image/jpeg;base64,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">');
        if (!uno) {
            // $("body").after('<div class="main-container"></div>');
            $("body").after('<div class="background-grid"></div>');
            $(".background-grid").after('<div class="block", id="square"></div>');
            $(".background-grid").after('<div class="block", id="gold-square"></div>');
            $(".background-grid").after('<div class="block", id="square-3"></div>');
            $(".background-grid").after('<div class="block", id="yellow-square"></div>');
            $(".background-grid").after('<div class="block", id="mini-white-square"></div>');
            $(".background-grid").after('<div class="block", id="blue-square-2"></div>');
            $(".background-grid").after('<div class="block", id="white-square5"></div>');
            $(".background-grid").after('<div class="block", id="place-square2"></div>');
            $(".background-grid").after('<div class="block", id="place-square1"></div>');
        }
    }
    else if (newCSSFileName === "Aldine.css") {
        $('.imgcontainer img').unwrap();
        $("#aldinedelf").remove();
        $(".background-grid").remove();
        $(".uno").after('<img id ="aldinedelf" src="https://raw.githubusercontent.com/giorgiacrosilla/cacty/main/Sasy/delfinoaldine.jpg">');
        $(".block").remove();
        $("#destijlprint").remove();
        if (!uno) {
            $("body").before('<img id="right-image" src="https://github.com/giorgiacrosilla/cacty/blob/main/cssfinalimage.png?raw=true")>');
            $("body").before('<img id="side-image" src="https://github.com/giorgiacrosilla/cacty/blob/main/cssfinalimage.png?raw=true")>');
        }
    }
    else if (newCSSFileName === "90s.css") {
        $("#side-image").remove();
        $("#right-image").remove();
        $(".block").remove();
        $("#content-card > div").addClass("card");
        $("#content-card >div").prepend('<div class="star"></div>');
        $('.diagonal').before('<div class="separator left"></div>');
        $('.due:eq(1)').before('<div class="separator right"></div>');
        $('#txt-main-id').append('<div class="separator right"></div>');
        $('.due:eq(0)').before('<div class="separator t"></div>');
        $('.imgcontainer img').unwrap();
        $('.decoration-dx').remove();
        $('.decoration-sx').remove();
        $('.left-side').remove();
        $("#aldinedelf").remove();
        $("#destijlprint").remove();
        sections90s();

    }
    else if (newCSSFileName === "future.css") {
        $('.imgcontainer img').unwrap();
        $("#side-image").remove();
        $("#right-image").remove();
        $("#aldinedelf").remove();
        $("#destijlprint").remove();
        $(".block").remove();
        $(".star").remove();
        $(".card").removeClass("card");
        $(".separator.t").remove();
        $(".separator.right").remove();
        $(".separator.left").remove();
        $('.decoration-dx').remove();
        $('.decoration-sx').remove();
        if ($('.left-side').length === 0) {
            $('.container-doc:eq(0)').before('<div class="left-side"><img src=""></div>');
            $('.container-doc:eq(1)').before('<div class="left-side"><img src=""></div>');
            $('.container-doc:eq(2)').before('<div class="left-side"><img src=""></div>');
            $('.container-doc:eq(3)').before('<div class="left-side"><img src=""></div>');
            $('.container-doc:eq(4)').before('<div class="left-side"><img src="https://i0.wp.com/www.futurevintagefestival.com/wp-content/uploads/2017/07/cioe-future-vintage-cover-verticale.png?fit=628%2C1024&ssl=1"></div>');
            $('.container-doc:eq(5)').before('<div class="left-side"><img src="https://i.pinimg.com/550x/8c/95/9c/8c959c596302445cc2be630b55b3473a.jpg"></div>');
        }

        containerfuture();
    }
    else if (newCSSFileName === "ottocento.css") {
        $('.title').before('<div class="decoration-sx"><p class="p-dec">Decorazione</p></div>');
        $('#navbarSupportedContent').after('<div class="decoration-dx"><p class="p-dec">Decorazione</p></div>');

    }
}
;
$(document).ready(function(){
    const linkElement = document.getElementById("csstochange");

    if (linkElement === "ottocento.css") {
        $('.title').before('<div class="decoration-sx"><p class="p-dec">Decorazione</p></div>');
        $('#navbarSupportedContent').after('<div class="decoration-dx"><p class="p-dec">Decorazione</p></div>');
        $('#copyr').before('<div class="decoration-sx"><p class="p-dec">Decorazione</p></div>');
        $('#copyr').after('<div class="decoration-dx"><p class="p-dec">Decorazione</p></div>');
    }
});


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
        if (textDiv) {
            var paragraphs = textDiv.getElementsByTagName('p');
            for (var i = 0; i < paragraphs.length; i++) {
                if (paragraphs[i].parentNode.className !== 'footnotes' && paragraphs[i].parentNode.className !== 'table_section') {
                    if (i % 4 === 0 && paragraphs[i].textContent.trim() !== '') {
                        paragraphs[i].classList.add('frontier');
                    }                    
                }
            }
        }
    }
};

function containerfuture() {
    if (isCssLoaded('future.css')) {
        var existingImg = $('img');
        var newDiv = $('<div>');
        newDiv.addClass('imgcontainer');
        existingImg.wrap(newDiv);
    }
}
document.addEventListener("DOMContentLoaded", function () {
    containerfuture();
});

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
                        var marker = L.marker([coordinates[1], coordinates[0]]).addTo(map);

                        marker.bindPopup('<a href="#' + content + '">' + content + '</a');

                        var textToChangeColor = document.querySelectorAll("span.place[id='" + content + "']");

                        // Add a click event listener to the marker
                        marker.addEventListener('click', function () {
                            textToChangeColor.forEach(function (element) {
                                element.classList.add('nmap');
                            });
                        });
                        marker.getPopup().on('remove', function () {
                            textToChangeColor.forEach(function (element) {
                                element.classList.remove('nmap');
                            });
                        });
                    }
                })
                .catch(error => console.error(error));
        });
        function loadGeoJSON(spanId, geoJSONUrl) {
            fetch(geoJSONUrl)
                .then(res => res.json())
                .then(data => L.geoJSON(data).addTo(map));
        }

        $(document).ready(function () {
            const geoJSONUrls = {
                "France": 'https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/regions.geojson',
                "India": 'https://raw.githubusercontent.com/giorgiacrosilla/cacty/main/geojson/geoBoundaries-IND-ADM0.geojson',
                "Midwest": 'https://raw.githubusercontent.com/scdoshi/us-geojson/master/geojson/region/Midwest.geojson',
                "Massachussetts": 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/massachusetts.geojson',
                "Pennsylvania": 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/pennsylvania.geojson',
                "North America": 'https://raw.githubusercontent.com/koopjs/geodata/master/north-america.geojson',
                "Northern Europe": 'https://raw.githubusercontent.com/highcharts/map-collection-dist/master/custom/nordic-countries.topo.json',
                "Bretagne": 'https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/regions/bretagne/arrondissements-bretagne.geojson',
                "United States": 'https://raw.githubusercontent.com/scdoshi/us-geojson/master/geojson/nation/US.geojson',
                "Alabama": 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/alabama.geojson',
                "Georgia": 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/georgia.geojson',
                "Indiana": 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/indiana.geojson',
                "Oregon": 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/oregon.geojson',
                "North Carolina": 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/north%20carolina.geojson',
                "South Carolina": 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/south%20carolina.geojson',
                "Florida": 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/florida.geojson',
                "Mississippi": 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/mississippi.geojson',
                "Tennessee": 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/tennessee.geojson',
                "Louisiana": 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/louisiana.geojson',
                "Virginia": 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/virginia.geojson',
                "Connecticut": 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/connecticut.geojson',
                "California": 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/california.geojson',
                "Texas": 'https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/texas.geojson',
                "Great Britain": 'https://raw.githubusercontent.com/giorgiacrosilla/cacty/main/geojson/united-kingdom_.geojson',
                "Italy": 'https://raw.githubusercontent.com/giorgiacrosilla/cacty/main/geojson/italy-detailed-boundary_943.geojson',
                "Hungary": 'https://raw.githubusercontent.com/giorgiacrosilla/cacty/main/geojson/hungary_338.geojson',
                "Germany": 'https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/1_deutschland/1_sehr_hoch.geo.json',
                "Russia": 'https://raw.githubusercontent.com/giorgiacrosilla/cacty/main/geojson/russia_609.geojson',
            };

            placeSpans.forEach(function (span) {
                if (span.classList.contains("state") && geoJSONUrls.hasOwnProperty(span.id)) {
                    loadGeoJSON(span.id, geoJSONUrls[span.id]);
                }
            });
        });
    }
}
document.addEventListener("DOMContentLoaded", function () {
    loadMap();
});

function adjustGridStructure() {
    var body = document.getElementById('body-txt-id');
    var metarticleList = document.querySelectorAll('.metarticle-vis-txt');

    if (body) {
        if (window.innerWidth < 900) {
            body.classList.remove('grid-normal');
            body.classList.add('grid-s-normal');
        } else {
            body.classList.add('grid-normal');
            body.classList.remove('grid-s-normal');
        }

        if (metarticleList) {
            metarticleList.forEach(function (metarticle) {
                if (metarticle) {
                    if (window.innerWidth < 900) {
                        body.classList.remove('grid-large');
                        body.classList.add('grid-small');
                    } else {
                        body.classList.remove('grid-small');
                        body.classList.add('grid-large');
                    }
                }
            });
        }
    }
}
document.addEventListener("DOMContentLoaded", function () {
    adjustGridStructure();
});

window.addEventListener('resize', adjustGridStructure);

function toggleClass(firstId, secondId) {
    var firstEl = document.getElementById(firstId);
    var secondEl = document.getElementById(secondId);
    var body = document.getElementById('body-txt-id');
    if (window.innerWidth > 900) {
        if (firstEl.classList.contains("metarticle-vis-txt")) {
            firstEl.classList.remove("metarticle-vis-txt");
            firstEl.classList.add("metarticle-inv-txt");
            body.classList.remove('grid-large');
            body.classList.add('grid-normal');
        } else {
            if (firstEl.classList.contains("metarticle-inv-txt")) {
                firstEl.classList.remove("metarticle-inv-txt")
                firstEl.classList.add("metarticle-vis-txt");
                body.classList.add('grid-large');
                body.classList.remove('grid-normal');
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
            body.classList.remove('grid-small');
            body.classList.add('grid-s-normal');
        }
        else {
            if (firstEl.classList.contains("metarticle-inv-txt")) {
                firstEl.classList.remove("metarticle-inv-txt")
                firstEl.classList.add("metarticle-vis-txt");
                body.classList.add('grid-small');
                body.classList.remove('grid-s-normal');
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
        if (this.checked) {
            $('.1700').addClass('n');

        } else {
            $('.1700').removeClass('n');
        }
    });

    $('#show1800').click(function () {
        if (this.checked) {
            $('.1800').addClass('n');

        }
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
