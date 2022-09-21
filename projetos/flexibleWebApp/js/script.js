    let html = window.document.getElementById('webApp')
imageCounter = 0

    function changeBackColor(color = 'none'){
        if(color == 'pink'){
            html.style.background = "rgb(255, 85, 113)"
        } else if(color == 'sakurapink'){
            html.style.background = 'pink'
        }else if(color == 'brown'){
            html.style.background = "rgb(51, 25, 7)"
        }else{
            html.style.background = color
        }
    }

    function changeTextColor(color = 'none'){
        if(color == 'pink'){
            html.style.color = "rgb(255, 85, 113)"
        } else if(color == 'sakurapink'){
            html.style.color = 'pink'
        }else if(color == 'brown'){
            html.style.color = "rgb(51, 25, 7)"
        }else{
            html.style.color = color
        }
    }

    function createTittle(){
        let userTittle = prompt('Diga o título que deseja colocar no app...')
        if(userTittle != null){
            let tittle = document.createElement('div')
            tittle.class = 'tittle-app'
            tittle.innerHTML = `<h1>${userTittle}</h1>`
            tittle.style.fontSize = '2vh'
            console.log('O título foi criado...')

            html.appendChild(tittle)
        }
    }

    function createParagraph(){
        let userParagraph = prompt('Digite o parágrafo')
        if(userParagraph != null){
            let paragraph = document.createElement('p')
            paragraph.class = 'paragraph-app'
            paragraph.innerText = userParagraph
            paragraph.style.FontSize = '1vh'
            console.log('O parágrafo foi criado...')

            html.appendChild(paragraph)
        }
    }

    function createLorem(){
        const lorem = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae mollitia earum consequatur pariatur ut aperiam optio dignissimos possimus, sit cum eos facilis aspernatur magnam ad vel amet dolore, non perspiciatis!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae mollitia earum consequatur pariatur ut aperiam optio dignissimos possimus, sit cum eos facilis aspernatur magnam ad vel amet dolore, non perspiciatis!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae mollitia earum consequatur pariatur ut aperiam optio dignissimos possimus, sit cum eos facilis aspernatur magnam ad vel amet dolore, non perspiciatis!'
        html.innerHTML += lorem
    }
    
    function createImage(event){

        imageCounter++

        imageUrl = URL.createObjectURL(event.target.files[0]);
        imageElement = document.createElement('img');
        imageElement.className = 'image-app'
        imageElement.style.height = '200px'
        imageElement.style.width = '200px'
        imageElement.id = `image${imageCounter}`
        imageElement.src = imageUrl

        html.appendChild(imageElement)
    }

    function reset() {
        html.innerHTML = ''
    }

//Essa versão funciona com base no evento onclick no html, posso desenvolver um protótipo utilizando mais o addEventListener, que é um método mais elegante e suja menos o HTML.