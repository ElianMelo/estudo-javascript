app.controller("control", function($scope){
    $scope.nomes = ["elian", "joao", "roberto", "ana", "maria"];

    $scope.mensagem = "Titulo da Aplicacao";

    $scope.alterar = function(){
        $scope.mensagem = $scope.text;
        return;
    }

    $scope.adicionar = function(){
        $scope.nomes.push($scope.item);
        $scope.item = "";
    }

});