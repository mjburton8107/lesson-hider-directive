angular.module('directivePractice').directive('lessonHider', function(){

  return {
    templateUrl: 'js/lessonHider.html',
    restrict: 'E',
    scope: {
      lesson : '=',
      dayAlert : '&',
      removeLesson: '&'
    },
    controller: function ($scope, lessonService){
      $scope.getSchedule = lessonService.getSchedule();
    },
    link: function(scope, elem, attrs){
      scope.getSchedule.then(function(response){
        scope.schedule = response.data;

        console.log(scope.schedule)
        console.log(scope.lesson)

        scope.schedule.forEach(function(scheduleDay){
          if(scheduleDay.lesson === scope.lesson){
            elem.css('text-decoration', 'line-through');
            scope.lessonDay = scheduleDay.weekday;
            console.log(scope.lessonDay)
            return;
          }
        });



      });

    }

  }


});
