let logo = document.querySelector(".logo");

logo.addEventListener("click" , (e)=>{
    document.getElementById("secondary").classList.remove("show");
    document.getElementById("home").classList.add("show");
    document.querySelector("body").classList.add("body-bg");
    document.querySelectorAll(".ancors a").forEach((a)=>{
        a.classList.remove("active");
    })
})


let td = document.querySelectorAll(".td div");
td.forEach( (element)=> {
    element.addEventListener("click",(e)=> {
        td.forEach((nn)=>{
            nn.classList.remove("active")
        })
        e.target.classList.add("active")
    })
});

let pri = document.querySelector(".ancors-home .pri");
let dash = document.querySelector(".ancors-home .dash");
let photo = document.getElementById("animated")

pri.addEventListener("click" , (e)=>{
    document.getElementById("secondary").classList.add("show");
    document.getElementById("home").classList.remove("show");
    document.querySelector("body").classList.remove("body-bg");
    // document.querySelector(".ancors .pri").click()
    // open pricing
    document.querySelector(".half:nth-child(2)").classList.add("op");
    document.querySelector(".half:nth-child(1)").classList.remove("op");
    document.querySelector(".bba").classList.remove("d");
    document.querySelector(".ancors .pri").classList.add("active");
});

dash.addEventListener("click" , (e)=>{
    document.getElementById("secondary").classList.add("show");
    document.getElementById("home").classList.remove("show");
    document.querySelector("body").classList.remove("body-bg");
    // document.querySelector(".ancors .dash").click();
    document.querySelector(".half:nth-child(2)").classList.remove("op");
    document.querySelector(".half:nth-child(1)").classList.add("op");
    document.querySelector(".bba").classList.add("d");
    document.querySelector(".ancors .dash").classList.add("active");

});

let Aactives = document.querySelectorAll(".ancors a");
Aactives.forEach((active)=>{
    active.addEventListener("click", (e)=>{
        Aactives.forEach((re)=>{re.classList.remove("active")})
            e.target.classList.add("active");
            if(e.target.classList.contains("pri")){
                document.querySelector(".half:nth-child(2)").classList.add("op");
                document.querySelector(".half:nth-child(1)").classList.remove("op");
                document.querySelector(".bba").classList.remove("d");
                if(!document.querySelector(".btns div i").classList.contains("down")){
                    document.querySelector(".btns div").click()
                }
                
                document.querySelector("#one .producer-img").style.opacity = "0"
                photo.classList.remove('car-an')
                setTimeout(()=>{
                    photo.classList = "car-an-pri"
                }, 0)
                
                setTimeout(()=>{
                    document.querySelector("#one .producer-img").style.opacity = "1"
                    photo.classList.add("car-an");
                }, 300);
                
                
            }
            else{
                document.querySelector(".half:nth-child(2)").classList.remove("op");
                document.querySelector(".half:nth-child(1)").classList.add("op");
                document.querySelector(".bba").classList.add("d");
                if(document.querySelector(".btns div i").classList.contains("down")){
                    document.querySelector(".wightcar img").classList = "secondary"
                    photo.classList.remove('car-an')
                setTimeout(()=>{
                    photo.classList = "car-an-dash"
                }, 0)
                setTimeout(()=>{
                    document.querySelector(".wightcar img").classList = ""
                    photo.classList.add("car-an");
                }, 300);
                }else{
                    photo.classList = "car-an-dash car-an"
                }
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

