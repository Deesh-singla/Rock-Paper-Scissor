    let h_end=document.createElement('h1');

    let userPoints=0,computerPoints=0;

    let gameover=false;

    let rock = document.getElementById('rock')
    let paper = document.getElementById('paper')
    let scissor = document.getElementById('scissor')
    let userChoice='';

    rock.addEventListener("click", () => {
        if(!gameover){
        userChoice = "rock";
        playGame();
        }
    })

    paper.addEventListener("click", () => {
        if(!gameover){
        userChoice = "paper";
        playGame();
        }
    })

    scissor.addEventListener("click", () => {
        if(!gameover){
        userChoice = "scissor";
        playGame();
        }
    })


    function playGame(){
        if(userPoints==5 || computerPoints==5){
            if(userPoints>computerPoints) {
                h_end.textContent='Congratulations! You won the Game';
            }   
            else if(userPoints==computerPoints){
                h_end.textContent="It's a Tie";
            }
            else {
                h_end.textContent="Computer Won The Game";
            }
            document.body.append(h_end);
            gameover=true;
            return ;
        }
        let h=document.createElement('h5');
        let p=document.createElement('p');
        let c=document.createElement('h5');
        let u=document.createElement('h5')
        
    let computerChoice;

    let random=Math.floor(Math.random()*3)+1;

    if(random==1) computerChoice='rock';
    else if(random==2) computerChoice='paper';
    else computerChoice='scissor';

    if(userChoice==computerChoice) {
        c.textContent=`computer Choice is ${computerChoice}`;
        u.textContent=`Your Choise is ${userChoice} `;
        p.textContent="It's a Tie";
        h.innerHTML=`Current Score : User ${userPoints} / Computer ${computerPoints}<hr>`
    }
    else if(userChoice=='rock' && computerChoice=='paper') {
        computerPoints++;
        c.textContent=`computer Choice is ${computerChoice}`;
        u.textContent=`Your Choise is ${userChoice} `;
        p.textContent="Computer Won This Round!";
        h.innerHTML=`Current Score : User ${userPoints} / Computer ${computerPoints}<hr>`
    } 
    else if(userChoice=='rock' && computerChoice=='scissor'){
        userPoints++;
        c.textContent=`computer Choice is ${computerChoice}`;
        u.textContent=`You Chooce ${userChoice} `;
        p.textContent="Player Won This Round!";
        h.innerHTML=`Current Score : User ${userPoints} / Computer ${computerPoints}<hr>`
    }
    else if(userChoice=='paper' && computerChoice=='rock') {
        userPoints++;
        c.textContent=`computer Choice is ${computerChoice}`;
        u.textContent=`Your Choise is ${userChoice} `;
        p.textContent="Player Won This Round!";
        h.innerHTML=`Current Score : User ${userPoints} / Computer ${computerPoints}<hr>`
    }
    else if(userChoice=='paper' && computerChoice=='scissor') {
        computerPoints++;
        c.textContent=`computer Choice is ${computerChoice}`;
        u.textContent=`Your Choise is ${userChoice} `;
        p.textContent="Computer Won This Round!";
        h.innerHTML=`Current Score : User ${userPoints} / Computer ${computerPoints}<hr>`
    }
    else if(userChoice=='scissor' && computerChoice=='paper') {
        userPoints++;
        c.textContent=`computer Choice is ${computerChoice}`;
        u.textContent=`Your Choice is ${userChoice} `;
        p.textContent="Player Won This Round!";
        h.innerHTML=`Current Score : User ${userPoints} / Computer ${computerPoints}<hr>`
    }
    else if(userChoice=='scissor' && computerChoice=='rock') {
        computerPoints++;
        c.textContent=`computer Choice is ${computerChoice}`;
        u.textContent=`Your Choise is ${userChoice} `;
        p.textContent="Computer Won This Round!";
        h.innerHTML=`Current Score : User ${userPoints} / Computer ${computerPoints}<hr>`
        
    }
    document.body.append(u);
    document.body.append(c);
    document.body.append(p);
    document.body.append(h);
    
    }
