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

function initPushwoosh() {
    var pushNotification = window.plugins.pushNotification;
    pushNotification.onDeviceReady();
    
    pushNotification.registerDevice({alert:true, badge:true, sound:true, pw_appid:"4F8A0-B1178", appname:"JMU AfterDark"},
                                    function(status) {
                                    var deviceToken = status['deviceToken'];
                                    console.warn('registerDevice: ' + deviceToken);
                                    },
                                    function(status) {
                                    console.warn('failed to register : ' + JSON.stringify(status));
                                    navigator.notification.alert(JSON.stringify(['failed to register ', status]));
                                    }
                                    );
    
    pushNotification.setApplicationIconBadgeNumber(0);
    
    document.addEventListener('push-notification', function(event) {
                                                            var notification = event.notification;
                                                        navigator.notification.alert(notification.aps.alert);
                                                                pushNotification.setApplicationIconBadgeNumber(0);
                                                        });
}


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity' call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        // note that this is an event handler so the scope is that of the event
        // so we need to call app.report(), and not this.report()
        initPushwoosh();
        
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
