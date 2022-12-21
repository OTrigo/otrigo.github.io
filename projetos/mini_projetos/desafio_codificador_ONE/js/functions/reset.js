document.getElementById("reset").addEventListener("click", function () {

    let reset = document.getElementById("final-text").value = " ";
    document.getElementById("msg").value = " ";

    alert("o texto foi Limpo: " + reset);
})