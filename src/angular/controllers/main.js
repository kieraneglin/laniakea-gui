// Must use old syntax since this is going directly to the view and not being transpiled
const Laniakea = require('laniakea');
const { dialog } = require('electron').remote;
const jetpack = require('fs-jetpack');

angular.module('laniakeaGUI').controller('homeCTRL', function ($scope) {
  let l = new Laniakea();
  $scope.sourceFiles = [];

  $scope.updateSourcePath = function () {
    dialog.showOpenDialog({
      filters: [{
        name: 'ROMs',
        extensions: l.validFiletypes()
      }],
      properties: ['openFile', 'openDirectory']
    }, function (files) {
      $scope.$apply(function () {
        $scope.sourcePath = files[0];

        if(jetpack.exists(files[0]) === 'dir'){
          $scope.sourceFiles = l.listFiles(files[0], true);
        } else if (jetpack.exists(files[0]) === 'file') {
          $scope.sourceFiles = files;
        }
      });
    });
  };

  $scope.updateDestPath = function () {
    $scope.destPath = dialog.showOpenDialog({
      title: 'ROM Output Path',
      properties: ['openDirectory', 'createDirectory', 'promptToCreate']
    });
  };
});

// let l = new Laniakea();
// try {
//   l.renameFile();
// } catch (e) {
//   console.log(e.message);
// }
