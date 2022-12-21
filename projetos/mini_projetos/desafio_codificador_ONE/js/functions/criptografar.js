document.getElementById("encrypt").addEventListener("click", function () {
    let texto = document.getElementById("msg").value

    function criptografar(texto) {
        if(texto == texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "")) {
            texto = texto.replaceAll('e', 'emp')
                            .replaceAll('i', 'izp')
                                .replaceAll('a', 'alp')
                                    .replaceAll('o', 'olp')
                                        .replaceAll('u', 'ulp')
            return texto.toLowerCase();
        }

        else alert("Só pode letras sem acentos!!!")
    }
    
    document.getElementById("final-text").value = criptografar(texto)
})