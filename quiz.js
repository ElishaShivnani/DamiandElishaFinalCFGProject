alert('Hi, Welcome to the last CFG Web Development Session')



let myName = prompt('Before we get started, what is your name?')
let Welcome = prompt('Great! Nice to meet you ' + myName +'.\ntype "yes" if you enjoyed this course!')

if(Welcome == "yes"||Welcome == "Yes"||Welcome == "Y"|| Welcome == "y"){
    alert('That is great to hear - let us see what you remember')
    
}else{
    alert(`That's a shame ): Anyways, let's do a quiz`)
}
const quiz = prompt('Okay lets start off easy...which coding language did I use to create this quiz element?')
if (quiz == 'Javascript' || quiz == 'javascript'){
    alert ('Good job! you are right')
}else{ 
    alert('Sorry, you are wrong!' ) 
}
 const question2 = prompt (`Now a quick question about our instructors..who's famous feline made an appearance during our coding sessions?`)
 if (question2 == 'cal' || question2 == 'Cal' || question2 == 'Cailean'){
    alert (`Well done! You've been paying close attention`)
}else{ 
    alert(`Sorry, you're wrong! Come on, you had a one in three chance!` ) 
}
const lastquestion = prompt (`Last question! What's the passsword to see the rest of our website? (Hint - the answer is cfgisawesome)`)
if (lastquestion == 'Cfgisawesome' || lastquestion == 'cfgisawesome'){
    alert (`Nice one! Come on in :)`)
}else{ 
    alert(`Incorrect! We literally gave you the answer! But we'll still let you in` ) 
}