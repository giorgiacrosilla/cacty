

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


document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([51.505, -0.09], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 15,
        attribution: '© OpenStreetMap',
    }).addTo(map);

    var marker = L.marker([51.5, -0.09]).addTo(map);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
});



function ShowMetadata() {
    const articles = document.querySelectorAll('.testo_metadata');
    const svgElement = document.getElementById('firstsvg');
    articles.forEach(element => {
        if (element.id === 'firstarticle') {
            document.getElementById("s").innerHTML =
                '<h2>Article Metadata</h2><ul><li>title: The Terror is Born. </li><li>author</li><li>date</li></ul>';
        }
    })

    if (svgElement) {
        // Find the text element with id="metadata" inside the SVG
        const textElement = svgElement.querySelector('#metadata');

        // Update the text content of the text element
        if (textElement) {
            document.getElementById("s").innerHTML =
                '<h2>Article Metadata</h2><ul><li>title: The Terror is Born. </li><li>author</li><li>date</li></ul>';
        }
    }
};

var currentSidebar = null;

function toggleSidebar(sidebarId) {
    var sidebar = document.getElementById(sidebarId);
    var mainContent = document.getElementById("main");
    var bside = document.getElementById('bside');

    if (currentSidebar === sidebar) {
        // If the clicked sidebar is already open, close it
        sidebar.style.width = "0";
        sidebar.style.height = "0"; // Set the height to 0 when closing the sidebar
        bside.style.marginLeft = "0";
        currentSidebar = null; // Update the currently open sidebar
    } else {
        // Close the currently open sidebar (if any)
        if (currentSidebar !== null) {
            currentSidebar.style.width = "0";
            currentSidebar.style.height = "0";
        }

        // Open the clicked sidebar
        sidebar.style.width = "25vw";
        sidebar.style.height = "100vh"; 
        bside.style.marginLeft = "27vw";// Set the height to full viewport height when opening the sidebar
        currentSidebar = sidebar; // Update the currently open sidebar
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



