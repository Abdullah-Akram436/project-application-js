var card = document.getElementById("container2")

window.addEventListener("load", function () {

if (card) {
    var getPosts = JSON.parse(localStorage.getItem("posts")) || []
    for (var value of getPosts) {
        card.innerHTML += `<div class="card">
        <h2>${value.title}</h2>
        <p>${value.description}</p>
        <div class="buttons">
            <button class="edit" onclick="edit(${value.id})">EDIT</button>
            <button class="delete" onclick="del(${value.id} , this)">DELETE</button>
        </div>
    </div>`
    }

}

})

function addpost() {
    var title = document.getElementById("title")
    var description = document.getElementById("des")

    if(!title.value || !description.value){
        alert("Please fill all fields")
        return
    }


    var id;
    var getPosts = JSON.parse(localStorage.getItem("posts")) || []

    if (getPosts.length > 0) {
        id = getPosts[0].id + 1
    } else {
        id = 1
    }


    var post = `<div class="card">
    <h2>${title.value}</h2>
    <p>${description.value}</p>
    <div class="buttons">
        <button class="edit" onclick="edit(${id})">EDIT</button>
        <button class="delete" onclick="del(${id})">DELETE</button>
    </div>
</div>`

card.innerHTML = post + card.innerHTML

var obj = {
    id: id,
    title: title.value,
    description: description.value
}

getPosts.unshift(obj)
localStorage.setItem("posts", JSON.stringify(getPosts))

title.value = ""
description.value = ""

}

function del(id, e){
    var getPosts = JSON.parse(localStorage.getItem("posts"))
    var index = getPosts.findIndex(function (value) {
        if (value.id === id) return true
    })
    getPosts.splice(index, 1)
    localStorage.setItem("posts", JSON.stringify(getPosts))

    e.parentNode.parentNode.remove()
}


function edit(id, e) {
    var indexNum;
    var getPosts = JSON.parse(localStorage.getItem("posts"))
    var post = getPosts.find(function (value, index) {
        if (value.id === id) {
            indexNum = index
            return true
        }
    })
    var editTitle = prompt("Edit title", post.title)
    var editDesc = prompt("Edit description", post.description)
    const editObj = {
        id: post.id,
        title: editTitle,
        description: editDesc
    }
    getPosts.splice(indexNum, 1, editObj)
    localStorage.setItem("posts", JSON.stringify(getPosts))

    var h5Title = e.parentNode.parentNode.parentNode
    var pDesc = e.parentNode.parentNode
    h5Title.innerHTML = editTitle
    pDesc.innerHTML = editDesc


}