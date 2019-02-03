
function fizzBuzz(num) {
    var answer =""
    
        if(num % 3 == 0 && num % 5 == 0){
            
                answer = `FizzBuzz`;
          
          
        }else if(num % 3 == 0  ){
            if(num % 10 == 5 || parseInt(num / 10 ) == 5){
                answer = `Buzz`;
            }else{
                answer = `Fizz`;
            }
           
        }else if(num % 5 == 0  ){
            if(num % 10 == 3 || parseInt(num / 10) == 3){
                answer = `Fizz`;
            }else{
                answer = `Buzz`;
            }
           
        }else if(num % 10 == 3 || parseInt(num / 10) == 3){
            answer = `Fizz`;
        }else if(num % 10 == 5 || parseInt(num / 10 ) == 5){
            answer = `Buzz`;
        }else{
            answer = String(num)
        }
    
    return answer ;

} 

module.exports = fizzBuzz;
