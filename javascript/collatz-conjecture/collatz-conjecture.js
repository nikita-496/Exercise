export const steps = (integer) => {
   //В случае передачи не натуральных чисел 
    if (integer <= 0) {
      throw 'Only positive numbers are allowed'
    }

   let run = 0;  
   while (integer !== 1) {
    (integer % 2) ? integer = 3*integer +1  : integer /= 2
    run ++;
   }
   
   return run
};


