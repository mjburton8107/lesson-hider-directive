angular.module('directivePractice').controller('lessonCtrl', function($scope, lessonService){

  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

  $scope.announceDay = function(lesson, day){
    if(!day){
      alert(lesson + " is not currently scheduled");
    } else alert(lesson + ' is active on ' + day + '.');
  }

  $scope.removeLesson = function(lesson){
    $scope.lessons.splice($scope.lessons.indexOf(lesson), 1);
    // $scope.lessons.forEach(function(item, index){
    //   console.log("item", item)
    //   console.log("lesson", lesson)
    //   // if(item[index] === lesson){
    //   //
    //   // }
    // })

    // for (var i = 0; i < $scope.lessons.length; i++){
    //   if($scope.lessons[i] === lesson){
    //     $scope.lessons.splice(i, 1);
    //   }
  //   }
  }
})
