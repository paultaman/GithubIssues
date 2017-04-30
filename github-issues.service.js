angular
    .module('GithubIssuesApp')
    .service('GithubIssuesService', function($q, $http) {

        this.getIssuesGoingBackByDays = function (days) {
            return $q(function(resolve, reject) {
                var date = new Date();
                date.setDate(date.getDate() - days);

                $http.get("https://api.github.com/repos/angular/angular/issues?since=" + date.toISOString())
                    .then(function(response) {
                        if (response && response.data)
                            resolve(response.data);
                        else
                            reject("No issues were found.");
                    }, function(error) {
                        reject(error);
                    });
            });
        }
    });