
var patientApp = angular.module('patientApp',[]);
patientApp.controller("DbController",['$scope','$http', function($scope,$http){


getInfo();
function getInfo(){
 
$http.post('databaseFiles/pDetails.php').success(function(data){

$scope.details = data;
});
}


$scope.pInfo = {'gender' : 'male'};

$scope.show_form = true;

$scope.formToggle =function(){
$('#pForm').slideToggle();
$('#editForm').css('display', 'none');
}
$scope.insertInfo = function(info){
$http.post('databaseFiles/insertDetails.php',{"fname":info.fname,"lname":info.lname,"email":info.email,"gender":info.gender,"age":info.age,"phone":info.phone,"address":info.address}).success(function(data){
if (data == true) {
getInfo();
$('#pForm').css('display', 'none');
}
});
}
$scope.deleteInfo = function(info){
$http.post('databaseFiles/deleteDetails.php',{"del_id":info.p_id}).success(function(data){
if (data == true) {
getInfo();
}
});
}
$scope.currentUser = {};
$scope.editInfo = function(info){
$scope.currentUser = info;
$('#pForm').slideUp();
$('#editForm').slideToggle();
}
$scope.UpdateInfo = function(info){
$http.post('databaseFiles/updateDetails.php',{"id":info.p_id,"fname":info.fname,"lname":info.lname,"email":info.email,"gender":info.gender,"age":info.age,"phone":info.phone,"address":info.address}).success(function(data){
$scope.show_form = true;
if (data == true) {
getInfo();
}
});
}
$scope.updateMsg = function(p_id){
$('#editForm').css('display', 'none');
}
}]);