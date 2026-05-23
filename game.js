

// **** function for computer that return rock,paper,scissor 

function getComputerChoice() {
    let r = Math.floor(Math.random() * 3);

    if (r === 0) {
        return "rock";
    } else if (r === 1) {
        return "paper";
    } else {
        return "scissor";
    }
}

// let computerChoice=getComputerChoice();

// **** Get Human choice 

function getHumanChoice(){
    let h=prompt("Enter the valid :'rock','scissor','paper' ");
    return h;
}

//  let humanChoice=getHumanChoice();



// ****  function playround that takes user input as parameter

function playRound(){
    let humanScore=0;
    let computerScore=0;
    
    console.log("You have allotted 5 Choice and points with higher would WIN!");
     
    // console.log(humanChoice);
    for(let i=1;i<=5;i++){

        let computerChoice=getComputerChoice();
        let humanChoice=getHumanChoice();
        humanChoice=humanChoice.toLowerCase();

        

    if(humanChoice=="rock" && computerChoice=="rock"){
        console.log("Tie Up! "+i+" round");
    }else if(humanChoice=="scissor" && computerChoice=="scissor"){
        console.log("Tie Up! "+i+" round");
    }else if(humanChoice=="paper" && computerChoice=="paper"){
        console.log("Tie Up! "+i+" round");
    }


    if(humanChoice=="rock" && computerChoice=="scissor"){
        ++humanScore;
        console.log("You Win! "+i+" Where "+ humanChoice+" beats "+ computerChoice);


    }else if(humanChoice=="scissor" && computerChoice=="rock"){
        ++computerScore;
        console.log("Computer Win! "+i+" Where "+ computerChoice+" beats "+ humanChoice);

    }else if(humanChoice=="paper" && computerChoice=="rock"){
        ++humanScore;
         console.log("You Win! "+i+" Where "+ humanChoice+" beats "+ computerChoice);

    }else if(humanChoice=="rock" && computerChoice=="paper"){
        ++computerScore;
        console.log("Computer Win! "+i+" Where "+ computerChoice+" beats "+ humanChoice);

    }else if(humanChoice=="scissor" && computerChoice=="paper"){
        ++humanScore;
         console.log("You Win! "+i+" Where "+ humanChoice+" beats "+ computerChoice);

    }else if(humanChoice=="paper" && computerChoice=="scissor"){
        ++computerScore;
        console.log("Computer Win! "+i+" Where "+ computerChoice+" beats "+ humanChoice);

    }
}  

    if(humanScore > computerScore){
         console.log("You Win! ");
    // console.log("You Win! "+ humanChoice+" beats "+ computerChoice);
}else  if(computerScore > humanScore){
    // console.log("Computer Win! "+ computerChoice+" beats "+ humanChoice);
    console.log("Computer Win! ");
}else{
    console.log("Tie Up! ");
}
}

playRound();

