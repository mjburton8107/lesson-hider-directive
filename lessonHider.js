angular.module('directivePractice').directive('lessonHider', function(){
  return {
    restrict: 'E',
    templateUrl: 'lessonHider.html',
    scope: {
      lesson: '=',
      dayAlert: '&'
    },
    controller: function($scope, lessonService){
      $scope.getSchedule = lessonService.getSchedule();

    },
    link: function(scope, elements, attrs){
      scope.getSchedule.then(function(response){
        scope.schedule = response.data;

        scope.schedule.forEach(function(item){
          if(item.lesson === scope.lesson){
            elements.css ("text-decoration", "line-through");
            scope.lessonDay = item.weekday;
            return;
          }
        });
      });
    }
  }
});
