/********************
 * HELPER FUNCTIONS *
 ********************/
const getTodoName = function(todo){
return todo.text;
}

const getPriority = function(todo){
return todo.priority;
}

const isComplete= function(todo){
return todo.complete;
}

const isHighPriority = function(obj){
  //based on the test 
  return obj.priority === 2
}







/***********************
 * ITERATION FUNCTIONS *
 ***********************/

const names =function(obj){
   return obj.map(getTodoName)
}
//alternatively : 
/*const names = function(todos ){
return
}
*/

const priorities= function(obj){
return obj.map(getPriority)
}


// const nameAndPriorityHelper = function(todo){
// //return the name and priority of the todo

// return `${todo.text} - ${todo.priority === 2 ? 'High' : 'Low'}`;
// }

//helper for justNotComplete


 const justNotComplete = function(array){
return array.complete === false
 }


const justComplete =function(array){
  return array.filter(isComplete)

}


const priority2Only = function(array){
  return array.filter(isHighPriority);
}

// helper for priority 1 only
const priorOne = function(obj){
return obj.priority === 1;
}

 const priority1Only = function(array){
   return array.filter(priorOne);
 }



// Our code below

if (typeof getTodoName === 'undefined') {
  getTodoName = undefined;
}

if (typeof getPriority === 'undefined') {
  getPriority = undefined;
}

if (typeof isComplete === 'undefined') {
  isComplete = undefined;
}

if (typeof isHighPriority === 'undefined') {
  isHighPriority = undefined;
}

if (typeof names === 'undefined') {
  names = undefined;
}

if (typeof priorities === 'undefined') {
  priorities = undefined;
}

if (typeof namesAndPriorities === 'undefined') {
  namesAndPriorities = undefined;
}

if (typeof justNotComplete === 'undefined') {
  justNotComplete = undefined;
}

if (typeof justComplete === 'undefined') {
  justComplete = undefined;
}

if (typeof priority2Only === 'undefined') {
  priority2Only = undefined;
}

if (typeof priority1Only === 'undefined') {
  priority1Only = undefined;
}



module.exports = {
  getTodoName,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  priorities,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
}
