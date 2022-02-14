'use strict';

console.log('greetings user');
let user = prompt('Thank you for visiting my page, whats your name?');
console.log('hi '+user)

let q1 = prompt('do you know me?').toLowerCase;

if(q1==='yes'|| q1==='y'){
alert('Great! but I bet you dont know these little facts about me?');
}else if (q1==='no'||q1==='n'){
  alert('No? Well heres a few little fun facts about me.')
}
// console.log (user+' I asked if you knew me and your answer was '+q1)

let q2 = prompt('Did you know this is my second try at Codefellows 201 course?').toLowerCase;

if(q2==='yes'|| q2==='y'){
alert(user+' Im so glad were in this class together and hope that we get to know each other better.');
}else if (q2==='no'||q2==='n'){
  alert(user+' Its been two years since I took my first course and Im nervous because I hope that its truly like riding a bicicle.')
}
// console.log (user+' Im so glad we are taking this course together ')

let q3 = prompt('do you think I had prior coding or programming experience prior to attending codefellows?').toLowerCase;
if(q3==='yes'|| q3==='y'){
  alert(user+' Yes, actually I did. I had taken some courses during college and even self taught myself a little of HTML during the myspace days.');
  }else if (q3==='no'||q3==='n'){
    alert(user+' Its been so long since I took CIS course in college, but I did have prior experience with programming languages prior to attending CF')
  }
  // console.log (user+' now you know a bit more about me and my journey to Codefellows.')