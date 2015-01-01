$(function() {
    'use strict';

    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style')
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        )
        document.querySelector('head').appendChild(msViewportStyle)
    }
    $("img").unveil(200, function() {
        $(this).load(function() {
            this.style.opacity = 1;
        });
    });
})
/*
 * Play with this code and it'll update in the panel opposite.
 *
 * Why not try some of the options above?
 *
 */
Morris.Line({
  element: 'smartphoneOSmkt',
  data: [
  { y: '2011 Q3', Android: 57.4, iOS: 13.8, Windows: 1.2, Blackberry: 9.6, Others: 18 },
  { y: '2012 Q3', Android: 74.9, iOS: 14.4, Windows: 2.0, Blackberry: 4.1, Others: 4.5 },
  { y: '2013 Q3', Android: 81.2, iOS: 12.8, Windows: 3.6, Blackberry: 1.7, Others: 0.6 },
  { y: '2014 Q3', Android: 84.4, iOS: 11.7, Windows: 2.9, Blackberry: 0.5, Others: 0.6 }
  ],
  xkey: 'y',
  ykeys: ['Android', 'iOS','Windows', 'Blackberry', 'Others'],
  labels: ['Android', 'iOS','Windows', 'Blackberry', 'Others'],
  resize:true,
  lineColors:['#57ad68','#5088f7','#9f00a7','#333','#999'],
  postUnits:['%'],
  xlables:['Q3'],
  fillOpacity: ['0.90'],
  ymax:['100']
});
