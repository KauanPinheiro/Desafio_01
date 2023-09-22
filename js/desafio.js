
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
        this.n1 = x;
        this.n2 = y = 1000;

        return this.n1 * this.n2        //this.n2 = 1000
    }
}

let test ,resp,fin,gold;

//testando o objeto metros
test = metros.mil()
    console.log(`o resultado é ${test }`)


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
//testando o objeto qui
resp = quilometros.metro()
    console.log(`O resultado é ${resp}`)


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

//testando o obejto cen
fin = centimetros.metro()
    console.log(`O resultado é ${fin}`)


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

//testando milietros
gold = milimetros.metro()
    console.log(`O resultado é ${gold       }`)