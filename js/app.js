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
function qustionOne()
 {let ans1 = prompt('Does Ibrahim Love Cars ? (yes/y or no/n)').toLowerCase();
if (ans1 == 'yes' || ans1 == 'y') {
        alert("That's True ");
        document.write('<br>');

        document.write('Right Answer');
        mark = mark + 1;
}
else {
        alert("Opps...That's False");
        document.write('<br>');

        document.write('Wrong Answer');
}

document.write('<br>');
document.write('<br>');
}
 qustionOne();
 document.write('Does Ibrahim Love "Mansaf" ?');
 function qustionTow()
 {let ans2 = prompt('Does Ibrahim Love "Mansaf" ? (yes/y or no/n)').toLowerCase();
if (ans2 == 'yes' || ans2 == 'y') {
        alert("That's True ");
        document.write('<br>');

        document.write('Right Answer');
        mark = mark + 1;
}
else {
        alert("Opps...That's False");
        document.write('<br>');

        document.write('Wrong Answer');
}

document.write('<br>');
document.write('<br>');
}
qustionTow();


document.write('Does Ibrahim Love Sleeping ?');


function qustionThree()
{
        let ans3 = prompt('Does Ibrahim Love Sleeping ? (yes/y or no/n)').toLowerCase();
if (ans3 == 'yes' || ans3 == 'y') {
        alert("That's True ");
        document.write('<br>');

        document.write('Right Answer');
        mark = mark + 1;
}
else {
        alert("Opps...That's False");
        document.write('<br>');

        document.write('Wrong Answer');
}

document.write('<br>');
document.write('<br>');}

qustionThree();
document.write('Does Ibrahim Love Sports ?');
function qustionFour() 
{let ans4 = prompt('Does Ibrahim Love Sports ?(yes/y or no/n)').toLowerCase();
if (ans4 == 'no' || ans4 == 'n') {
        alert("That's True ");
        document.write('<br>');

        document.write('Right Answer');
        mark = mark + 1;
}
else {
        alert("Opps...That's False");
        document.write('<br>');

        document.write('Wrong Answer');
}

document.write('<br>');
document.write('<br>');
}
 qustionFour();

document.write('Does Ibrahim Love Waching Movies ?');
function qustionFive()
{
        let ans5 = prompt('Does Ibrahim Love Waching Movies ? (yes/y or no/n)').toLowerCase();
if (ans5 == 'yes' || ans5 == 'y') {
        alert("That's True ");
        document.write('<br>');

        document.write('Right Answer');
        mark = mark + 1;
}
else {
        alert("Opps...That's False");
        document.write('<br>');

        document.write('Wrong Answer');
}

document.write('<br>');
document.write('<br>');
}
qustionFive();

document.write('Is Ibrahim a single man ?');
function qustionSix()
{
        let ans6 = prompt('Is Ibrahim a single man ? (yes/y or no/n)').toLowerCase();
if (ans6 == 'no' || ans6 == 'n') {
        alert("That's True ");
        document.write('<br>');

        document.write('Right Answer');
        mark = mark + 1;
}
else {
        alert("Opps...That's False");
        document.write('<br>');

        document.write('Wrong Answer');
}

document.write('<br>');
document.write('<br>');}

qustionSix();


document.write('Guess how old I am ? ');

document.write('<br>');

function qustionSeven()
{let ans7= Number(prompt('Guess how old I am ? Note : You have just 4 attempts'));
let flag=false;

for (let i=1;i<4;i++)
{
        if (ans7==25)
        {
                alert(ans7+" That's The Right Answer");
                document.write(ans7+" That's The Right Answer")
                flag=true;
                mark++;
                break;
        }
        else if(ans7>=27||ans7<=23)
        {
                alert(ans7+ " Soo Far ... Please try again !!");
                ans7= Number(prompt('Guess how old I am ?'));
        }
        else if ((ans7<27 && ans7>25)||(ans7>23&&ans7<25))
        {
                alert(ans7+ " Soo Close ... Please try again !!");
                ans7= Number(prompt('Guess how old I am ?'));      
        }

}
if(flag==false)
{
        alert("Sorry ...But you missed that !!! I'm 25 years old");
        document.write("Sorry ...But you missed that !!! I'm 25 years old");
}






document.write('<br>');
document.write('<br>');

}

qustionSeven();






document.write('Guess What Kind of Food i Love ? ');
document.write('<br>');

function qustionEight()
{
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


}

qustionEight();



alert('Thanks ' + userName + ', click Ok to Show Your Result !!');
function marks()
{
        alert('Your Score is ' + mark+'/8  or  ' +(mark*100)/7+'/ 100%' );
document.write('Your Score is ' + mark+'/8  or  ' +(mark*100)/8+'/ 100%');

document.write('<br>');
document.write('<br>');
}
marks();







