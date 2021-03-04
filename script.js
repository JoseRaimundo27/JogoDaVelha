
function start(){
    const quadrados = document.querySelectorAll(".quadrados");
    const botao = document.querySelector(".botao");
    // Array das posições:
    var v = ["","","",
                     "","","",
                     "","","" 
];
    
    
    
    const arraySimbolos = ["O", "X"];
    var vez = 0; //0 começa com o computador, 1 para o player;

    // Jogando:
    quadrados.forEach((elements,i)=>{
        elements.addEventListener("click",()=>{
            if(v[i] === ""){
                v[i]= "O";
                computerJogada();
                vitoria();
                
                
            }
        })
    })
    
    //Chamando/Criando função reset:
    botao.addEventListener("click", reset);
    function reset(){
        v = ["","","","","","","","",""];
        escritora()
        computerJogada()
        
        
    };
    
    
    //Cria computer jogada:
    function computerJogada(){
        let random = Math.floor(Math.random() * 9);

            if(v[random] === ""){
                v[random] = arraySimbolos[1];
                escritora()
                vez = 1;
                
            }else{
                computerJogada();
            }
            
        }
        
    //Chamando funções:
    computerJogada()
    
    //Cria função que transcreve:
    function escritora(){
        for(let i = 0; i<9; i++){
            if(v[i] === "O"){
                quadrados[i].innerHTML = "o";
                

            }else if(v[i] === "X"){
                quadrados[i].innerHTML = "x";
                
            }else if(v[i] === ""){
                quadrados[i].innerHTML = "";
            }
        }
    }
 
    
    
    //Função que analisa a vitoria:
    function vitoria(){
    //Verificação do player:
        
        //Verificação se o player ganhou em linha horizontal:
        if((v[0] === v[1]) && (v[1] === v[2]) && (v[1] !="" && v[1] != "X") ){
            window.alert("Você Ganhou!!!");
            reset();
            
        }else if((v[3] === v[4]) && (v[4] === v[5]) && (v[3] !="" && v[3] != "X") ){
            window.alert("Você Ganhou!!!");
            reset();
        
        }else if((v[6] === v[7]) && (v[8] === v[7]) && (v[7] !="" && v[7] != "X") ){
            window.alert("Você Ganhou!!!");
            reset();
        }

        //Verificação se o player ganhou em linha vertical:
        if((v[0] === v[3]) && (v[3] === v[6]) && (v[0]!= "" && v[0] != "X")){
            window.alert("Você ganhou");
            reset();

        }else if((v[1] === v[4]) && (v[4] === v[7]) && (v[4]!= "" && v[4] != "X")){
            window.alert("Você ganhou!!!");
            reset();
            
        }else if((v[2] === v[5]) && (v[5] === v[8]) && (v[2]!= "" && v[2] != "X")){
            window.alert("Você ganhou!!!");
            reset();

        }
        //Verificação se o player ganhou nas diagonais:
        if((v[0] === v[4]) && ( v[4] === v[8]) && (v[0] != "" && v[0] != "X")){
            window.alert("Você ganhou!!!");
            reset();

        }else if((v[2] === v[4]) && (v[4] === v[6]) && (v[4]!= "" && v[4] != "X")){
            window.alert("Você ganhou!!!");
            reset();

        }
//--------------------------------------------------------------------------------------------------------    
    //Verificação do computador:
        
        //Verificação se o computador ganhou em linha horizontal:
        if((v[3] === v[4]) && (v[4] === v[5]) && (v[3] !="" && v[3] != "O") ){
            window.alert("Computador ganhou!!!");
            
            
        }else if((v[0] === v[1]) && (v[1] === v[2]) && (v[1] !="" && v[1] != "O") ) {
            window.alert("Computador ganhou!!!");
            
            
        }else if((v[6] === v[7]) && (v[8] === v[7]) && (v[7] !="" && v[7] != "O") ){
            window.alert("Computador ganhou!!!");
            
        }

        //Verificação se o computador ganhou em linha vertical:
        if((v[0] === v[3]) && (v[3] === v[6]) && (v[3] !="" && v[3] != "O")){
            window.alert("Computador ganhou!!!");
            

        }else if((v[1] === v[4]) && (v[4] === v[7]) && (v[1] !="" && v[1] != "O") ){
            window.alert("Computador ganhou!!!");
            
            
        }else if((v[2] === v[5]) && (v[5] === v[8]) && (v[2]!= "" && v[2] != "O")){
            window.alert("Computador ganhou!!!");
            

        }

        //Verificação se o computador ganhou nas diagonais:
        if((v[0] === v[4]) && ( v[4] === v[8]) && (v[0] != "" && v[0] != "O")){
            window.alert("Computador ganhou!!!");
        

        }else if((v[2] === v[4]) && (v[4] === v[6]) && (v[4]!= "" && v[4] != "O")){
            window.alert("Computador ganhou!!!");
            

        }
//--------------------------------------------------------------------------------------------------------        
        
            
        
    }
}










// criaremos uma fun ção chamada jogar que recebe a posição clicada e se ele não tem valor, retornará um valor
// para a posição
window.addEventListener("load", start);


