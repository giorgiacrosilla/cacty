

document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);
});

var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


function ShowMetadata() {
    const articles = document.querySelectorAll('.testo_metadata');
    articles.forEach(element => {
        if (element.id === 'firstarticle') {
            document.getElementById("s").innerHTML =
                '<h2>Article Metadata</h2><ul><li>title: The Terror is Born. </li><li>author</li><li>date</li></ul>';
        }
    })
};

var currentSidebar = null; // Keep track of the currently open sidebar

function toggleSidebar(sidebarId) {
    var sidebar = document.getElementById(sidebarId);
    var mainContent = document.getElementById("main");

    if (currentSidebar === sidebar) {
        // If the clicked sidebar is already open, close it
        sidebar.style.width = "0";
        sidebar.style.height = "0"; // Set the height to 0 when closing the sidebar
        mainContent.style.marginLeft = "0";
        currentSidebar = null; // Update the currently open sidebar
    } else {
        // Close the currently open sidebar (if any)
        if (currentSidebar !== null) {
            currentSidebar.style.width = "0";
            currentSidebar.style.height = "0";
        }

        // Open the clicked sidebar
        sidebar.style.width = "25vw";
        sidebar.style.height = "100vh"; // Set the height to full viewport height when opening the sidebar
        mainContent.style.marginLeft = "25vw";
        currentSidebar = sidebar; // Update the currently open sidebar
    }
}


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
