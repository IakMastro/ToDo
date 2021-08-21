function add_new_item() {
    let node = document.createElement('li')
    node.appendChild(document.createTextNode(document.getElementById('new_item').value))
    document.querySelector('ul').appendChild(node)
}