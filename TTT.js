let boxes=document.querySelectorAll(".box");           //it will give an array containing all the buttons 
let reset=document.querySelector(".resetbtn");
let p=document.querySelector("p");
let turnO=true;
const winpattern=[    //2D array
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
boxes.forEach((box)=>{      //multiple elements pr ek sath eventlistener lgane ke liye foreach loop ko use krna pdta hai 
    box.addEventListener("click",()=>{
        if(turnO===true){
            box.innerHTML="O";
            turnO=false;
        }
        else{
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled=true;   //to make a box disable after one click 
        checkwinner();
    })
   
})

const checkwinner=()=>{
   for(let pattern of winpattern){
    // console.log(pattern);
    // console.log(pattern[0],pattern[1],pattern[2]);
    //console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
    //console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;

    if(pos1val!=""&&pos2val!=""&&pos3val!=""){
        if(pos1val===pos2val&&pos2val===pos3val){
            p.innerText=`Congratulations,winner is ${pos1val}`;
            p.style.visibility="visible";
            disable();
        }
    }
    reset.addEventListener("click",()=>{
         pos1val="";
         pos2val="";
         pos3val="";
    })
   }
}

let disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

let resetfun=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        p.innerText="";
    }
}
reset.addEventListener("click",resetfun);

// boxes.addEventListener("click",()=>{  //without foreach it will be applicable on single box only
//     if(turnO===true){
//         boxes.innerText="O";
//         turnO=false;
//     }
//     else{
//         boxes.innerText="X";
//         turnO=true;
//     }
// })