// To automatic close Navbar 
function myFunction(x) {
    if (x.matches) { 
        const navLinks = [].slice.call(document.querySelectorAll('.nav-link'))
        const menuToggle = document.getElementById('navbarNavAltMarkup')

        var bsCollapse = new bootstrap.Collapse(menuToggle, {
            toggle: false
        })

        navLinks.forEach((l) => {
            l.addEventListener('click', () => { bsCollapse.toggle() })
        })
    } else {
    }
}

var x = window.matchMedia("(max-width: 990px)")
myFunction(x) 
x.addListener(myFunction)


document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll("input[type=text]");
    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function(e) {
            e.target.setCustomValidity("This field can not be blank.");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("This field can not be blank.");
            }
        };
        elements[i].oninput = function(e) {
            e.target.setCustomValidity("");
        };
    }
})

