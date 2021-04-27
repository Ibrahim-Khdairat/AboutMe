'use strict'

document.write('This game will test our relationship and how much you know about me !!');
document.write('<br>');
document.write('You have 5 Funny Questions about me . ');
document.write('If you score 5 you are my best friend if you got Zero we should know each other ASAP :)');
document.write('<br>');
document.write('This game will test our relationship and how much you know about me !!');
document.write('<br>');
document.write('<br>');
document.write('You have 5 Funny Questions about me . ');
document.write('<br>');
document.write('<br>');
document.write('If you score 5 you are my best friend if you got Zero we should know each other ASAP :)')
document.write('<br>');
document.write('<br>');

alert('Welcom To My WebSite !!!');
let userName = prompt('Please Enter Your Name !!');
alert('Please Anser the next 6 Quistions About Me!!!');
let mark = 0;
document.write('Does Ibrahim Love Cars ?');
let ans1 = prompt('Does Ibrahim Love Cars ? (yes/y or no/n)').toLowerCase();
if (ans1 == 'yes' || ans1 == 'y') {
        console.log("That's True ");
        alert("That's True ");
        document.write('<br>');

        document.write('Right Answer');
        mark = mark + 1;
}
else {
        console.log("Opps...That's False ");
        alert("Opps...That's False");
        document.write('<br>');

        document.write('Wrong Answer');
}

document.write('<br>');
document.write('<br>');

document.write('Does Ibrahim Love "Mansaf" ?');
let ans2 = prompt('Does Ibrahim Love "Mansaf" ? (yes/y or no/n)').toLowerCase();
if (ans2 == 'yes' || ans2 == 'y') {
        console.log("That's True ");
        alert("That's True ");
        document.write('<br>');

        document.write('Right Answer');
        mark = mark + 1;
}
else {
        console.log("Opps...That's False ");
        alert("Opps...That's False");
        document.write('<br>');

        document.write('Wrong Answer');
}

document.write('<br>');
document.write('<br>');

document.write('Does Ibrahim Love Sleeping ?');
let ans3 = prompt('Does Ibrahim Love Sleeping ? (yes/y or no/n)').toLowerCase();
if (ans3 == 'yes' || ans3 == 'y') {
        console.log("That's True ");
        alert("That's True ");
        document.write('<br>');

        document.write('Right Answer');
        mark = mark + 1;
}
else {
        console.log("Opps...That's False ");
        alert("Opps...That's False");
        document.write('<br>');

        document.write('Wrong Answer');
}

document.write('<br>');
document.write('<br>');

document.write('Does Ibrahim Love Sports ?');
let ans4 = prompt('Does Ibrahim Love Sports ?(yes/y or no/n)').toLowerCase();
if (ans4 == 'no' || ans4 == 'n') {
        console.log("That's True ");
        alert("That's True ");
        document.write('<br>');

        document.write('Right Answer');
        mark = mark + 1;
}
else {
        console.log("Opps...That's False ");
        alert("Opps...That's False");
        document.write('<br>');

        document.write('Wrong Answer');
}

document.write('<br>');
document.write('<br>');

document.write('Does Ibrahim Love Waching Movies ?');
let ans5 = prompt('Does Ibrahim Love Waching Movies ? (yes/y or no/n)').toLowerCase();
if (ans5 == 'yes' || ans5 == 'y') {
        console.log("That's True ");
        alert("That's True ");
        document.write('<br>');

        document.write('Right Answer');
        mark = mark + 1;
}
else {
        console.log("Opps...That's False ");
        alert("Opps...That's False");
        document.write('<br>');

        document.write('Wrong Answer');
}

document.write('<br>');
document.write('<br>');

document.write('Is Ibrahim a single man ?');
let ans6 = prompt('Is Ibrahim a single man ? (yes/y or no/n)').toLowerCase();
if (ans6 == 'yes' || ans5 == 'y') {
        console.log("That's True ");
        alert("That's True ");
        document.write('<br>');

        document.write('Right Answer');
        mark = mark + 1;
}
else {
        console.log("Opps...That's False ");
        alert("Opps...That's False");
        document.write('<br>');

        document.write('Wrong Answer');
}

document.write('<br>');
document.write('<br>');


if (mark == 6) {
        alert('Thanks ' + userName + ', click Ok to Show Your Result !!')
        alert('Your Score is ' + mark + ' , That\'s Awesome ;you Relly Know Alot About Me !!');
        document.write('Your Score is ' + mark + " , That's Awesome ; you Relly Know Alot About Me !!");
}
else if (mark==5)
{
        alert('Thanks ' + userName + ', click Ok to Show Your Result !!')
        alert('Your Score is ' + mark + ' , That\'s close... ;you Know many things About Me !!');
        document.write('Your Score is ' + mark + " , That\'s close... ;you Know many things About Me !!");
}
else if (mark==4)
{
        alert('Thanks ' + userName + ', click Ok to Show Your Result !!')
        alert('Your Score is ' + mark + ' , That\'s good... ;you need to know more About Me !!');
        document.write('Your Score is ' + mark + " , That\'s  good... ;you need to know more About Me !!");
}
else if(mark==3)
{
        alert('Thanks ' + userName + ', click Ok to Show Your Result !!')
        alert('Your Score is ' + mark + ' , That\'s good... ;you need to know more About Me !!');
        document.write('Your Score is ' + mark + " , That\'s  good... ;you need to know more About Me !!");
}

else if(mark==2)
{
        alert('Thanks ' + userName + ', click Ok to Show Your Result !!')
        alert('Your Score is ' + mark + ' , Mmmmmm... you need to know more about me !!');
        document.write('Your Score is ' + mark + " , Mmmmmm... you need to know more about me !!");
}

else if(mark==1)
{
        alert('Thanks ' + userName + ', click Ok to Show Your Result !!')
        alert('Your Score is ' + mark + " , Don't be Dissapointed, You'll know more about me Inshallah !!");
        document.write('Your Score is ' + mark + " , Don't be Dissapointed, You'll know more about me Inshallah !! !!");
}

else if(mark==0)
{
        alert('Thanks ' + userName + ', click Ok to Show Your Result !!')
        alert('Your Score is ' + mark + ' , Opps.. you Really dno\'t know any thing about me , Don\'t be Dissapointed !!');
        document.write('Your Score is ' + mark + " , TOpps.. you Really dno\'t know any thing about me , Don\'t be Dissapointed!!");
}
