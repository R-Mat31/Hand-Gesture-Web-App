Webcam.set({
 width : 300,
 height : 300,
 image_format : 'png',
 png_quality : 90
});
var camera = document.getElementById("camera");
Webcam.attach(camera);
function take_photo(){
 Webcam.snap(function(photo){
  document.getElementById("photo").innerHTML = "<img id = 'image' src = " + photo + ">";
 });
}
console.log ("ML5 Version : ", ml5.version);
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/p81f95ecr/model.json", confirm_model);
function confirm_model(){
 console.log("Model Loaded");
}