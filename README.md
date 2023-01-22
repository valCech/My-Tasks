# My-Tasks
Simple App in React Native

This is a simple app where you cneed useState and js destructuring technique

About:
Daily tasks where you can delete finished task by pressing a button delete. 
You can also delete all tasks at once by pressing a button Delete all.

Takeaway: 
  <button onClick={oneTask()}>Delete</button> will execute the function automaticaly!
It has to be in form <button onClick={oneTask}>Delete</button> 
If you need to have those () in there, put it all on as a function:
   <button onClick={ () => oneTask()}>Delete</button> that way the function wont be triggered right away
