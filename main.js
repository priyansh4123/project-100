var speechrecognition=window.webkitSpeechRecognition;
var recognition=new speechrecognition();
function start(){
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    if (content=="selfie"){
        console.log("taking selfie in 10seconds")
        speak()
    }
    
}
function speak(){
    var speechspeak=window.speechSynthesis;
    Webcam.attach(camara)
    var speek_data="taking your selfie in 5 seconds";
    var utterthis=new SpeechSynthesisUtterance(speek_data);
    speechspeak.speak(utterthis);
setTimeout(function(){
    img_id="selfie1"
    take_snapshot();
    speek_data="taking next selfie in 10 seconds";
    var utterthis=new SpeechSynthesisUtterance(speek_data);
    speechspeak.speak(utterthis);
},5000);
setTimeout(function(){
    img_id="selfie2"
    take_snapshot();
    speek_data="taking next selfie in 15 seconds";
    var utterthis=new SpeechSynthesisUtterance(speek_data);
    speechspeak.speak(utterthis);
},10000);
setTimeout(function(){
    img_id="selfie3"
    take_snapshot();
},15000);
}
camara=document.getElementById("camara");
Webcam.set(
    {
        width:500,
        height:400,
        Image_format:"png",
        png_quality:90
    }
);

function take_snapshot(){
    console.log(img_id);
    Webcam.snap(function(data_uri){
        if (img_id=="selfie1"){
            document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'"/>';
        }
        if (img_id=="selfie2"){
            document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'"/>';
        }
        if (img_id=="selfie3"){
            document.getElementById("result3").innerHTML='<img id="selfie3" src="'+data_uri+'"/>';
        }
    });
}
