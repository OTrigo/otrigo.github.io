document.getElementById("copy").addEventListener("click", function () {

    let copyText = document.getElementById("final-text")

    copyText.select()
    copyText.setSelectionRange(0, 5000)

    navigator.clipboard.writeText(copyText.value)

    alert( "O texto foi copiado!" )
})