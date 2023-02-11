
// Your Code Here
async function main(){

    let response = await fetch ('http://localhost:3001/listBooks')
    let book = await response.json()

    book.forEach(renderBooks)
}

function renderBooks(book){

    let root = document.getElementById('root')
    let listBooks = document.createElement('li')
    let qty = document.createElement('input')
    let saveButton = document.createElement('button')

    listBooks.innerHTML = `${book.title}`
    qty.calue = ('value', `${book.qty}`)
    saveButton.textContent = 'Save'

    saveButton.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                id: book.id,
                quantity: qty.value
            })
        })
    })

    root.append(listBooks)
    listBooks.append(qty, saveButton)
}

main()