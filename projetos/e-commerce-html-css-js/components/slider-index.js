let btn_previous = window.document.getElementById('previous')
let btn_next = window.document.getElementById('next')
let position_slider = 4
let initial_item = 0
let category = window.document.getElementsByClassName('category')

btn_next.addEventListener('click', next)
btn_previous.addEventListener('click', previous)

function next() {

    if(position_slider<=category.length){
        console.log('position_slider:'+position_slider)
        console.log("A função next() foi acionada!")

            for(let i = initial_item; i<=position_slider; i++){

                if(i<category.length){
                    
                    if(i==initial_item){
                        category[i].id = 'invisible'
                        console.log(`${i} se tornou invisivel`)
                    }

                    if(i<=position_slider && i!=initial_item){
                        category[i].id = 'visible'
                        console.log(`${i} se tornou visivel`)
                    }
                }

                console.log(i)

            }

            console.log(`A conta final de espaçamento é: ${position_slider-initial_item}`)

            if(position_slider-initial_item == 4){
                initial_item++
                if(position_slider < category.length){
                    position_slider++
                }
                if(position_slider == category.length){
                    position_slider++
                }
            }
        }
    }

    function previous() {

        let final_item = category.length
        let final_item_coluna = position_slider
        let item_inicial_coluna = initial_item

        console.log("o item final é: " + final_item)
        console.log("o item final da coluna é: " + final_item_coluna)
        console.log("o item inicial da coluna é: " + item_inicial_coluna)

        for(let i = initial_item; i<=position_slider; i++){

            if(i<category.length){
                
                if(i>=initial_item && i!=position_slider){
                    category[i].id = 'visible'
                    console.log(`${i} se tornou visivel`)
                }

                if(i==position_slider){
                    category[i].id = 'invisible'
                    console.log(`${i} se tornou invisivel`)
                }
            }

            console.log(i)

        }

        
        if(position_slider-initial_item == 4){

            position_slider--

                if(position_slider < category.length){
                    position_slider--
                }
                if(position_slider == category.length){
                    position_slider--
                }
            }
    }
            