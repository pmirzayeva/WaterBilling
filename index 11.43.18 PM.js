class WaterBilling{
        maxMeter = 999999999;
        gallonToMeter = 10;
        startingMeter=null;
        endingMeter=null;
        customer=null;
        amount=null;
        usedWater=null;
        

        ask(){

        this.customer=prompt(
            "Enter your customer code (r - residential, c - commercial, i - industrial").toLowerCase()

        if(this.customer!=="r"&&this.customer!=="c"&&this.customer!=="i"){
            alert("Customer code is invalid. Please, enter r, c or i.")
            return
        }else{
            this.startingMeter=+prompt("Please enter the starting indicator of the meter (only positive integer)")

            if(this.startingMeter>this.maxMeter||this.startingMeter<0||isNaN(this.startingMeter)){
                alert("The starting indicators of the meter cannot be greater than 999999999 or negative!")
                return
            
                 }else{
                this.endingMeter=+prompt("Please enter the ending indicator of the meter (only positive integer)")
            
                if(this.endingMeter<0||this.endingMeter>this.maxMeter||isNaN(this.endingMeter)){
                alert("The ending indicators of the meter cannot be greater than 999999999 or negative!")    
                return
                }
                }
                }
        }

        getGallonByMeters(){
             if(this.endingMeter>this.startingMeter){
                this.usedWater=(this.endingMeter-this.startingMeter)/this.gallonToMeter
             }else if(this.endingMeter<this.startingMeter){
                this.usedWater=(this.maxMeter-this.startingMeter+this.endingMeter)/this.gallonToMeter
             }else{
                this.usedWater=0
             }
        }

        calculatingBill(){
            this.getGallonByMeters()
            if(this.customer=="r"){
                this.amount=this.usedWater*0.0005+5.0
            }else if(this.customer=="c"){
                if(this.usedWater<=4000000){
                    this.amount=1000.0
                }else if(this.usedWater>4000000){
                    this.amount=1000.0+(this.usedWater-4000000)*0.00025
                }
            }else if(this.customer=="i"){
                if(this.usedWater<=4000000){
                    this.amount=1000.0
                }else if(this.usedWater<=10000000){
                    this.amount=2000.0
                }else if(this.usedWater>10000000){
                    this.amount=2000.0+(this.usedWater-10000000)*0.00025
                }
            }
        }

        getAccurateMessage (){
            return `
            Customer code: ${this.customer}
            Staring meter reading: ${this.startingMeter}
            Ending meter reading: ${this.endingMeter}
            Gallons of water used: ${this.usedWater} gallon
            Amount billed: $ ${this.amount}`;
        }

    }


    const user=new WaterBilling()
    user.ask()
    user.calculatingBill()
    alert(user.getAccurateMessage())

    console.log(user);


