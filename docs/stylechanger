function stylechanger(name) {
        const buttons = document.querySelectorAll(".style-button");
        const buttonName = event.currentTarget.getAttribute("name");
        const styleLink = document.getElementById("style-link");
        if (styleLink.getAttribute("href") === name) {
        return;
        }
        styleLink.setAttribute("href", name);

        if (name === "De_Stijl.css") {
            $("#side-image").remove();
            $("#right-image").remove();
            // $("body").after('<div class="main-container"></div>')
            $("body").after('<div class="background-grid"></div>')
            $(".background-grid").after('<div class="block", id="square"></div>')
            $(".background-grid").after('<div class="block", id="gold-square"></div>')
            $(".background-grid").after('<div class="block", id="square-3"></div>')
            $(".background-grid").after('<div class="block", id="yellow-square"></div>')
            $(".background-grid").after('<div class="block", id="mini-white-square"></div>')
            $(".background-grid").after('<div class="block", id="blue-square-2"></div>')
            $(".background-grid").after('<div class="block", id="white-square5"></div>')
            $(".background-grid").after('<div class="block", id="place-square2"></div>')
            $(".background-grid").after('<div class="block", id="place-square1"></div>')
        } 
        else if (name === "Aldine.css") {
            $("body").before('<img id="right-image" src="https://github.com/giorgiacrosilla/cacty/blob/main/cssfinalimage.png?raw=true")>');
            $("body").before('<img id="side-image" src="https://github.com/giorgiacrosilla/cacty/blob/main/cssfinalimage.png?raw=true")>');
            // $(".main-container").display(none)
            $(".background-grid").display(none)
            $(".block").display(none)

        }
        else if (name ==="90s.css"){
            $("#side-image").remove();
            $("#right-image").remove();
            $(".block").remove()
        }
        else if (name ==="future.css"){
            $("#side-image").remove();
            $("#right-image").remove();
            $(".block").remove()

        }
    }     
            
    </script>
