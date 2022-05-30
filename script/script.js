const dropdown = document.getElementsByClassName("drop-button");

for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", () => {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        }
        else {
            dropdownContent.style.display = "block";
        }
    });
}
const loadnewpage = (naampagina) => {

    setInterval(() => {
        location.replace("./" + naampagina + ".html")
    }, 500);
}

window.onscroll = function() {myFunction()};

var header = document.getElementById("poep");
var sticky = header.offsetTop;
console.log(sticky);
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function openFoto() {

}

