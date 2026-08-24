class BankAccount {
  #balance = 1000;

  deposit(amount) {
    this.#balance += amount;
  }
  
  withdraw(amount){
    if(this.#balance>=amount)this.#balance-=amount;
    else console.log("Insufficent Balance");
    
  }
  getBalance() {
    return this.#balance;
  }

}

const account = new BankAccount();

account.deposit(500);

account.withdraw(200);

console.log(account.getBalance()); 



class animal{

    #a=90;
    b=99;
    c=76;

    eat(){
        console.log("Eating.....");   
    }
    run(){
        console.log("Running....");
        
    }
}

class dog extends animal{

    bark(){
        console.log("Barking....");
    }
}

let cat=new animal;
console.log(cat.b);
// console.log(cat.a);//private data is not access outside directly
console.log(cat.c);
cat.eat();
cat.run();

let choccco=new dog;
console.log(choccco.b);
// console.log(choccco.a);//private data not inherit ...
console.log(choccco.c);
choccco.run();
choccco.eat();
choccco.bark();

