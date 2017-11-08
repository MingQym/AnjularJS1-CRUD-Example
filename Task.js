angular.module('myApp', []).controller('taskCtrl', function($scope,$http) 
{
    // 定义Task属性
    $scope.id = '';
    $scope.taskname = '';
    $scope.taskrequester = '';
    $scope.taskowner = '';
    $scope.taskstatus = '';

    $scope.action = '';
  
    // 定义Task集合
    $scope.tasks = [
    {id:1, taskname:'APP 进度Demo1', taskrequester:"Joseph" ,taskowner:"frank",taskstatus:"closed" },
    {id:2, taskname:'AnjularJS 分享',  taskrequester:"ITS" ,taskowner:"frank",taskstatus:"ongoing"  },
    {id:3, taskname:'RERP 订单问题处理',  taskrequester:"Jojo" ,taskowner:"jack",taskstatus:"closed" }
    ];

    var vMaxId=3;
    
    /*// 从后台抓资料
    $http({
    method: 'GET',
    url: 'http://172.18.1.33/webapi/api/values/gettasks'
      }).then(function successCallback(response) {
        console.log(response);
          $scope.tasks=JSON.parse(response["data"] ) ;
          //console.log($scope.tasks);
        }, function errorCallback(response) {
          // 请求失败执行代码
      });*/

    // 定义Function
    // 初始化编辑页面资料
    $scope.editTask = function(id)
    {
          // 清空新增控件值
          if(id=='')
          {
            $scope.action ='new';
            $scope.id = ''; 
            $scope.taskname = ''; 
            $scope.taskrequester = ''; 
            $scope.taskowner =''; 
            $scope.taskstatus = ''; 
          }
          // 载入当前要更新资料
          else
          {
            $scope.action ='update';
            $scope.id = $scope.tasks[id-1].id; 
            $scope.taskname = $scope.tasks[id-1].taskname; 
            $scope.taskrequester = $scope.tasks[id-1].taskrequester; 
            $scope.taskowner = $scope.tasks[id-1].taskowner; 
            $scope.taskstatus = $scope.tasks[id-1].taskstatus; 
          }
    };
     
    // 保存新增或者Update
    $scope.saveTask = function(id)
    {
          // 新增Task
          if(id=='')
          {
            vMaxId++;
            var newdata={id:vMaxId,taskname:$scope.taskname,  taskrequester:$scope.taskrequester,taskowner:$scope.taskowner,taskstatus:$scope.taskstatus };
            $scope.tasks.push(newdata);
            $scope.action ='';
          }
          // 更新Task
          else
          {
             $scope.tasks[id-1].id = $scope.id;
             $scope.tasks[id-1].taskname= $scope.taskname ; 
             $scope.tasks[id-1].taskrequester=$scope.taskrequester; 
             $scope.tasks[id-1].taskowner=$scope.taskowner; 
             $scope.tasks[id-1].taskstatus=$scope.taskstatus; 
             $scope.action ='';
          }  
    };
     
    // 删除资料
    $scope.deleteTask=function(vIndex)
    {
       console.log(vIndex);
       $scope.tasks.splice(vIndex,1);
    }

});