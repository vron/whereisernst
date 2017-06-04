//let $ = require("jquery")
"use strict";
//let m = require("jquery-modal")
let $
let color = require("color")

let inlocs = [
  {
    "lat":18.9698000,
    "lng":72852881,
    "time":1.68084787e+09,
    "img":"36bb0ede59a2046cd896ba0825f6bbaddbd54dff",
    "where":"At my desk",
    "why":"In order to finish by work",
    "when":"Well, I am here now!",
    "ernst":true
  },
  {
    "lat":-12.429433,
    "lng":130.826577,
    "time":1.68084787e+09,
    "img":"36bb0ede59a2046cd896ba0825f6bbaddbd54dff",
    "where":"At my desk",
    "why":"In order to finish by work",
    "when":"Well, I am here now!",
    "ernst":true
  },
  {
    "lat":-33.866480,
    "lng":151.216858,
    "time":1.68084787e+09,
    "img":"36bb0ede59a2046cd896ba0825f6bbaddbd54dff",
    "where":"At my desk",
    "why":"In order to finish by work",
    "when":"Well, I am here now!",
    "ernst":true
  },
  {
    "lat":-22.838563,
    "lng":-43.257544,
    "time":1.68084787e+09,
    "img":"36bb0ede59a2046cd896ba0825f6bbaddbd54dff",
    "where":"At my desk",
    "why":"In order to finish by work",
    "when":"Well, I am here now!",
    "ernst":true
  },
  {
    "lat":-33.891872,
    "lng":18.486850,
    "time":1.68084787e+09,
    "img":"36bb0ede59a2046cd896ba0825f6bbaddbd54dff",
    "where":"At my desk",
    "why":"In order to finish by work",
    "when":"Well, I am here now!",
    "ernst":true
  },
  {
    "lat":69.727247,
    "lng":30.053856,
    "time":1.68084787e+09,
    "img":"36bb0ede59a2046cd896ba0825f6bbaddbd54dff",
    "where":"At my desk",
    "why":"In order to finish by work",
    "when":"Well, I am here now!",
    "ernst":true
  },
  {
    "lat":35.71684,
    "lng":51.360775,
    "time":1.68084787e+09,
    "img":"36bb0ede59a2046cd896ba0825f6bbaddbd54dff",
    "where":"At my desk",
    "why":"In order to finish by work",
    "when":"Well, I am here now!",
    "ernst":true
  },
  {
    "lat":43.691591,
    "lng":-79.322123,
    "time":1.68084787e+09,
    "img":"36bb0ede59a2046cd896ba0825f6bbaddbd54dff",
    "where":"At my desk",
    "why":"In order to finish by work",
    "when":"Well, I am here now!",
    "ernst":true
  },
  {
    "lat":6.294033,
    "lng":6.827308,
    "time":1.68084787e+09,
    "img":"36bb0ede59a2046cd896ba0825f6bbaddbd54dff",
    "where":"At my desk",
    "why":"In order to finish by work",
    "when":"Well, I am here now!",
    "ernst":true
  },
  {
    "lat":1.264293,
    "lng":103.835426,
    "time":1.68084787e+09,
    "img":"36bb0ede59a2046cd896ba0825f6bbaddbd54dff",
    "where":"At my desk",
    "why":"In order to finish by work",
    "when":"Well, I am here now!",
    "ernst":true
  },
  {
    "lat":35.167457,
    "lng":129.071792,
    "time":1.68084787e+09,
    "img":"36bb0ede59a2046cd896ba0825f6bbaddbd54dff",
    "where":"At my desk",
    "why":"In order to finish by work",
    "when":"Well, I am here now!",
    "ernst":true
  },
  {
    "lat":29.759681,
    "lng":-95.338935,
    "time":1.68084787e+09,
    "img":"36bb0ede59a2046cd896ba0825f6bbaddbd54dff",
    "where":"At my desk",
    "why":"In order to finish by work",
    "when":"Well, I am here now!",
    "ernst":true
  },
  {
    "lat":24.443626,
    "lng":54.478250,
    "time":1.68084787e+09,
    "img":"36bb0ede59a2046cd896ba0825f6bbaddbd54dff",
    "where":"At my desk",
    "why":"In order to finish by work",
    "when":"Well, I am here now!",
    "ernst":true
  },

  {
    "lat":25.1662408,
    "lng":55.2169384,
    "time":1.68084787e+09,
    "img":"aaaa",
    "where":"Dubai",
    "why":"Customer meeting and presentation at conference.",
    "when":"For the christmas party!",
    "ernst":true
  },
  {
    "lat":60.381839,
    "lng":5.327555,
    "time":1.68084787e+09,
    "img":"36bb0ede59a2046cd896ba0825f6bbaddbd54dff",
    "where":"At my desk",
    "why":"In order to finish by work",
    "when":"Well, I am here now!",
    "ernst":true
  },
/*  {
    "lat":59.888193,
    "lng":10.563445,
    "time":1.68084787e+09,
    "img":"36bb0ede59a2046cd896ba0825f6bbaddbd54dff",
    "why":"I did see him attending a christmas party!",
    "ernst":false
  },*/
  {
    "lat":59.888640,
    "lng":10.562537,
    "time":1.68084787e+09,
    "img":"36bb0ede59a2046cd896ba0825f6bbaddbd54dff",
    "where":"At my desk",
    "why":"In order to finish by work",
    "when":"Well, I am here now!",
    "ernst":true
  },
]
// 96 186 77
function url(s) {
    var l = window.location;
    return ((l.protocol === "https:") ? "wss://" : "ws://") + l.host + l.pathname + s;
}


window.run = () => {
  $ = window.$
  let map = window.map
  let google = window.google;
  let locs = []

  if(inlocs.length > 0 ) {
    locs = inlocs
  }




  // Create a websocket such that we can listen for new messages!
  var socket = new WebSocket(url('ws'));
  socket.onopen = function(event) {
  };
  socket.onmessage = function(event) {
  var message = event.data;
    var e = JSON.parse(event.data);
    if(e.lat != undefined) {
      window.addlocations([e])
    }
  };


  var live = {}



  let updatemap = () => {
    // Remove all previous ones

        if(live.marker != undefined) {
          live.marker.setMap(null)
        }
    for(let i = 0; i < locs.length; i++) {
      if(locs[i].marker != undefined) {
        locs[i].marker.setMap(null);
        locs[i].marker = undefined
      }
    }




    // Draw all new ones - in decreasing color
    for(let j = 0; j < locs.length; j++) {
      let i = j;

    if(window.showcrowd != true && locs[i].ernst == false)
        continue

        (() => {
      let c1 = color("#60ba4d")
      let c = c1.lighten(0.5*i/(locs.length-1))

      // Set different types of icons depending on if it is a "ernst" report
      // or something reported by the community
      let icon = {}
      if(locs[i].ernst == true) {
        icon = {
          url: "/ernst.png",
          scaledSize: new google.maps.Size(64, 64) ,
        }

        locs[i].marker = new google.maps.Marker({
          position: locs[i],
          title:(new Date(locs[i].time))+"",
          icon: icon,
        });
      } else {
        icon = {
          url: "/ernst_moving.gif",
          //optimized:false,
          scaledSize: new google.maps.Size(32, 44) ,
        }

        locs[i].marker = new google.maps.Marker({
          position: locs[i],
          optimized: false,
          title:(new Date(locs[i].time))+"",
          icon: icon,
        });
      }
      let marl = locs[i].marker

      marl.setMap(map)

      let img = (locs[i].img != undefined && locs[i].img != "" ? ("<p style='text-align:center'><img style='max-width: 500px;max-height: 400px' src='/img/" + locs[i].img + "'></p>") : "")

      // show a popup for this marker
      let contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Ernst was spotted!</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Earnst</b> was reported as having been seen here at '+
      (new Date(locs[i].time))+"" +
      '.</p>'+
      '<p>' + locs[i].why + '</p>' +
      img +
      '</div>'+
      '</div>';

      if(locs[i].ernst === true) {
        contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Ernst checked in!</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Earnst</b> checked in here at '+
        (new Date(locs[i].time))+"" +
        '.</p>'+
        '<p><strong>Where:</strong>' + locs[i].where + '</p>' +
        '<p><strong>Why:</strong>' + locs[i].why + '</p>' +
        '<p><strong>I will be back:</strong>' + locs[i].when + '</p>' +
        img +
        '</div>'+
        '</div>';
      }
    //  contentString = "<p>" + Math.random() + "</p>"

      marl.addListener("click", ()=> {
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        infowindow.open(map, marl);
      })


    })()
    }



        if(window.showlive) {
          // or something reported by the community
          let icon = {}
            icon = {
              url: "/hat1.gif",
              scaledSize: new google.maps.Size(160 , 90),
            }

            live.marker = new google.maps.Marker({
              position:   {
                  "lat":59.888193,
                  "lng":10.563445,
                },
              optimized: false,
              title:(new Date(locs[i].time))+"",
              icon: icon,
            });
          let marl = live.marker

          marl.setMap(map)
        }
  }


  // The public methods which will update the map
  window.addlocations = (l) => {
    if(l.length == undefined)
      l = [l]
    for(let i = 0; i < l.length; i++) {
      locs.push(l[i])
    }
    // Never include more than the 100 latest locations reported
    for(let i = locs.length; i > 100; i--)
      locs.shift();
    locs.sort((a,b) => {return a.time - b.time})
    // Display all the locations on the map currently reported
    updatemap();
  }

  window.find = () => {
    let l = locs[locs.length-1];
    window.map.setCenter({lat: l.lat, lng: l.lng});
  };


  window.updatemap = updatemap

    updatemap()


}



window.initMap = function() {
    var style = new google.maps.StyledMapType([{
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#444444"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "color": "#f2f2f2"
            }]
        },{
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#e2e2e2"
            }]
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 45
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "color": "#46bcec"
            }, {
                "visibility": "on"
            }]
        }],
        "Styled map");

    var uluru = {
        lat: 43.92,
        lng: 15.05
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: uluru,
        backgroundColor: "none",
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                'styled_map'
            ]
        }
    });
    map.mapTypes.set('styled_map', style);
    map.setMapTypeId('styled_map');
    window.map = map;
//    window.run();





  window.report = () => {
    $("#ex1").modal()
  };
}
