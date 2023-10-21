
/*
var circle = document.getElementsByClassName("circle");
document.onmousemove = function () {
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    //event.clientX => get the horizontal coordinate of the mouse
    //event.clientY => get the Vertical coordinate of the mouse
    //window.innerWidth => get the browser width
    //window.innerHeight => get the browser height

    for (var i = 0; i < 2; i++) {
        circle[i].style.left = x;
        circle[i].style.top = y;
        circle[i].style.transform = "translate(-" + x + ",-" + y + ")";
    }
};

*/
document.addEventListener("DOMContentLoaded", function () {
var map = L.map('map').setView([51.505, -0.09], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

setInterval(function () {
    map.invalidateSize();
 }, 100);    


});




function openDiv(firstId, secondId) {
    var firstEl = document.getElementById(firstId);
    var secondEl = document.getElementById(secondId);
    var body = document.getElementById('body-txt-id');
    if (firstEl.classList.contains("metarticle-vis-txt")) {
        firstEl.classList.remove("metarticle-vis-txt");
        firstEl.classList.add("metarticle-inv-txt");
       body.style.gridTemplateAreas = '" nav nav" " button main" " footer footer"'; 
        body.style.gridTemplateColumns = "10% 90%";
    } else {
        if(firstEl.classList.contains("metarticle-inv-txt")){
            firstEl.classList.remove("metarticle-inv-txt")
        }
        firstEl.classList.add("metarticle-vis-txt"); 
        body.style.gridTemplateAreas = '"nav nav nav" "sidebar button main" "footer footer footer"';
        body.style.gridTemplateColumns = "20% 10% 70%";
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


function buttonStyle(thirdId, thirdClass, fourthId, fourthClass) {
    var firstEl = document.getElementById('metadata-txt-id');
    var secondEl = document.getElementById('article-txt-id');
 
    if (firstEl) {
        if (firstEl.classList.contains("metarticle-vis-txt")) {
            document.getElementById(thirdId).classList.add(thirdClass);
            if(document.getElementById(fourthId).classList.contains(fourthClass)){
                document.getElementById(fourthId).classList.remove(fourthClass);   
            }
        } else if (firstEl.classList.contains("metarticle-inv-txt")) {
            if ( document.getElementById(thirdId).classList.contains(thirdClass)) {
            document.getElementById(thirdId).classList.remove(thirdClass);
        }
        }
    }   
    if (secondEl) {
        if (secondEl.classList.contains("metarticle-vis-txt")) {
            document.getElementById(fourthId).classList.add(fourthClass);
        }
        else if (secondEl.classList.contains("metarticle-inv-txt")) {
            if ( document.getElementById(fourthId).classList.contains(fourthClass)) {
            document.getElementById(fourthId).classList.remove(fourthClass);
        }
        }
    }
}


/*codice che controlla quale sia il CSS*/

function isCssLoaded(filename) {
    const stylesheets = document.styleSheets;
    for (let i = 0; i < stylesheets.length; i++) {
      const stylesheet = stylesheets[i];
      if (stylesheet.href && stylesheet.href.endsWith(filename)) {
        return true;
      }
    }
    return false;
  }
  
 /* function insertQuotes() {
    var blockquoteElements = document.querySelectorAll('blockquote');
    if (blockquoteElements && isCssLoaded("anniSettanta.css")) {
        console.log(blockquoteElements)
        blockquoteElements.forEach(function (blockquote) {
        console.log("va bene")
      var img = document.createElement('img');
      img.src = 'quot-sx.png';
      img.classList.add('q-symbol');
      blockquote.parentNode.insertBefore(img, blockquote);
      console.log("finito")
     
        });
    }
  }*/
  function insertQuotesEnd() {
    var blockquoteElements = document.querySelectorAll('blockquote');
    if (blockquoteElements.length > 0 && isCssLoaded("anniSettanta.css")) {
      blockquoteElements.forEach(function (blockquote) {
        var img = document.createElement('img');
        img.src = 'quot-dx.png';
        img.classList.add('q-symbol');
        blockquote.appendChild(img);
      });
    }
  }
  function insertQuotesBeg() {
    var blockquoteElements = document.querySelectorAll('blockquote');
    if (blockquoteElements.length > 0 && isCssLoaded("anniSettanta.css")) {
      blockquoteElements.forEach(function (blockquote) {
        var img = document.createElement('img');
        img.src = 'quot-sx.png';
        img.classList.add('q-symbol');
        var container = document.createElement('div');
        container.appendChild(img);

        while (blockquote.firstChild) {
          container.appendChild(blockquote.firstChild);
        }
        blockquote.appendChild(container);
      });
    }
  }
  
  
  
  
  
  window.onload = function () {
    insertQuotesEnd();
    insertQuotesBeg();
  };