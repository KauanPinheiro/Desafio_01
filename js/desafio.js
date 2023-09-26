
const metros = {
    n1 : 20,
    n2: 100,

    Qui : (x,y) => {
        this.n1 = x;
        this.n2 = y = 1000;
        
        return this.n1 / this.n2    //this.n2 = 1000
    },
    cen : (x,y) => {
        this.n1 = x;
        this.n2 = y = 100;

        return this.n1 * this.n2    //this.n2 = 100
    },
    mil : (x,y) => {
        this.n1 = x ;
        this.n2 = y = 1000;

        return this.n1 * this.n2        //this.n2 = 1000
    }
}



//objeto quilometro ->

const quilometros = {
        n1 : 20,
        n2: 100,
    
        metro :  (x,y) => {
            this.n1 = x;
            this.n2 = y = 1000;
            
            return this.n1 * this.n2    //this.n2 = 1000
        },
        cen : (x,y) => {
            this.n1 = x;
            this.n2 = y = 100000;
    
            return this.n1 * this.n2    //this.n2 = 100000
        },
        mil : (x,y) => {
            this.n1 = x;
            this.n2 = y = 10000000;
    
            return this.n1 * this.n2        //this.n2 = 10000000
        }
    }



// corpo do centimentros ->

const centimetros = {
        n1 : 20,
        n2: 100,
    
        metro :  (x,y) => {
            this.n1 = x;
            this.n2 = y = 100;
            
            return this.n1 / this.n2    //this.n2 = 100
        },
        Qui: (x,y) => {
            this.n1 = x;
            this.n2 = y = 100000;
    
            return this.n1 / this.n2    //this.n2 = 100000
        },
        mil : (x,y) => {
            this.n1 = x;
            this.n2 = y = 10;
    
            return this.n1 * this.n2        //this.n2 = 10
        }
    }


//corpo do milimetros ->

const milimetros = {
        n1 : 20,
        n2: 100,
    
        metro :  (x,y) => {
            this.n1 = x;
            this.n2 = y = 1000;
            
            return this.n1 / this.n2    //this.n2 = 1000
        },
        Qui: (x,y) => {
            this.n1 = x;
            this.n2 = y = 1000000;
    
            return this.n1 / this.n2    //this.n2 = 1000000
        },
        cen : (x,y) => {
            this.n1 = x;
            this.n2 = y = 10;
    
            return this.n1 / this.n2        //this.n2 = 10
        }
    }


//variavis
let visor;

visor = document.getElementById("#result").innerHTM


//função do botão

function botao(){

    let bd1, bd2, bd3, bd4, stop, home ;

bd1  = document.querySelector("#dig").value     
stop = document.querySelector("#de").value
home = document.querySelector("#para").value
console.log(bd4)    
console.log(stop)
console.log(home)

}


//estrutura de decisão
switch (){
    case 1 :
}

