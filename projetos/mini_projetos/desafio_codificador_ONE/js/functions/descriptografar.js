document.getElementById("decrypt").addEventListener("click", function () {
    
    let texto = document.getElementById("msg").value
    function descriptografa(texto) {
        
            if(texto == texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "")) {
                texto = texto.replaceAll('e', 'enter')
                                .replaceAll('i', 'imes')
                                    .replaceAll('a', 'ai')
                                        .replaceAll('o', 'ober')
                                            .replaceAll('u', 'ufat');
                
                return texto.toLowerCase()
            } else alert("Só pode letras sem acentos!!!")
        }
    
    document.getElementById("final-text").value = descriptografa(texto)
})