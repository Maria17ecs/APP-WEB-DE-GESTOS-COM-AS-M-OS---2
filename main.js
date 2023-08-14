prediction1 = "" 
prediction2 = ""
Webcam.set({ 
    width:350, 
    height:275, 
    imageFormat : 'png', 
    pngQuality:65
});
camera = document.getElementById("camera");
Webcam.attach('#camera');



function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; 
});
}
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/J6Ip31RDM/model.json',modelLoaded);
