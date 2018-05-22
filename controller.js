"use strict"; 

function ToDoCtrl(){
    const vm = this; 
    vm.list = [
        {task: "Walk the dog", completed: false}, 
        {task: "Get a gas", completed: false},
        {task: "Go to the store", completed: false}, 
        {task: "Understand AngularJS", completed: false}
    ]; 

    vm.completed = (index) => {
        vm.list[index].completed = true; 
    };

    vm.remove = (index) => {
        vm.list.splice(index, 1)
    };
    
    vm.add = (input, completed) => {
        vm.list.push({
            task: input, 
            completed: false 
        }); 

        vm.lists = {}; 
    }; 


    vm.edit = (index, things) => {
        vm.showForm= true;
        vm.tempItem = {
            task: things.task,
            completed: things.completed 
          };
          console.log(vm.tempItem); 
          vm.tempIndex = index;
     }; 

 // This method takes two parameters: index and things
  vm.updateItem = (index, things) => {
    // Removes an item based on the index
    // Also inserts a brand new object based on what was submitted in the edit form
    vm.list.splice(index, 1, { 
      task: things.task,
      completed: things.completed
    });
      vm.showForm = false;
  };


}




angular
    .module("todoApp") 
    .controller("ToDoCtrl", ToDoCtrl); 







