// in the above I wrote a for loop
// below is a while loop

for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    }
    else if (i % 3 == 0) {
        console.log('Fizz');
    }
    else if (i % 5 == 0) {
        console.log('Buzz');
    }
                            //one of the trickiest parts was remembering where to put the 'else, else if, if' statements.

    else {
        console.log(i);
    }
}

//here is the while loop
i = 1
while (i <= 100) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz')
    }

    else if (i % 3 == 0) {
        console.log('Fizz')
    }
    
    else if (i % 5 == 0) {
        console.log('Buzz')
    }

    else{
        console.log(i)
    }

    i++;
}

//although i just successfully wrote 2 functions that are different but do the same thing.
// I will need more practice before I full grasp the whole concept. 
//This was, however, great practice.