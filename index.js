//adding items to the list via the input tab
let thisTag = document.querySelector('form')
thisTag.addEventListener('submit', function (e) {
    e.preventDefault()
    insertItems(e.target.items.value)
    thisTag.reset()
})
//creating an element for the new input with a button for purchase and delete
function insertItems(newvalue) {
    let p = document.createElement('p')
    let buyButton = document.createElement('button')
    let deleteButton = document.createElement('button')
    buyButton.addEventListener('click', buyItem)
    deleteButton.addEventListener('click', deleteValueItem)
    buyButton.textContent = 'purchased'
    deleteButton.textContent = 'delete'
    let color = document.createAttribute('style')
    color.value = 'color:black'
    p.setAttributeNode(color)
    p.textContent = `${newvalue}`
    p.appendChild(buyButton)
    p.appendChild(deleteButton)
    console.log((document.querySelector('#listedItems').appendChild(p)))
}


//this is passed to the delete button invoking the whole item to disappear
function deleteValueItem(e) {
    e.target.parentNode.remove()
}
//this is passed to the buy button invoking the item color to change from black to green showing its already purchased
function buyItem(e) {
    e.target.parentNode.style.color = "green"
}
//this is used to create the clear button that deletes the whole list of items 
let lastButton = document.querySelector('input.clear')
lastButton.addEventListener('click', deleteEverything)
function deleteEverything() {
    document.querySelector('#listedItems').remove()
}

