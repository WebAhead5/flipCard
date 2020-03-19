

 //js-----------------------------
   let arr=  [
         new questionData("What is the correct HTML for referring to an external style sheet?",0 ,'<link rel="stylesheet" type"text/css" href="mystyle.css','<style src="mystyle.css">', '<stylesheet>mystyle.css</stylesheet>'),
         new questionData("Where in an HTML document is the correct place to refer to an external style sheet?",2 ,'In the <main> section','In the <header> section', 'In the <head> section'),
         new questionData("Which is the correct CSS syntax for setting black text?",1 ,'text-color: black', "color: black", 'font-color: black'),
         new questionData("In CSS, how do you display hyperlinks without an underline?",0 ,'text-decoration: none', "decoration:no-underline", 'text-decoration:no-underline'),
         new questionData("In CSS, how do you make the text bold?",2 ,'style:bold', "font:bold", 'font-weight:bold'),
         new questionData("In CSS, how do you select an element with a class name 'test'?",0 ,'.test', "#test", 'test'),
         new questionData("In CSS, How do you select all p elements inside a div element?",0 ,'.div.p', "div-p", 'div p'),
         new questionData("What is the default value of the position property?",2 ,'.fixed', "absolute", 'static'),
         new questionData("Choose the correct HTML element for the largest heading:",0 ,'<h1>', '<heading>', '<h6>'),
         new questionData("What is the correct HTML element for inserting a line break?",1 ,'<break>', '<br>', '<enter>'),
         new questionData("What is the correct HTML for creating a hyperlink?",1 ,'<a name="http://www.w3schools.com">WebAhead.com</a>', '<a url="http://www.w3schools.com">WebAhead.com</a> ', '<a href="http://www.w3schools.com">WebAhead</a>'),
         new questionData("How can you open a link in a new tab/browser window?",0 ,'<a href="url" target="_blank">  ', '<a href="url" target="new">', '<a href="url" new>'),
         new questionData("Which of these elements are all <table> elements?",2 ,'<table><head><td>', '<thead><body><tr>', '<table><tr><td> '),
         new questionData("How can you make a numbered list?",1 ,'<list>', '<ol>', '<nl>'),
         new questionData("What is the correct HTML for inserting an image?",1 ,'<img href="image.gif" alt="MyImage">', '<img src="image.gif" alt="MyImage"> ', '<image src="image.gif" alt="MyImage">'),
         new questionData("What is the correct HTML element for playing video files??",1 ,'<movie>', '<video>', '<media'),
         new questionData("What is the correct HTML element for playing audio files?",0 ,'<audio>', '<mp3>', '<sound>'),
         new questionData("What is the correct HTML for making a drop-down list?",2 ,'<input type="dropdown">', '<input type="list">', '<select>'),
         new questionData("What does HTML stand for?",0 ,'Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language'),
         new questionData("What What does CSS stand for?",0 ,'Cascading Style Sheets  ', 'Computer Style Sheets', 'Creative Style Sheets'),



         new questionData("In JavaScript, how do you print something in the Console?",0,"print(5);","console.log(5);","console.print(5);"),
         new questionData('In Javascript, how do you get the length of a string?',1,"str.length()","str.length","sizeof(str)"),
         new questionData("In JavaScript, How do you initialize an array?",2,'var Geeks= “Geek1”, “Geek2”, “Geek3”;','var Geeks=(1:Geek1, 2:Geek2, 3:Geek3);','var Geeks=[“Geek1”, “Geek2”, “Geek3”]'),
         new questionData("In JavaScript, what method is used to remove the whitespace at the beginning and end of any string?",0,"trim()","strip()","stripped()"),
         new questionData("In JavaScript, what function is used to add an element to the end of an array",1,"add","push","unshift"),
         new questionData("In JavaScript, what function is used to add an element to the beginning of an array",2,"add","push","unshift"),
         new questionData("In Javascript, How do you insert a comment that has more than one line?",0,`/* comment */`, "<!-- comment -->", "// comment //" ),
         new questionData("In Javascript, Which operator is used to assign a value to a variable?",0,"=","-","*"),
         new questionData("JavaScript is a ________ Side Scripting Language.",2,"Server","Browser", "None of the above"),
         new questionData('What is the output of the following code "console.log(typeof(24.49))"?',0,"number","float","24.49"),
         new questionData("Which type of variable is visible everywhere in your JavaScript code?",0,"global variable","local variable","both"),
         new questionData("which of the following is equivalent to the number 4?",0,"parseInt(9/2);", "Math.floor(5);", "Math.round(4.5);" )
     ]

