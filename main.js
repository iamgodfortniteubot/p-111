https://teachablemachine.withgoogle.com/models/_KYFfYlzJ/
prediction_1 = "";
prediction_2 = "";

Webcam.set({
width: 350,
height: 300,
image_format: 'png',
png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
Webcam.snap(function(data_uri)
{
document.getElementById("result").innerHTML = '<img id ="captured_image" src = "'+data_uri+'"/>';
});

}

console.log('ml5 version',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_KYFfYlzJ/model.json',model_loaded);

function model_loaded()
{
console.log("model_loaded");
}

function speak()
{
var synth = window.speechSynthesis;

speak_data1 = "THE FIRST PREDICTION IS -    " +prediction_1;
speak_data2 = "AND THE SECOND PREDICTION IS -    " +prediction_2;
var utterthis = new SpeechSynthesisUtterance(speak_data1+speak_data2);
synth.speak(utterthis);
}