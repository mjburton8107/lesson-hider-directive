angular.module('directivePractice').directive('lessonHider', function(){
  return {
    templateUrl: 'js/lessonHider.html',
    restrict: 'E',
    link: function(scope, elem, attrs){
      scope.getSchedule.then(function(response){
        scope.schedule = response.data;
        console.log('this is scope.schedule', scope.schedule)

        scope.schedule.forEach(function(scheduleDay){
          if(scheduleDay.lesson === scope.lesson){
            elem.css('text-decoration', 'line-through')
            scope.alertDay = scheduleDay.weekday;
            console.log('this is scope.lessonDay', scope.lessonDay);
            return;
          }
        })
      });
    },
    scope: {
      lesson : '=',
      lessonDay : '&',
      removeLesson : '&'
    },
    controller: function($scope, lessonService){
      $scope.getSchedule = lessonService.getSchedule();
    }
  }

});
