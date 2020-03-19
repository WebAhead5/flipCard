# flipCard
# flipCard Coding Quiz

## Project Idea
To create a coding quiz that presents you with a question and 3 answers. The user has to choose the create answer to gain points within the time limit.

![text](https://i.ibb.co/Z6DvNjz/Screenshot-from-2020-03-19-17-22-06.png)

## Strech Goals
- Card animations
- Start Page / Game Over page
- Easy / Medium / Hard Questions
- 2 player mode
- High score board
- Sounds

## Process

We intially held a meeting to discuss game ideas, then once we decided on a coding quiz game we talked through the deisgn ideas and game features, splitting them into "Core" items and "nice to haves".

We then split into two groups and worked in pairs, with two team members working on the HTML and two team members working on the JavaScript. On day two we switched up the teams so that people had sight of both elements of th project.

## How it works
The questions and games rules are held within an object and called by the java script. The question list is randomly generated, and the options are mixed up before the question is served to the user. You can use mouse clicks or the 1,2,3 keys to select the answer. The timer counts down 10 seconds and if you have not answered by the end, it will give you a wrong answer.

The DOM is then changed depending if the answer was wrong or right, and if wrong, it will tell you the correct answer. If correct, you will get 10 points.

When all the questions have been served, "game over" will display and the game will reset.

## Issues
- Over ambitious scope
- Too complex 
- CSS Transitions (the timer)
- Git Hub
