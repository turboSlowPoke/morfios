var mainApp = angular.module("mainApp",[]);
var replics = [
    "Хочешь узнать что это такое?",
    "Возьмешь синюю таблетку — и история здесь закончится: ты проснешься и будешь дальше ходить на свою любимую работу, надеясь что когда-нибудь случиться чудо.",
    "Возьмешь красную таблетку — останешься в Стране Чудес, и я покажу тебе, насколько глубока эта кроличья нора."
];
mainApp.controller('mainController',function ($scope,$interval) {
    var i=0;
    $scope.replic01=replics[0];
    $interval(function () {
        if (i < replics.length - 1)
            i++;
        else
            i=0;
        switch (i){
            case 0:
                $scope.replic01=replics[0];
                $scope.replic02="";
                break;
            case 1:
                $scope.replic01="";
                $scope.replic02=replics[1];
                break;
            case 2:
                $scope.replic01=replics[2];
                $scope.replic02="";
                break;

        }
        $scope.replic=replics[i];
        },5000)

});




