let button = document.querySelectorAll(".button");
let endbutton = document.getElementById('end');
let result =  document.getElementById('winner');
endbutton.disabled = true;
const winsound = new Audio('../tictactoe/sounds/cash.mp3');
const loosesound = new Audio('../tictactoe/sounds/aww.mp3');
let array = [0,1,2,3,4,5,6,7,8];



for(let i=0; i<button.length;i++){
    button[i].addEventListener("click",()=>{
        button[i].innerHTML = '0';
        endbutton.disabled = false;
        automaticmove(i);
        row();
        column();
        diagonal();
        disablekey();
    }); 

}



endbutton.addEventListener("click",reset);
function reset(){
   for(let i=0; i<button.length;i++){
        button[i].innerHTML = '#';
        endbutton.disabled = true;
        array = [0,1,2,3,4,5,6,7,8];
        result.innerHTML = '';
    }; 
}

function automaticmove(para){
   let raj =  array.indexOf(para);
    array.splice(raj,1);
   if(array.length != 0){
    let j = array[Math.floor(Math.random()*array.length)];
    button[j].innerHTML = '*';
   let raja =  array.indexOf(j);
   array.splice(raja,1); 
   }
   
}

function row(){
    for(let i=0; i<9; i = i+3){
            if(button[i].innerHTML == button[i+1].innerHTML && button[i+1].innerHTML == button[i+2].innerHTML && button[i].innerHTML =='0' )
            {
                result.innerHTML = 'winner';
            }
            else if(button[i].innerHTML == button[i+1].innerHTML && button[i+1].innerHTML == button[i+2].innerHTML && button[i].innerHTML =='*' )
            {
                result.innerHTML = 'looser';
            }
        }
       
    }

function column(){
    for(let j=0; j<3; j++){
            if(button[j].innerHTML == button[j+3].innerHTML && button[j+3].innerHTML == button[j+6].innerHTML && button[j].innerHTML =='0' )
            {
                result.innerHTML = 'winner';
            }
            else if(button[j].innerHTML == button[j+3].innerHTML && button[j+3].innerHTML == button[j+6].innerHTML && button[j].innerHTML =='*' )
            {
                result.innerHTML = 'looser';
            }
        }
       
    }

function diagonal(){

        if(button[0].innerHTML == button[4].innerHTML && button[4].innerHTML == button[8].innerHTML)
        {
            if(  button[0].innerHTML == '0' ){
                result.innerHTML = 'winner';
            }

            else if(  button[0].innerHTML == '*' ){
                result.innerHTML = 'looser';
            }       
         }


        else if(button[2].innerHTML == button[4].innerHTML && button[4].innerHTML == button[6].innerHTML )
         {
             if(  button[2].innerHTML == '0' ){
                result.innerHTML = 'winner';
             }
 
             else if(  button[2].innerHTML == '*' ){
                result.innerHTML = 'looser';
             }       
          }
    }

function disablekey(){
    if( result.innerHTML == 'winner'){
        for(let i=0; i<9;i++)
        {
            button[i].disabled = true;
        }
       winsound.play(); 
       result.style.color = 'green';
       result.style.fontSize = '70px';
    }
    if( result.innerHTML == 'looser'){
        for(let i=0; i<9;i++)
        {
            button[i].disabled = true;
        }
       loosesound.play(); 
       result.style.color = 'red';
       result.style.fontSize = '70px';
    }
}


 function start(){
    for(let i=0; i<9;i++)
    {
        button[i].disabled = false;
        button[i].innerHTML = '#';
        endbutton.disabled = true;
        array = [0,1,2,3,4,5,6,7,8];
        result.innerHTML = '';
    }
 }