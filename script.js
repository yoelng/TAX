var salary,tax,interest;


function getdata(){
    this.salary = document.getElementById('salary').value;
    this.tax = document.getElementById('tax').value;
    this.interest = document.getElementById('interest').value;
    this.validatedata();
}

function validatedata(){
    if(this.salary < 1000 && this.tax < 5 && this.interest <1000 ){
        alert('invalid input')
        return;
    }
    this.finalresult();
}

function finalresult(){
    if(this.slary > 1000 && this.tax > 5 && this.interest > 1000){
        alert('salary is good')
    }
    else{
        alert('Excellent salary')
    }
}
