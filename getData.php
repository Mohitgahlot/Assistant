<?php
/**
 * Created by PhpStorm.
 * User: mohitgahlot
 * Date: 5/14/18
 * Time: 11:13 PM
 */

putenv("PATH=/Library/Frameworks/Python.framework/Versions/3.5/bin/:".exec('echo $PATH'));
if(!empty($_POST['result1'])){
    $q=$_POST['result1'];
    $cmd=escapeshellcmd("python3 siri.py");
    $out=shell_exec($cmd." '$q' '0' "." 2>&1");
    $output=(explode("**",$out));
    echo json_encode($output);
    exit();
}