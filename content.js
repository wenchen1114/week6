
let tag = document.getElementsByTagName('p');
let as = document.getElementsByTagName('a');
let divs = document.getElementsByTagName('div');

function changePos(a){
    a.style.top = Math.floor(Math.random()* document.body.clientHeight);
    a.style.left = Math.floor(Math.random()* document.body.clientWidth);
}
for (let i = 0; i< tag.length; i++){
    
   // tag[i].style.top = Math.floor(Math.random()* document.body.clientHeight);
    //tag[i].style.left = Math.floor(Math.random()* document.body.clientWidth);
    tag[i].onmouseover = function(){
        console.log("fired");
        //tag[i].style.color = 'red';
        tag[i].style.position = 'absolute';
        // let newTop = Math.floor(Math.random()* document.body.clientHeight);
        // let newLeft = Math.floor(Math.random()* document.body.clientWidth);
        tag[i].style.top = Math.floor(Math.random()* document.body.clientHeight)+50;
        tag[i].style.left = Math.floor(Math.random()* document.body.clientWidth)+50;
    };
}

for (let j = 0; j< as.length; j++){
    
    //as[j].style.top = Math.floor(Math.random()* document.body.clientHeight);
    //as[j].style.left = Math.floor(Math.random()* document.body.clientWidth);
    as[j].onmouseover = function(){
        as[j].style.position = 'absolute';
        as[j].style.top = Math.floor(Math.random()* document.body.clientHeight)+50;
        as[j].style.left = Math.floor(Math.random()* document.body.clientWidth)+50;
    };
    }

for (let k = 0; k< divs.length; k++){
    
    //as[j].style.top = Math.floor(Math.random()* document.body.clientHeight);
    //as[j].style.left = Math.floor(Math.random()* document.body.clientWidth);
    divs[k].onmouseover = function(){
        divs[k].style.position = 'absolute';
        divs[k].style.top = Math.floor(Math.random()* document.body.clientHeight)+50;
        divs[k].style.left = Math.floor(Math.random()* document.body.clientWidth)+50;
    };
    }
