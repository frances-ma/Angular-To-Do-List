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


angular
    .module("todoApp") 
    .controller("ToDoCtrl", ToDoCtrl); 



/*
  vm.addText = function(text) {
        vm.cart.push(text);
    }
      vm.form = {
        item: "",
        price: "", 
        amount: ""
    };


*/
