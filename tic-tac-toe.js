let choice=document.querySelectorAll(".choice");
console.log(choice);
let messageBox=document.querySelector("#message-box")
let result=document.getElementById('result');

let playerScore=document.getElementById('playerScore');
let playerVal=0;
let compScore=document.getElementById('computerScore');
let compVal=0;
let totalMatch=0;
let totalMatchText=document.getElementById('total-matches-score');

let resetBtn=document.getElementById('reset');

function randomNumber(){
    return Math.floor(Math.random()*3);
}
 let moves=["Rock","Paper","Scissor"];

choice.forEach((item,index  )=>{
    item.addEventListener("click",(event)=>{

        resetBtn.style.visibility="visible";

        totalMatch++;
        totalMatchText.innerText=totalMatch;

        let playerMove=event.target.id;
        // playerMove.style.cssText=`color:Red`;
        
        let compMove=randomNumber();
        compMove=moves[compMove];
        // compMove.style.cssText=`color:Green`;

        if(playerMove==compMove){
            result.innerText="Draw";
           
        }

        else if(playerMove=="Rock"&&compMove=="Paper" || playerMove=="Paper" && compMove=="Scissor" || playerMove=="Scissor" && compMove=="Rock" ){
            result.innerText=`Your choice: ${playerMove} || Computer choice: ${compMove}`
            compVal++
            compScore.innerText=compVal;
        }
        else{
           
            playerVal++;
             result.innerText=`Your choice: ${playerMove} || Computer choice: ${compMove}`;
            playerScore.innerText=playerVal;

        }


        messageBox.style.cssText=`visibility:visible`;
        console.log(`Player Move: ${playerMove}`);
        console.log(`CompMove: ${compMove}`);

        

       
    })
    
})

resetBtn.addEventListener("click",()=>{
    totalMatch=0;
    totalMatchText.innerText=totalMatch
    playerVal=0;
    playerScore.innerText=playerVal;
    compVal=0;
    compScore.innerText=compVal
    messageBox.style.cssText=`visibility:hidden`
    resetBtn.style.visibility="hidden";
    

})