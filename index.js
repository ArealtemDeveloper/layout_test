let modal = document.querySelector("#popup")
let contactsBtn = document.querySelector("#modalOpen")
let burger = document.querySelector("#burger")
let navList = document.querySelector("#list")

let modalOpen = (e) => {
    e.stopPropagation()
    modal.classList.remove("close")
}
document.addEventListener("click", (e) => {
    const click = e.composedPath().includes(modal);
    if( !click ) {
        modal.classList.add("close")
    }
})
contactsBtn.addEventListener("click", modalOpen)

let burgerToggle = (e) => {
    e.stopPropagation()
    navList.classList.contains('active') ? navList.classList.remove("active") : navList.classList.add("active");
    
}

document.addEventListener("click", (e) => {
    const click = e.composedPath().includes(navList);
    if( !click ) {
        navList.classList.remove("active")
    }
})

burger.addEventListener("click", burgerToggle)
