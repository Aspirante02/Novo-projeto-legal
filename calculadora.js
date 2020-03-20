var n1 =0
var n2 = 0
var operacao=""
var conta=0
var numeros = []
var string = []
var tamanho = 10
var num=''
var num2=''
function botao (botao) {
    //Define um limite de caracteres que podem ser inseridos no array.
    if(numeros.length < tamanho){
        //Verifica se o caractere é um número para poder atribuí-lo a variável "num"
        if(botao != 'CE' && botao!='/' && botao!='*' && botao!='-' && botao!='+' && botao!='.' && botao!='='){
            document.querySelector('.tela').value += botao
            num+=botao
    }
        //Verifica se o caractere é igual a "+" e se a variável num é diferente de "vazia" pois só assim irá inserir o devido valor dentro do array!
        if(botao=='+' || botao == '/' || botao =='*' || botao == '-' || botao =='+' ){
            if(num!=''){
                numeros.push(Number(num))
            }
        }
     }

    
    //Se o botão for igual a "CE" ele limpa todas as váriaveis e arrays da calculadora.
     if(botao =='CE'){
         operacao=""
         num=''
         conta = 0 
        for(var i=0;numeros.length;i++) {
            numeros.pop()
        }   
        document.querySelector('.tela').value = ""
        }
       if(botao == '+' || botao == '-' || botao == "/" || botao == "*"){
            num=''     
           operacao = botao
           //Verifica se o array for maior que zero para pode adicionar a operação na tela.
           if(numeros.length > 0){ 
           document.querySelector('.tela').value += operacao
           }
       }
    
        //Se o botão for igual a "=" ele atribuí o segundo valor no array.
        if(botao == '=' && num!=''){
            numeros.push(Number(num))
        }
        //Se houver mais de dois valores no array e operação for diferente de "vazia", ele exibe o resultado na tela.
        
      
       if(botao == '='){
           if(operacao !="" && numeros.length > 1){
               if(conta ==0){
           switch(operacao){
                case '+' : for(var i =0;i<numeros.length;i++){conta+=numeros[i]}
                break;
                case '-' : conta = numeros[0]
                for(var i = 1; i < numeros.length;i++){conta-=numeros[i]}
                break;
                case '/' : conta = numeros[0] / numeros[1]
           }
        }
           document.querySelector('.tela').value = conta
        }else{
            window.alert("Invalid Format!")
            num=''
        }
        }
       
    

    }
       
      
       



   

   

   
   
   
   
