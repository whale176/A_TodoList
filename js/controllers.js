function TodoCtrl($scope) {  
  $scope.newItem = '';  
  $scope.todoList = [{ label: "買牛奶" }, 
                     { label: "繳電話費" }];  
  $scope.addItem = function(){  
    if(this.newItem) {
        this.todoList.push({label:this.newItem,isFinish:false});  
           this.newItem = '';  
       }      
  }; 
  $scope.removeItem = function(item){
    item.isFinish = true;
  };
  $scope.edit = function(item){
    item.editing = true;
  };
  $scope.save = function(item){
    delete item.editing;
  };
}

