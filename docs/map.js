function isCssLoaded(filename) {
  const linkElement = document.getElementById("csstochange");

  if (linkElement && linkElement.href.endsWith(filename)) {
    return true;
  }

  return false;
}

function handlePageLoad() {
  var is90sLoaded = isCssLoaded("90s.css");

  if (is90sLoaded) {
    $(".background-grid").remove();
    $(".block").remove();
    $("#content-card > div").addClass("card");
    $("#content-card > div").prepend('<div class="star"></div>');
    $(".diagonal").before('<div class="separator left"></div>');
    $(".due:eq(1)").before('<div class="separator right"></div>');
    $("#txt-main-id").append('<div class="separator right"></div>');
    $(".due:eq(0)").before('<div class="separator t"></div>');
    $(".imgcontainer img").unwrap();
    $(".decoration-dx").remove();
    $(".decoration-sx").remove();
    $(".left-side").remove();
    $("#aldinedelf").css("display", "none");
    sections90s();
  }

  var isfutureloaded = isCssLoaded("future.css");

  if (isfutureloaded) {
    $(".imgcontainer img").unwrap();
    $("#aldinedelf").css("display", "none");
    $(".background-grid").remove();
    $(".block").remove();
    $(".star").remove();
    $(".card").removeClass("card");
    $(".separator.t").remove();
    $(".separator.right").remove();
    $(".separator.left").remove();
    $(".decoration-dx").remove();
    $(".decoration-sx").remove();

    if ($(".left-side").length === 0) {
      $(".container-doc:eq(0)").before(
        '<div class="left-side"><img src=""></div>'
      );
      $(".container-doc:eq(1)").before(
        '<div class="left-side"><img src=""></div>'
      );
      $(".container-doc:eq(2)").before(
        '<div class="left-side"><img src=""></div>'
      );
      $(".container-doc:eq(3)").before(
        '<div class="left-side"><img src=""></div>'
      );
      $(".container-doc:eq(4)").before(
        '<div class="left-side"><img src="https://i0.wp.com/www.futurevintagefestival.com/wp-content/uploads/2017/07/cioe-future-vintage-cover-verticale.png?fit=628%2C1024&ssl=1"></div>'
      );
      $(".container-doc:eq(5)").before(
        '<div class="left-side"><img src="https://i.pinimg.com/550x/8c/95/9c/8c959c596302445cc2be630b55b3473a.jpg"></div>'
      );
    }

    containerfuture();
  }

  var isOttocentoloaded = isCssLoaded("ottocento.css");
  if (isOttocentoloaded) {
    $(".left-side").remove();
    $(".imgcontainer img").unwrap();
    $("#aldinedelf").css("display", "none");
    $(".background-grid").remove();
    $(".block").remove();
    $(".star").remove();
    $(".card").removeClass("card");
    $(".title").before(
      '<div class="decoration-sx"><p class="p-dec">Decorazione</p></div>'
    );
    $("#navbarSupportedContent").after(
      '<div class="decoration-dx"><p class="p-dec">Decorazione</p></div>'
    );
    $("#copyr").before(
      '<div class="decoration-sx"><p class="p-dec">Decorazione</p></div>'
    );
    $("#copyr").after(
      '<div class="decoration-dx"><p class="p-dec">Decorazione</p></div>'
    );
  }

  var isdestijlloaded = isCssLoaded("De_Stijl.css");
  if (isdestijlloaded) {
    $(".imgcontainer img").unwrap();
    $(".star").remove();
    $(".card").removeClass("card");
    $(".left-side").remove();
    $("#aldinedelf").css("display", "none");
    $(".background-grid").remove();
    $(".block").remove();
    if (
      !document.getElementById("provauno") &&
      !document.getElementById("body-d-id")
    ) {
      $("body").after('<div class="background-grid"></div>');
      $(".background-grid").after('<div class="block" id="square"></div>');
      $(".background-grid").after('<div class="block" id="gold-square"></div>');
      $(".background-grid").after('<div class="block" id="square-3"></div>');
      $(".background-grid").after(
        '<div class="block" id="yellow-square"></div>'
      );
      $(".background-grid").after(
        '<div class="block" id="mini-white-square"></div>'
      );
      $(".background-grid").after(
        '<div class="block" id="blue-square-2"></div>'
      );
      $(".background-grid").after(
        '<div class="block" id="white-square5"></div>'
      );
      $(".background-grid").after(
        '<div class="block" id="place-square2"></div>'
      );
      $(".background-grid").after(
        '<div class="block" id="place-square1"></div>'
      );
    }
    else{
      // $(".block").css("display", "none");
      // $(".background-grid").css("display", "none");
      $(".background-grid").remove();
      $(".block").remove();
    }
  }

  var isaldineloaded = isCssLoaded("Aldine.css");
  if (isaldineloaded) {
    $(".imgcontainer img").unwrap();
    $(".star").remove();
    $(".card").removeClass("card");
    $(".background-grid").remove();
    $(".block").remove();
    $("#aldinedelf").css("display", "block");
    $(".left-side").remove();
  }

  var issettantaloaded = isCssLoaded("anniSettanta.css");
  if (issettantaloaded) {
    $(".decoration-dx").remove();
    $(".star").remove();
    $(".card").removeClass("card");
    $(".decoration-sx").remove();
    $(".left-side").remove();
    $(".imgcontainer img").unwrap();
    $("#aldinedelf").css("display", "none");
    $(".background-grid").remove();
    $(".block").remove();
  }
}
// Call the function on initial page load
handlePageLoad();

$(document).ready(function () {
  // On click of a link in the list
  $("#article-txt-id a").click(function (e) {
    e.preventDefault();
    var fileDaCaricare = $(this).data("file");
    caricaContenuto(fileDaCaricare);
  });
  function caricaContenuto(url) {
    $.ajax({
      url: url,
      type: "GET",
      dataType: "html",
      success: function (data) {
        // Create a new HTML document
        var newDoc = document.implementation.createHTMLDocument();
        newDoc.documentElement.innerHTML = data;
        // Replace the <body> content
        $("body").html(newDoc.body.innerHTML);
        $("#metadata-txt-id")
          .removeClass("metarticle-inv-txt")
          .addClass("metarticle-vis-txt");
        $("#article-txt-id")
          .removeClass("metarticle-vis-txt")
          .addClass("metarticle-inv-txt");
        adjustGridStructure();
        loadMap();
        handlePageLoad();
      },
      error: function (error) {
        console.log("Error loading file: " + error.statusText);
      },
    });
  }
});

$(document).ready(function () {
  // On click of a link in the list
  $("#content-card a").click(function (e) {
    e.preventDefault();
    // Retrieve the URL of the file associated with the link
    var fileDaCaricare = $(this).data("file");
    // Call the function to load the content
    carica(fileDaCaricare);
  });
  function carica(url) {
    $.ajax({
      url: url,
      type: "GET",
      dataType: "html",
      success: function (data) {
        // Create a new HTML document
        var newDoc = document.implementation.createHTMLDocument();
        newDoc.documentElement.innerHTML = data;
        // Replace the <body> content
        $("body").html(newDoc.body.innerHTML);
        // Add or remove classes from the elements
        $("#metadata-txt-id")
          .removeClass("metarticle-vis-txt")
          .addClass("metarticle-inv-txt");
        $("#article-txt-id")
          .removeClass("metarticle-vis-txt")
          .addClass("metarticle-inv-txt");
        $("body").removeAttr("id").attr("id", "body-txt-id");
        adjustGridStructure();
        loadMap();
      },
      error: function (error) {
        console.log("Error loading file: " + error.statusText);
      },
    });
  }
});
$(document).ready(function () {
  // On click of a link in the list
  $("#titlemainp a").click(function (e) {
    e.preventDefault();
    // Retrieve the URL of the file associated with the link
    var fileDaCaricare = $(this).data("file");
    // Call the function to load the content
    caricaf(fileDaCaricare);
  });
  function caricaf(url) {
    $.ajax({
      url: url,
      type: "GET",
      dataType: "html",
      success: function (data) {
        var newDoc = document.implementation.createHTMLDocument();
        newDoc.documentElement.innerHTML = data;
        // Replace the <body> content
        $("body").html(newDoc.body.innerHTML);
        $("body").removeAttr("id").attr("id", "body-main-id");
        $("body").removeClass();
        adjustGridStructure();
        loadMap();
      },
      error: function (error) {
        console.log("Error loading file: " + error.statusText);
      },
    });
  }
});
$(document).ready(function () {
  // On click of a link in the list
  $("#docs a").click(function (e) {
    e.preventDefault();
    // Retrieve the URL of the file associated with the link
    var fileDaCaricare = $(this).data("file");
    // Call the function to load the content
    caricaf(fileDaCaricare);
  });
  function caricaf(url) {
    $.ajax({
      url: url,
      type: "GET",
      dataType: "html",
      success: function (data) {
        var newDoc = document.implementation.createHTMLDocument();
        newDoc.documentElement.innerHTML = data;
        // Replace the <body> content
        $("body").html(newDoc.body.innerHTML);
        $("body").removeAttr("id").attr("id", "body-d-id");
        $("body").removeClass();
        adjustGridStructure();
        loadMap();
      },
      error: function (error) {
        console.log("Error loading file: " + error.statusText);
      },
    });
  }
});
function stylechanger(newCSSFileName) {
  var linkElement = document.getElementById("csstochange");
  var mylink = linkElement.href;
  var parts = mylink.split("/");
  var lastPart = parts.pop();
  if (linkElement && lastPart !== newCSSFileName) {
    if (linkElement) {
      linkElement.href = newCSSFileName;
    }
    handlePageLoad();
  }
}

var circle = document.getElementsByClassName("circle");
var innerBox = document.querySelector(".inner-box");

document.onmousemove = function (event) {
  var x = (event.clientX * 100) / innerBox.clientWidth + "%";
  var y = (event.clientY * 100) / innerBox.clientHeight + "%";

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
    if (
      confirm(
        "CENSORSHIP ALERT! Do you REALLY want to see what's written here?"
      )
    ) {
      changeBackgroundColor();
    }
    alertShown = true;
  }
}

function changeBackgroundColor() {
  var textElements = document.getElementsByClassName("censorship");
  for (var i = 0; i < textElements.length; i++) {
    textElements[i].style.backgroundColor = "transparent";
  }
}

function sections90s() {
  if (isCssLoaded("90s.css")) {
    var textDiv = document.querySelector("div.text");
    if (textDiv) {
      var paragraphs = textDiv.getElementsByTagName("p");
      for (var i = 0; i < paragraphs.length; i++) {
        if (
          paragraphs[i].parentNode.className !== "footnotes" &&
          paragraphs[i].parentNode.className !== "table_section"
        ) {
          if (i % 4 === 0 && paragraphs[i].textContent.trim() !== "") {
            paragraphs[i].classList.add("frontier");
          }
        }
      }
    }
  }
}

function containerfuture() {
  if (isCssLoaded("future.css")) {
    var existingImg = $("img");
    var newDiv = $("<div>");
    newDiv.addClass("imgcontainer");
    existingImg.wrap(newDiv);
  }
}

function loadMap() {
  var mapcontainer = document.getElementById("map");
  if (mapcontainer) {
    var map = L.map("map").setView([34.225727, -77.94471], 4);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap",
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
      fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${content}.json?access_token=${mapboxgl.accessToken}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.features.length > 0) {
            var coordinates = data.features[0].geometry.coordinates;
            var marker = L.marker([coordinates[1], coordinates[0]]).addTo(map);

            marker.bindPopup('<a href="#' + content + '">' + content + "</a>");

            var textToChangeColor = document.querySelectorAll(
              "span.place[id='" + content + "']"
            );

            // Add a click event listener to the marker rivedereeeeeee non va
            marker.addEventListener("click", function () {
              textToChangeColor.forEach(function (element) {
                element.classList.add("nmap");
                var clickCount = marker.options.clickCount || 0;

                // Remove the previously assigned ID
                $(element).removeAttr("id");

                // Set the ID for the current element
                // Find the element at the specified index
                var elementToAssignId =
                  Array.from(textToChangeColor)[clickCount];
                if (elementToAssignId) {
                  elementToAssignId.setAttribute("id", content);
                }

                // Increment the click count for the next click
                marker.options.clickCount = clickCount + 1;
              });
            });
            marker.getPopup().on("remove", function () {
              textToChangeColor.forEach(function (element) {
                element.classList.remove("nmap");
              });
            });
          }
        })
        .catch((error) => console.error(error));
    });
    function loadGeoJSON(spanId, geoJSONUrl) {
      fetch(geoJSONUrl)
        .then((res) => res.json())
        .then((data) => L.geoJSON(data).addTo(map));
    }

    $(document).ready(function () {
      const geoJSONUrls = {
        France:
          "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/regions.geojson",
        India:
          "https://raw.githubusercontent.com/giorgiacrosilla/cacty/main/geojson/geoBoundaries-IND-ADM0.geojson",
        Midwest:
          "https://raw.githubusercontent.com/scdoshi/us-geojson/master/geojson/region/Midwest.geojson",
        Massachussetts:
          "https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/massachusetts.geojson",
        Pennsylvania:
          "https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/pennsylvania.geojson",
        "North America":
          "https://raw.githubusercontent.com/koopjs/geodata/master/north-america.geojson",
        "Northern Europe":
          "https://raw.githubusercontent.com/highcharts/map-collection-dist/master/custom/nordic-countries.topo.json",
        Bretagne:
          "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/regions/bretagne/arrondissements-bretagne.geojson",
        "United States":
          "https://raw.githubusercontent.com/scdoshi/us-geojson/master/geojson/nation/US.geojson",
        Alabama:
          "https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/alabama.geojson",
        Georgia:
          "https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/georgia.geojson",
        Indiana:
          "https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/indiana.geojson",
        Oregon:
          "https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/oregon.geojson",
        "North Carolina":
          "https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/north%20carolina.geojson",
        "South Carolina":
          "https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/south%20carolina.geojson",
        Florida:
          "https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/florida.geojson",
        Mississippi:
          "https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/mississippi.geojson",
        Tennessee:
          "https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/tennessee.geojson",
        Louisiana:
          "https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/louisiana.geojson",
        Virginia:
          "https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/virginia.geojson",
        Connecticut:
          "https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/connecticut.geojson",
        California:
          "https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/california.geojson",
        Texas:
          "https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/texas.geojson",
        "Great Britain":
          "https://raw.githubusercontent.com/giorgiacrosilla/cacty/main/geojson/united-kingdom_.geojson",
        Italy:
          "https://raw.githubusercontent.com/giorgiacrosilla/cacty/main/geojson/italy-detailed-boundary_943.geojson",
        Hungary:
          "https://raw.githubusercontent.com/giorgiacrosilla/cacty/main/geojson/hungary_338.geojson",
        Germany:
          "https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/1_deutschland/1_sehr_hoch.geo.json",
        Russia:
          "https://raw.githubusercontent.com/giorgiacrosilla/cacty/main/geojson/russia_609.geojson",
      };

      placeSpans.forEach(function (span) {
        if (
          span.classList.contains("state") &&
          geoJSONUrls.hasOwnProperty(span.id)
        ) {
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
  var body = document.getElementById("body-txt-id");
  var metarticleList = document.querySelectorAll(".metarticle-vis-txt");

  if (body) {
    if (window.innerWidth < 900) {
      body.classList.remove("grid-normal");
      body.classList.add("grid-s-normal");
    } else {
      body.classList.add("grid-normal");
      body.classList.remove("grid-s-normal");
    }

    if (metarticleList) {
      metarticleList.forEach(function (metarticle) {
        if (metarticle) {
          if (window.innerWidth < 900) {
            body.classList.remove("grid-large");
            body.classList.add("grid-small");
          } else {
            body.classList.remove("grid-small");
            body.classList.add("grid-large");
          }
        }
      });
    }
  }
}
document.addEventListener("DOMContentLoaded", function () {
  adjustGridStructure();
});

window.addEventListener("resize", adjustGridStructure);

function toggleClass(firstId, secondId) {
  var firstEl = document.getElementById(firstId);
  var secondEl = document.getElementById(secondId);
  var body = document.getElementById("body-txt-id");
  if (window.innerWidth > 900) {
    if (firstEl.classList.contains("metarticle-vis-txt")) {
      firstEl.classList.remove("metarticle-vis-txt");
      firstEl.classList.add("metarticle-inv-txt");
      body.classList.remove("grid-large");
      body.classList.add("grid-normal");
    } else {
      if (firstEl.classList.contains("metarticle-inv-txt")) {
        firstEl.classList.remove("metarticle-inv-txt");
        firstEl.classList.add("metarticle-vis-txt");
        body.classList.add("grid-large");
        body.classList.remove("grid-normal");
        if (secondEl.classList.contains("metarticle-vis-txt")) {
          secondEl.classList.remove("metarticle-vis-txt");
          secondEl.classList.add("metarticle-inv-txt");
        }
      }
    }
  } else {
    if (firstEl.classList.contains("metarticle-vis-txt")) {
      firstEl.classList.remove("metarticle-vis-txt");
      firstEl.classList.add("metarticle-inv-txt");
      body.classList.remove("grid-small");
      body.classList.add("grid-s-normal");
    } else {
      if (firstEl.classList.contains("metarticle-inv-txt")) {
        firstEl.classList.remove("metarticle-inv-txt");
        firstEl.classList.add("metarticle-vis-txt");
        body.classList.add("grid-small");
        body.classList.remove("grid-s-normal");
        if (secondEl.classList.contains("metarticle-vis-txt")) {
          secondEl.classList.remove("metarticle-vis-txt");
          secondEl.classList.add("metarticle-inv-txt");
        }
      }
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

$(document).ready(function () {
    $("div[data-name]").on("click", function () {
      var className = $(this).data("name");
      var container = $(this).find("a");
      container.attr("href", "#" + className);
  
      var dataclass = $("." + className);
      var clickCount = container.data("click-count") || 0;
  
      // Remove the previously assigned ID
      $("." + className).removeAttr("id");
  
      // Set the ID for the current element
      var elementToAssignId = dataclass.eq(clickCount);
      elementToAssignId.attr("id", className);
  
      // Increment the click count for the next click
      container.data("click-count", clickCount + 1);
  
      // Rest of your code for handling classes
      if (elementToAssignId.hasClass("person")) {
        elementToAssignId.addClass("stylePerson");
        
            if (clickCount > 0) {
              // Remove 'stylePerson' from the previously clicked element of the same data class rivedereeeeee
              dataclass.eq(clickCount - 1).removeClass('stylePerson');
            } else {
              // Remove 'stylePerson' if a different "div[data-name]" is clicked
              $("div[data-name]").not(this).find("." + className).removeClass('stylePerson');
            }
          
        }
       else if (elementToAssignId.hasClass("event")) {
        // ... (rest of your code for handling events)
      } else if (elementToAssignId.hasClass("date")) {
        // ... (rest of your code for handling dates)
      }
    });
  });
  

// Select all elements with the class 'openbtn'
var buttons = document.querySelectorAll(".openbtn");

// Variable to store the currently open button
var currentlyOpenButton = null;

// Loop through each button and add the click event listener
buttons.forEach(function (btn) {
  btn.addEventListener("click", function handleClick() {
    // Check if the clicked button is the currently open button
    if (btn === currentlyOpenButton) {
      // If it is, close it and set currentlyOpenButton to null
      btn.innerHTML = btn.getAttribute("data-original-html");
      currentlyOpenButton = null;
    } else {
      // If it's either 'Original text A' or 'Original text B', perform action for A or B
      btn.innerHTML =
        '<svg class="custom-svg" xmlns="http://www.w3.org/2000/svg" width="17.828" height="17.828"><path d="m2.828 17.828 6.086-6.086L15 17.828 17.828 15l-6.086-6.086 6.086-6.086L15 0 8.914 6.086 2.828 0 0 2.828l6.085 6.086L0 15l2.828 2.828z"/></svg>';

      // If there's a button already open, close it
      if (currentlyOpenButton && currentlyOpenButton !== btn) {
        currentlyOpenButton.innerHTML =
          currentlyOpenButton.getAttribute("data-original-html");
      }

      // Set the currently open button to the clicked button
      currentlyOpenButton = btn;
    }
  });

  // Store the original text as a data attribute
  btn.setAttribute("data-original-html", btn.innerHTML);
});
