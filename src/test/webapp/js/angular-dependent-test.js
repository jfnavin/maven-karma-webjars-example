
/**
 * AngularJS dependent tests. 
 * 
 * These have dependencies on the AngularJS lib.
 */
describe('Angular-dependent suite', function(){
	
	beforeEach(module('exampleApp'));
	
	describe('Greeting controller', function(){
		var $scope = null;
		var greetingController = null;
		
		beforeEach(inject(function($rootScope, $controller){
			$scope = $rootScope.$new();
			greetingController = $controller('greetingController', {$scope: $scope});
		}));
		
		it('Greeting controller created', function(){
			expect(greetingController).not.toBe(null);
		});
		
		it('Greeting controller sets the correct greeting', function(){
			expect($scope.greeting).toEqual('Controller says hi!');
		});
	});
	
});