app.config(function($stateProvider, $urlRouterProvider) {


	$urlRouterProvider.otherwise('/');


	$stateProvider

		.state('geospatial', {
			url: '/',
			templateUrl: 'views/geospatial.html',
			controller: 'GeospatialCtrl as dashboard',
			resolve: {
				EmployeesByLocation: function(CompanyDataService) {
					return CompanyDataService.getEmployeesByLocation();
				}
			}
		})
		.state('keyMetrics', {
			url: '/metrics',
			templateUrl: 'views/key-metrics.html',
			controller: 'KeyMetricsCtrl as dashboard',
			resolve: {
				Customers: function(CompanyDataService) {
					return CompanyDataService.getCustomers();
				},
				Issues: function(CompanyDataService) {
					return CompanyDataService.getIssues();
				}
			}
		})
		.state('data', {
			url: '/data',
			templateUrl: 'views/data.html',
			controller: 'DataCtrl as dashboard',
			resolve: {
				Issues: function(CompanyDataService) {
					return CompanyDataService.getIssues();
				}
			}
		})

	;




});