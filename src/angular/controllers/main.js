// Must use old syntax since this is going directly to the view and not being transpiled
const Laniakea = require('laniakea');
const { dialog } = require('electron').remote;

angular.module('laniakeaGUI').controller('homeCTRL', function ($scope) {
  let l = new Laniakea();

  $scope.updateSourcePath = function () {
    $scope.sourcePath = dialog.showOpenDialog({
      filters: [
        { name: 'ROMs', extensions: l.validFiletypes() }
      ],
      properties: ['openFile', 'openDirectory']
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
