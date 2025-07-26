if(document.readyState='complete'){
    let ft = document.querySelector(".main_content");
    ft.classList.remove("oneft")
    
    
    let ftf = document.querySelector(".loader-main");
    ftf.classList.add("loader-rem");
}else{
    let fist = document.querySelector(".main_content").classList.add("oneft");
}