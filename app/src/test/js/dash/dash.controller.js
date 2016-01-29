describe('dashboard controller', function(){

	var $controllerConstructor;
	var dash;
	var scope;

	beforeEach(module('app'));

	beforeEach(inject(function($controller, $rootScope){
		$controllerConstructor = $controller;
		scope = $rootScope.$new();
	}));


	beforeEach(function(){
	   dash = $controllerConstructor('dash', { $scope : scope });
	}):

		//if we are runnin mocha asserts we need to fix done execution
		

	it('should have items', function(){
		expect(dash.itens).to.exists;
		expect(dash.itens).to.be.an.array;
	});


	it('should have 3 itens', function(){

	});
});

