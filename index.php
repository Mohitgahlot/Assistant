<?php
/**
 * Created by PhpStorm.
 * User: mohitgahlot
 * Date: 1/17/18
 * Time: 3:08 PM
 */
//$out=shell_exec("sudo python siri.py");
//if($out){
//    echo "<h1>".$out."</h1>";
//}
//else{
//    echo "<h1>NOT DONE</h1>";
//}
//die();
//



//$out=shell_exec("python3 siri.py '$q' '$t' ");


// Execute the python script with the JSON data
//$out = shell_exec('python3 siri.py ' . escapeshellarg(json_encode($data)));

?>



<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" type="text/css" href="resource/css/style.css"/>
        <link rel="stylesheet" type="text/css" href="resource/css/queries.css"/>
        <link href="https://fonts.googleapis.com/css?family=Quattrocento" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Poiret+One" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
        <script src="https://use.fontawesome.com/b0855cfc40.js"></script>
        <script src='https://code.responsivevoice.org/responsivevoice.js'></script>
        <title>Mohit Gahlot</title>
        <meta name="theme-color" content="#ffffff">
    </head>

    <body>

        <div class="main-wrapper">
            <div class="image image1">
            </div>
            <div class="image image2">
            </div>
            <div class="image image3">
            </div>
            <div class="hero-container">
                <div id="header-icon">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </div>

                <div class="header">

                </div>

                <div class="imageText">
                    <p id="M">Alex</p>
                </div>
                <div class="navigation">
                    <div class="nav" id="nav1" data-value="1">
                        Home
                    </div>
                    <div id="line1"></div>
                    <div class="nav" id="nav2" data-value="2">
                        Assistance
                    </div>
                    <div id="line2"></div>
                    <div class="nav" id="nav3" data-value="3">
                        About Alex
                    </div>
                </div>
                <div id="hero-container1">
                    <svg width="200px"  height="200px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="hero-img lds-double-ring" style="background: none;"><circle cx="50" cy="50" ng-attr-r="{{config.radius}}" ng-attr-stroke-width="{{config.width}}" ng-attr-stroke="{{config.c1}}" ng-attr-stroke-dasharray="{{config.dasharray}}" fill="none" stroke-linecap="round" r="40" stroke-width="4" stroke="#fdfdfd" stroke-dasharray="62.83185307179586 62.83185307179586" transform="rotate(263.333 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1.8s" begin="0s" repeatCount="indefinite"></animateTransform></circle><circle cx="50" cy="50" ng-attr-r="{{config.radius2}}" ng-attr-stroke-width="{{config.width}}" ng-attr-stroke="{{config.c2}}" ng-attr-stroke-dasharray="{{config.dasharray2}}" ng-attr-stroke-dashoffset="{{config.dashoffset2}}" fill="none" stroke-linecap="round" r="35" stroke-width="4" stroke="#85a2b6" stroke-dasharray="54.97787143782138 54.97787143782138" stroke-dashoffset="54.97787143782138" transform="rotate(-263.333 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;-360 50 50" keyTimes="0;1" dur="1.8s" begin="0s" repeatCount="indefinite"></animateTransform></circle></svg>                        <div class="hero-text">
                           <p>The NorthCap University</p>
                        </div>
                </div>
                <div id="hero-container2">
                    <div class="speak-icon">
                        <div class="google-microphone"><div class="shadow listening"><div class="gn"><div class="mc"></div></div></div></div>
                        <div id="wave">
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </div>
                    </div>
                    <div class="content-area">
                        <textarea>

                        </textarea>
                    </div>
                </div>
                <div id="hero-container3">
                    <div class="hero-text">
                        <div class="active-area">
                            <div class="start_button">
                                Start
                            </div>
                            <div class="primary_school">
                                <p class="primary_school_head">
                                    Project Name
                                </p>
                                <p class="primary_school_disc">
                                    NLP based Intelligent Assistant
                                </p>
                            </div>
                            <div class="high_school">
                                <p class="high_school_head">
                                    Created By
                                </p>
                                <p class="high_school_disc">
                                    Mohit Gahlot<br><br>
                                    Mayank Dhingra<br><br>
                                    Garima Bhayana
                                </p>
                            </div>
                            <div class="senior_high_school">
                                <p class="senior_high_school_head">
                                   Mentor
                                </p>
                                <p class="senior_high_school_disc">
                                    Mrs. Meghna Sharma<br/><br/>
                                    Assistant Professor<br/><br/>
                                    The NorthCap University<br><br/> Gurugram<br>
                                </p>
                            </div>
                            <div class="skills">
                                <p class="skills_head">
                                      Language Used
                                </p>
                                <p class="skills_disc">
                                     NLP: Python<br><br>
                                     Web Development: HTML, CSS, jQuery, php<br><br>
                                </p>
                            </div>
                            <div class="certification">
                                <p class="certification_head">
                                    API used
                                </p>
                                <p class="certification_disc">
                                    GTTS api<br><br>
                                    Google Speech to Text<br><br>
                                    Python NLTK Library<br><br>
                                    NLP<br><br>
                                </p>
                            </div>
                            <div class="internships">
                                <p class="internships_head">
                                     Process Flow
                                </p>
                                <p class="internships_disc">
                                    Speech to Text<br><br>
                                    Pre-Processing the Text<br><br>
                                    Detecting the intended question<br><br>
                                    Check in SQL table<br><br>
                                    Giving response in text and speech<br><br>
                                </p>
                            </div>
                            <a class="project">
                                <p class="project_head">
                                     Projects
                                </p>
                            </a>

                            <div class="vline" id="nline1"></div>
                            <div id="nline2"></div>
                            <div class="vline" id="nline3"></div>
                            <div class="vline" id="nline4"></div>
                            <div class="vline" id="nline5"></div>
                            <div class="vline" id="nline6"></div>
                            <div class="vline" id="nline7"></div>
                            <div class="vline" id="nline8"></div>
                            <div class="vline" id="nline9"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
        <script src="resource/js/Script.js"></script>
    </body>
</html>