let useritem = document.getElementById("userContentInput") 
let allcontent = document.getElementById("home")
let searchInput = document.getElementById("searchInput")
let items = []

if (localStorage.getItem("todolist") != null) {
    items = JSON.parse(localStorage.getItem("todolist"))
    displayItems()
}


function additem() {
    items.push(useritem.value)
    console.log(items);
    localStorage.setItem("todolist", JSON.stringify(items))
    displayItems()

}

function displayItems() {
    let cartona = ``;
    for (let i = 0; i < items.length; i++) {
        cartona = cartona + `
    <div id="homeContent"
      class="home-item mb-2 rounded-pill text-dark mx-auto w-50 bg-danger d-flex justify-content-between align-items-center">
      <p id="itemContent" class="m-0 p-0">Content: ${items[i]}</p>
      <i class="fa-sharp fa-solid fa-trash " onclick="dele(${i})" ></i>
    </div>`
    }
    allcontent.innerHTML = cartona
}
function dele(ind){
items.splice(ind,1)

localStorage.setItem("todolist", JSON.stringify(items))

displayItems()

}


searchInput.addEventListener("input" , function( e ){
 searchitem(e.target.value)
})


function searchitem(searchValue) {
    let cartona = ``;
    for (let i = 0; i < items.length; i++) {
        if(items[i].toLowerCase().includes(searchValue.toLowerCase())){
        cartona = cartona + `
    <div id="homeContent"
      class="home-item mb-2 rounded-pill text-dark mx-auto w-50 bg-danger d-flex justify-content-between align-items-center">
      <p id="itemContent" class="m-0 p-0">Content: ${items[i]}</p>
      <i class="fa-sharp fa-solid fa-trash " onclick="dele(${i}) " ></i>
    </div>`
    }
}
    allcontent.innerHTML = cartona
}