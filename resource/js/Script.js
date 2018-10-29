$(window).on("load",function() {
    setTimeout(function () {
        $(".navigation").animate({opacity:1},150);
        $(".image1").fadeIn(2000);
        $("#header-icon").animate({opacity:1},150);
    },100);
});

$(document).ready(function () {


    responsiveVoice.speak("Welcome to NorthCap University. I am Alex and I will be assisting you with this website.","Hindi Female");


    $(".google-microphone").click(function () {
       speech1();
    });

    $("#wave").click(function () {
        speech1();
    });
    n=0;
    function speech1() {
        var speech = new webkitSpeechRecognition();
        speech.continous=true;
        speech.interimResults=false;
        speech.lang='en-IN';
        speech.start();
        var finalValue="";
        var result = "";
        var interim="";
        speech.onresult = function (event) {

            for(i=0;i<event.results.length;i++){
                var transcript = event.results[i][0].transcript;
                transcript.replace("\n","<br>");
                if(event.results[i].isFinal){
                    result = result + transcript;
                     // if(result=="hello Alex"){
                     //     value="Hello Sir. How can I assist you?";
                     // }
                    // else if(result=="tell me about you"){
                    //     value="My name is Alex and I am an intelligent assistant";
                    // }
                    // else if(result=="how are you"){
                    //     value="I am Good";
                    // }
                    // else if(result=="tell me about the college"){
                    //     value="Have a look at our About Us page";
                    //     window.open('http://www.ncuindia.edu/about-us','_blank')
                    // }
                    // else if(result=="who is the best actor"){
                    //     value="Sharukh Khan is the best actor.";
                    // }
                    // else if(result=="who is dean of ncu"){
                    //     value="Dr R Narasimhan is dean of NCU";
                    // }
                    // else if(result=="knock knock"){
                    //     value="Who is this?";
                    // }
                    // else if(result=="thank you Alex"){
                    //     value="Your Welcome";
                    //     responsiveVoice.speak("Your Welcome Sir");
                    //     $(".google-microphone").fadeIn();
                    //     $("#wave").fadeOut();
                    //     break;
                    // }
                    // else if(result=="open home page"){
                    //     value = "Ok Sir";
                    //     $(".google-microphone").fadeIn();
                    //     $("#wave").fadeOut();
                    //     window.open('http://ncuindia.edu/', '_blank');
                    // }
                    // else{
                    //     value="Please speak again"
                    // }
                    $("textarea").append("\n You : "+result);
                    if(result=="hello Alex"||result=="hi"||result=="hi alex"||result=="hey Alex"||result=="hello"||result=="namastey Alex"||result=="namastey"||result=="namaste Alex"||result=="namaste"){
                        values=["Hello Sir. How can I assist you?","Hey there","Hey","Namaste","Alex says Hey","aadaab"];
                        var x1= Math.floor((Math.random() * values.length));
                        value=values[x1];
                        setTimeout(function(){
                            $(".google-microphone").fadeIn();
                            $("#wave").fadeOut();
                            responsiveVoice.speak(value,"Hindi Female");
                            $("textarea").append("\n Alex : "+value+"\n");
                        },100);

                        setTimeout(function(){
                            speech1();
                            $(".google-microphone").fadeOut();
                            $("#wave").fadeIn()
                        },3000);
                    }
                    else if(result=="thank you Alex"){
                        values=["You are most certainly welcome.","Your Welcome","Its my pleasure","Thats nice of you to say","Ofcourse","Dosti me no sorry, no thankyou"];
                        var x2= Math.floor((Math.random() * values.length));
                        value=values[x2];
                        responsiveVoice.speak(value,"Hindi Female");
                        setTimeout(function(){
                            $(".google-microphone").fadeIn();
                            $("#wave").fadeOut();
                            $("textarea").append("\n Alex : "+value+"\n");
                        },100);
                    }
                    else if(result.toLowerCase()=="bye"||result.toLowerCase()=="bie"||result.toLowerCase()=="bye alex"||result=="by Alex"||result.toLowerCase()=="good bye"||result.toLowerCase()=="good bye alex"||result.toLowerCase()=="goodbye"||result.toLowerCase()=="goodbye alex"){
                        values=["Alvida","Bye Bye","Nice talking with you","Its been a pleasure","Come back soon","Hum hai rahi pyar ke, phir milenge chalte chalte"];
                        var x3= Math.floor((Math.random() * values.length));
                        value=values[x3];
                        responsiveVoice.speak(value,"Hindi Female");
                        setTimeout(function(){
                            $(".google-microphone").fadeIn();
                            $("#wave").fadeOut();
                            $("textarea").append("\n Alex : "+value+"\n");
                        },100);
                    }
                    else{
                        setTimeout(function(){
                            responsiveVoice.speak("Processing all the result","Hindi Female");
                        },1500);
                        request = $.ajax({
                            url: "getData.php",
                            type: "post",
                            data: {'result1': result}
                        }).done(function (msg) {
                            var fmsg=jQuery.parseJSON(msg);
                            console.log(fmsg);
                            value=fmsg[0];
                            link=fmsg[1];
                            setTimeout(function(){
                                $(".google-microphone").fadeIn();
                                $("#wave").fadeOut();
                                responsiveVoice.speak(value,"Hindi Female");
                                $("textarea").append("\n Alex : "+value+"\n");
                            },100);

                            var linkInterval=setInterval(function () {
                                if(link.toString()!="NA"&&link.toString()!="NONE"){
                                    if(!responsiveVoice.isPlaying()){
                                        if(link.toString()=="NA"){

                                        }else{
                                            window.open(link,"_blank");
                                        }
                                        clearInterval(linkInterval);
                                    }
                                }
                            },700);

                            var interval =setInterval(function(){
                                if(!responsiveVoice.isPlaying()){
                                    speech1();
                                    $(".google-microphone").fadeOut();
                                    $("#wave").fadeIn();
                                    clearInterval(interval);
                                }
                                else{

                                }
                            },2000);
                        });
                    }


                }
                $(".result").text(result);
                console.log( $(".result").text());
            }
        };
    }

    $(".nav").click(function () {

        value=$(this).data("value");
        if(value==1){
            left=50;
            l1=0;
            l2=100;
            l3=200;
            $("#hero-container1 .hero-text").css({
                opacity: 1
            });
            $("#hero-container1 .hero-img").css({
                opacity: 1
            });
            $(".image1").fadeIn(400);
            $(".image2").fadeOut(1000);
            $(".image3").fadeOut(1000);
            $(".hero-container").css({
                "overflow-y":"hidden"
            });
        }

        if (value==2)
        {
            left=25;
            l1=-100;
            l2=0;
            l3=100;
            $("#hero-container1 .hero-text").animate({
                opacity: 0
            },700);
            $("#hero-container1 .hero-img").animate({
                opacity: 0
            },700);
            $(".image2").fadeIn(400);
            $(".image1").fadeOut(1000);
            $(".image3").fadeOut(1000);
            $(".hero-container").css({
                "overflow-y":"hidden"
            });
            speech1();
        }
        if(value==3){
            left=0;
            l1=-200;
            l2=-100;
            l3=0;
            $("#hero-container1 .hero-text").animate({
                opacity: 0
            },700);
            $("#hero-container1 .hero-img").animate({
                opacity: 0
            },700);
            $(".image3").fadeIn(400);
            $(".image2").fadeOut(1000);
            $(".image1").fadeOut(1000);
        }


        $(".navigation").animate({
            left:left+"%"
        },300);

        setTimeout(function () {
            $(".nav").css({
                border: "0px solid white"
            });
        },200);
        setTimeout(function () {
            $("#nav"+value).css({
                border: "1px solid white"
            });
        },250);

       $("#hero-container1").animate({
           left:l1+"%"
       },1200,"swing");
        $("#hero-container2").animate({
            left:l2+"%"
        },1200,"swing");
        $("#hero-container3").animate({
            left:l3+"%"
        },1200,"swing");
    });

    $("#header-icon").click(function () {
        $(".header").animate({
            left:0
        },300);
    });


    $(".start_button").click(function () {
        $("#nline1").animate({
            height:"105px"
        },1000);
        setTimeout(function () {
            $("#nline2").css({
                left:"21%"
            });
        },1000);
        setTimeout(function () {
            $(".primary_school").css({
                opacity:1
            })
        },1500);
        setTimeout(function () {
            $("#nline3").css({
                top:"58.6%"
            })
        },2000);
        setTimeout(function () {
            $(".high_school").css({
                opacity:1
            })
        },2500);
        setTimeout(function () {
            $("#nline4").css({
                top:"25.6%"
            })
        },3000);
        setTimeout(function () {
            $(".senior_high_school").css({
                opacity:1
            })
        },3500);
        setTimeout(function () {
            $("#nline5").css({
                width:"485px"
            })
        },4000);
        setTimeout(function () {
            $(".college").css({
                opacity:1
            })
        },4500);
        setTimeout(function () {
            $("#nline6").css({
                width:"90px"
            })
        },4600);
        setTimeout(function () {
            $(".skills").css({
                opacity:1
            })
        },5500);
        setTimeout(function () {
            $("#nline7").css({
                height:"120px"
            })
        },6000);
        setTimeout(function () {
            $(".project").css({
                display:"block"
            })
        },6000);
        setTimeout(function () {
            $(".certification").css({
                opacity:1
            })
        },6500);
        setTimeout(function () {
            $("#nline8").css({
                height:"120px"
            })
        },7000);
        setTimeout(function () {
            $(".internships").css({
                opacity:1
            });
            $(".hero-container").css({
                "overflow-y":"scroll"
            });
        },7500);
    });

    $(".project").click(function () {
        $(".projects_container").fadeIn(1000);
    });

    $("#projects_close").click(function () {
        $(".projects_container").fadeOut(1000);
    });

    $(".machine_option").click(function () {
        $(this).css({
            "background-color":"white",
            color:"black"
        });
        $(".web_option").css({
            "background-color":"black",
            color:"white"
        });
        $(".machine_show").fadeIn(800);
        $(".web_show").fadeOut(700);
        oval=1;
        nval=1;
    });
    $(".web_option").click(function () {
        $("#project_nav_first").css({
            "background-color":"white",
            color:"black"
        });
        $(this).css({
            "background-color":"white",
            color:"black"
        });
        $(".machine_option").css({
            "background-color":"black",
            color:"white"
        });
        $(".machine_show").fadeOut(700);
        $(".web_show").fadeIn(800);
        oval=1;
        nval=1;
    });

    oval=1;
    nval=1;
    $(".project_nav").click(function () {
        $(".project_nav").css({
            "background-color":"transparent",
            color:"white"
        });
        $(this).css({
            "background-color":"white",
             color:"black"
        });

        nval=$(this).data("number");
        $(".work").fadeOut(300);
        $(".workw").fadeOut(300);
        $("#work"+nval).fadeIn(500);
        oval=nval;
    });

    $(".selected_work").scroll(function () {
        if($(this).scrollTop()>=100){
            $(".projects_option_area").animate({
                height:0
            },1000)
        }
        if($(this).scrollTop()<100){
            $(".projects_option_area").animate({
                height:"16vh"
            },1000)
        }
    })
});