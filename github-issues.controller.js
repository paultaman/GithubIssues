angular
    .module('GithubIssuesApp')
    .controller('GithubIssuesController', function(GithubIssuesService) {
        
        var vm = this;
        vm.issues = [];
        
        GithubIssuesService.getIssuesGoingBack(7)
            .then(function(response) {
                vm.issues = response;
            }, function(error) {
                console.error("Error while retrieving issues.");
                console.error(error);
            });
    });