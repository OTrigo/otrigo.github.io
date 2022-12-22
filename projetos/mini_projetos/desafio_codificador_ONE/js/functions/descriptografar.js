document.getElementById("decrypt").addEventListener("click", function () {
    
    let texto = document.getElementById("msg").value
    function descriptografa(texto) {
        
            if(texto == texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "")) {
                texto = texto.replaceAll('enter', 'e')
                                .replaceAll('imes', 'i')
                                    .replaceAll('ai', 'a')
                                        .replaceAll('ober', 'o')
                                            .replaceAll('ufat', 'u');
                
                return texto.toLowerCase()
            } else alert("Só pode letras sem acentos!!!")
        }
    
    document.getElementById("final-text").value = descriptografa(texto)
})