function UserService(){
    this.getData = function(){
        var promise = new Promise (function(resolve){

            var model={
                nombre:"Johan Alberto",
                apellido:"Infante Joseph",
                edad:21
            }
            resolve(model)
            throw new $ApiError(420,"prende y sorprende bro");
            
        })
      return promise;
    }
    
};

mvc.dependencies.userService = new UserService();

