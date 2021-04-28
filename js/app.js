'use strict'

document.write('This game will test our relationship and how much you know about me !!');
document.write('<br>');
document.write('You have 8 Funny Questions about me . ');
document.write('<br>');
document.write('If you score 8 you are my best friend if you got Zero we should know each other ASAP :)');
document.write('<br>');
document.write('<br>');
document.write('<br>');


alert('Welcom To My WebSite !!!');
let userName = prompt('Please Enter Your Name !!');
alert('Please Answer the next 8 Quistions About Me!!!');
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
if (ans6 == 'no' || ans6 == 'n') {
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

document.write('Guess how old I am ? ');
document.write('<br>');
let ans7= Number(prompt('Guess how old I am ? Note : You have just 4 attempts'));
let flag=false;

for (let i=1;i<4;i++)
{
        if (ans7==25)
        {
                alert(ans7+" That's The Right Answer");
                document.write(ans7+" That's The Right Answer")
                console.log(ans7+" That's The Right Answer");
                flag=true;
                mark++;
                break;
        }
        else 
        {
                alert(ans7+ " Is a Wrong Answer ... Please try again !!");
                console.log(ans7+ " Is a Wrong Answer ... Please try again !!");
                ans7= Number(prompt('Guess how old I am ?'));
        }
}
if(flag==false)
{
        alert("Sorry ...But you missed that !!! I'm 25 years old");
        console.log("Sorry ...But you missed that !!! I'm 25 years old");
        document.write("Sorry ...But you missed that !!! I'm 25 years old");
}






document.write('<br>');
document.write('<br>');





document.write('Guess What Kind of Food i Love ? ');
document.write('<br>');


let food =['mansaf', ' ' ,'kabseh',' ','maqlubeh',' ','shawarma',' ','kabab'];
let ans8 = prompt('Guess What Kind of Food i Love ? ');
let flag2 = false;
for( let t=1;t<6;t++){
for (let f=0;f<food.length;f++)
{
 if (ans8==food[f])
 {
         alert('You got it !! ');
         document.write('You got it !! ');
         console.log('You got it !! ');
         mark++;
         flag2=true;
         break;

         

 }
  
 
}
    if (flag2==true){break;}
    else
      {
        alert(ans8+ " Is a Wrong Answer ... Please try again !!");
                  ans8=prompt('Try Again ...!!!');
                
      }



}


if (flag2==false)
{
        alert('Opps ... Try harder Next Time ...');
        alert ('The right answers is : '+food);
        document.write('Opps ... Try harder Next Time ...');
        document.write('<br>');
        document.write('The right answers is : '+food);
}

document.write('<br>');
document.write('<br>');

alert('Thanks ' + userName + ', click Ok to Show Your Result !!');


alert('Your Score is ' + mark+'/8  or  ' +(mark*100)/7+'/ 100%' );
document.write('Your Score is ' + mark+'/8  or  ' +(mark*100)/8+'/ 100%');

document.write('<br>');
document.write('<br>');


// if (mark == 6) {
//         alert('Thanks ' + userName + ', click Ok to Show Your Result !!')
//         alert('Your Score is ' + mark + ' , That\'s Awesome ;you Relly Know Alot About Me !!');
//         document.write('Your Score is ' + mark + " , That's Awesome ; you Relly Know Alot About Me !!");
// }
// else if (mark==5)
// {
//         alert('Thanks ' + userName + ', click Ok to Show Your Result !!')
//         alert('Your Score is ' + mark + ' , That\'s close... ;you Know many things About Me !!');
//         document.write('Your Score is ' + mark + " , That\'s close... ;you Know many things About Me !!");
// }
// else if (mark==4)
// {
//         alert('Thanks ' + userName + ', click Ok to Show Your Result !!')
//         alert('Your Score is ' + mark + ' , That\'s good... ;you need to know more About Me !!');
//         document.write('Your Score is ' + mark + " , That\'s  good... ;you need to know more About Me !!");
// }
// else if(mark==3)
// {
//         alert('Thanks ' + userName + ', click Ok to Show Your Result !!')
//         alert('Your Score is ' + mark + ' , That\'s good... ;you need to know more About Me !!');
//         document.write('Your Score is ' + mark + " , That\'s  good... ;you need to know more About Me !!");
// }

// else if(mark==2)
// {
//         alert('Thanks ' + userName + ', click Ok to Show Your Result !!')
//         alert('Your Score is ' + mark + ' , Mmmmmm... you need to know more about me !!');
//         document.write('Your Score is ' + mark + " , Mmmmmm... you need to know more about me !!");
// }

// else if(mark==1)
// {
//         alert('Thanks ' + userName + ', click Ok to Show Your Result !!')
//         alert('Your Score is ' + mark + " , Don't be Dissapointed, You'll know more about me Inshallah !!");
//         document.write('Your Score is ' + mark + " , Don't be Dissapointed, You'll know more about me Inshallah !! !!");
// }

// else if(mark==0)
// {
//         alert('Thanks ' + userName + ', click Ok to Show Your Result !!')
//         alert('Your Score is ' + mark + ' , Opps.. you Really dno\'t know any thing about me , Don\'t be Dissapointed !!');
//         document.write('Your Score is ' + mark + " , Opps.. you Really dno\'t know any thing about me , Don\'t be Dissapointed!!");
// }
