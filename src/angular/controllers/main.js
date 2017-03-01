// Must use old syntax since this is going directly to the view and not being transpiled
const Laniakea = require('laniakea');

angular.module('foo').controller('fooCtrl', function ($scope) {
    $scope.greet = 'Hello!';
});

let l = new Laniakea();
try {
  l.renameFile();
} catch (e) {
  console.log(e.message);
}
