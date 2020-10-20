/* 
console.log('Hello from JS file. I am located in different file.');
alert('ALERT 1: I am loaded now');     //ok

if(confirm('Do you want to proceed?') == true ){    //ok and cancel
    alert('CONGRATULATIONS!!! You are selected...')
} else {
    alert('Oopss..... Not this time.')
}
*/

var age = prompt('Please enter you age')
if (age >= 18){
   // alert('Your age is ' + age + '. There fore you are eliogible to vote.')
   document.getElementById('voteStatus').innerHTML = 'You are valid to vote. //From div and innerhtml'
  
} else {
    // alert('Wait for '  +  18 - age + 'more years to vote')
    document.getElementById('voteStatus').innerHTML = 'You are NOT valid to vote. //From div and innerhtml'
}
