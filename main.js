const items = []

function addItem() {
    const itemName = document.querySelector("#item").value

    const item = {
        name: itemName,
        checked: true
    }

    items.push(item)

    document.querySelector("#item").value = ""
}