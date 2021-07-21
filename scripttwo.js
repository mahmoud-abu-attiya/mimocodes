let td = document.querySelectorAll(".td div");
td.forEach( (element)=> {
    element.addEventListener("click",(e)=> {
        td.forEach((nn)=>{
            nn.classList.remove("active")
        })
        e.target.classList.add("active")
    })
});

let Aactives = document.querySelectorAll(".ancors a");
Aactives.forEach((active)=>{
        active.addEventListener("click", (e)=>{
            Aactives.forEach((re)=>{re.classList.remove("active")})
            e.target.classList.add("active");
            if(e.target.classList.contains("pri")){
                document.querySelector("main").classList.remove("trf");
                document.querySelector(".half:nth-child(2)").classList.add("op");
                document.querySelector(".half:nth-child(1)").classList.remove("op");
                document.querySelector(".bba").classList.remove("d");
            }
            else{
                document.querySelector("main").classList.add("trf");
                document.querySelector(".half:nth-child(2)").classList.remove("op");
                document.querySelector(".half:nth-child(1)").classList.add("op");
                document.querySelector(".bba").classList.add("d");
            }
    });
});

let btnsPackage = document.querySelectorAll(".btns div");
btnsPackage.forEach((pa)=>{
    pa.addEventListener("click" , (e)=>{
        if(!e.target.firstElementChild.classList.contains("down")){
            let arrows = document.querySelectorAll(".btns div i");
            arrows.forEach((arrow) =>{
                arrow.classList.remove("down")
            })
            e.target.firstElementChild.classList.add("down");
        }
    })
})


let one =document.getElementById("one");
let two =document.getElementById("two");
let three =document.getElementById("three");

btnsPackage[0].addEventListener("click",(e)=>{
    one.classList.remove("hidden");
    two.classList.add("hidden");
    three.classList.add("hidden");
    
})
btnsPackage[1].addEventListener("click",(e)=>{
    one.classList.add("hidden");
    two.classList.remove("hidden");
    three.classList.add("hidden");
    
})
btnsPackage[2].addEventListener("click",(e)=>{
    one.classList.add("hidden");
    two.classList.add("hidden");
    three.classList.remove("hidden");
    
})

if (window.location.href.indexOf('#') != -1 && window.location.hash == "#Dashboard"){
    document.querySelector(".ancors .dash").click()
}else{
    window.location.hash = "#Pricing"
    document.querySelector(".ancors .pri").click()
}

