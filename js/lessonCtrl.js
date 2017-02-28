angular.module('directivePractice').controller('lessonCtrl', function($scope){

  $scope.lessons = [ 'Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server projects', 'Node', 'Express', 'Mongo'];

  $scope.lessonDay = function(lesson, day){
    if(!day){
      alert(lesson + ' is not currently scheduled');
    } else alert(lesson + ' is active on ' + day + '.');
  };

  $scope.removeLesson = function(lesson){
    for(var i = 0; i < $scope.lessons.length; i++){
      if($scope.lessons[i] === lesson){
        $scope.lessons.splice(i, 1);
      }
    }
  }

});
