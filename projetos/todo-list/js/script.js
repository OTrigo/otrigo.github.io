const btn_createItem = window.document.getElementById('create-item')
const itemList = window.document.getElementById('list')
let itemValue = window.document.getElementById('itemValue')
let btnDelete = window.document.getElementsByClassName('delete')

btn_createItem.addEventListener('click', createItem)

function createItem(){
    let item = document.createElement('div')
    let btnItem = document.createElement('button')
    let textItem = document.createTextNode(itemValue.value)

    btnItem.innerText = 'Excluir'    
    btnItem.className = 'delete'
    item.className = "item-list"
    
    item.appendChild(btnItem)
    item.appendChild(textItem)

    console.log(item)

    itemList.appendChild(item)
    buttonDeleteFunction()
}

function deleteItem(){
    this.parentElement.remove() //this representa o botão
    console.log(this)
}

function buttonDeleteFunction(){
    for (let i = 0; i <= btnDelete.length; i++) {

        btnDelete[i].addEventListener("click", deleteItem)
        
    }
}

//this é usado quando a função é criada para trabalhar 
//com um valor especificado em outro local
//, nesse caso, chamamos a função para trabalhar 
//com o valor do botão dentro do laço de repetição.