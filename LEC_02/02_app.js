
//without event listener-->

let ans=document.getElementsByTagName("h1");//output of this code is array of all h1 tag.
console.log(ans);//print the array.


// ans[1].innerHTML="mirai school of technology";//second element value change. this change automatically when page is load no event is happen there.




//with inline event listener:-->
let i=0;
function dispaly(){
    if(i%2==0){
        let h1_tag=document.querySelector("#lorem22");
        h1_tag.innerHTML="mirai school of tecnology";
    }
    else{
        let h1_tag=document.querySelector("#lorem22");
        h1_tag.innerHTML="Hellow World 2";
    }
    i++;
}




let j=0;
//with event listerner in js file::-->
let button_click_me=document.querySelector("#click_me");
button_click_me.addEventListener("click",()=>{
    if(j%2==0){
        let h1_tag=document.querySelector("#lorem_id");
        h1_tag.innerHTML="mirai school of tecnology";
    }
    else{
        let h1_tag=document.querySelector("#lorem_id");
        h1_tag.innerHTML="Hellow World 2";
    }
    j++;
})

//H.W-->
// calculator,todo,dark theme