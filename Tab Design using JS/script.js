document,addEventListener("DOMContentLoaded",
function(){ 
    let container=this.document.querySelector(".container")
    let header=this.document.querySelector(".header")
    let menuItem=container.querySelectorAll(".header > div")
    let tabBody= container.querySelector(".body ")
    let tabBodyElements= container.querySelectorAll(".body > div")
    let indicator=container.querySelector(".indicator >div")



    menuItem.forEach((tab ,index)=>{

        // console.log(tab)
        tab.addEventListener("click", function () {
            header.querySelector(".active").classList.remove("active");
            tab.classList.add("active");
            indicator.style.left= `${index * 25}%`;

            tabBody.querySelector(".active").classList.remove("active");
            tabBodyElements[index].classList.add("active")
        })

    })

}
   
)