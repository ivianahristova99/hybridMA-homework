/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    //console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');

    window.addEventListener("batterystatus", onBatteryStatus, false);
    //window.addEventListener("batterylow", onBatteryLow, false);


    applyDeviceData(device);
    
}

function applyDeviceData(device){
    document.querySelector("#version").innerHTML=device.version;
    document.querySelector("#platform").innerHTML=device.platform;
}

function test(){
    let btn = document.querySelector('ons-button');
    btn.setAttribute('modifier', (btn.getAttribute('modifier').split(" ")[1]=="large")?"large--quiet":"large")
}


function onBatteryStatus(status) {
    document.querySelector("#batteryStatus").value=status.level;
    console.log(status.level);
    if(status.level<30){
        ons.notification.toast(`Low battery status: ${status.level}%`, {"animation":"fade","timeout":"2000"});
        console.log("here");
    }
}

// function onBatteryLow(status) {
//     alert("Battery Level Low " + status.level + "%");
// }