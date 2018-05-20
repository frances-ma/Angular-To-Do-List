"use strict"; 

function ToDoCtrl(){
    const vm = this; 
    vm.list = [
        {task: "Walk the dog", completed: true}, 
        {task: "Get a gas", completed:false},
        {task: "Go to the store", completed:true}, 
        {task: "Understand AngularJS", completed:false}
    ]; 

    vm.completed = (index) => {
        vm.list[index].completed = true; 
    }
}
/*
vm.add= function(input) {
    

    let newTask ={
            task = input, 
            completed: false
         }

    console.log(newTask); 
          vm.list.push(newToDo); 

 }


//// TO REMOVE? ////


vm.remove(index) {
vm.whateverthelistnameis.splice(index, 1)
}

in the html use ng-click to call the function with the value of the short controller name, then "remove($index)"






*/ 

angular
    .module("todoApp") 
    .controller("ToDoCtrl", ToDoCtrl); 







