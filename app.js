let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

let turnO = true; //playerX,playerO
const winPatterns =
[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
const resetGame =()=>
    {
        turnO =true ;
        enableboxes();
        msgcontainer.classList.add("hide");

    }
boxes.forEach((box) =>
    {
        box.addEventListener("click", () => {
            console.log("box was clicked");
            if(turnO){
                box.innerText = "O";
                turnO=false;
            }
            else{
                box.innerText="X";
                turnO=true;
            }
            box.disabled = true;
            checkwinner();

        });
    }

);
const disableboxes =()=>
    {
        for(let box of boxes){
            box.disabled= true;
        }
    }
    const enableboxes =()=>
        {
            for(let box of boxes){
                box.disabled= false;
                box.innerText="";
            }
        }
const showWinner = (winner)=>
    {
        msg.innerText =`Congratulations , Winner is ${ winner}`;
        msgcontainer.classList.remove("hide");
        disableboxes();
    }
const checkwinner=()=>
    {
        for(pattern of winPatterns){
            // console.log(pattern[0],pattern[1],pattern[2]);
            // console.log(
            //     boxes[pattern[0]].innerText,
            //     boxes[pattern[1]].innerText,
            //     boxes[pattern[2]].innerText
            // );
            let pos1 =  boxes[pattern[0]].innerText;
            let pos2 =  boxes[pattern[1]].innerText;
            let pos3 =  boxes[pattern[2]].innerText;
            if(pos1 !="" && pos2 != "" && pos3 !=     ""){
              if(pos1==pos2 && pos2 == pos3) 
                {
                    console.log("Winner",pos1);

                    showWinner(pos1);
                } 
            }

        }
    };
    resetbtn.addEventListener("click",resetGame);