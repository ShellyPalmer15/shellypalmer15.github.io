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
    data: [{
        y: '2011 Q3',
        Android: 57.4,
        iOS: 13.8,
        Windows: 1.2,
        Blackberry: 9.6,
        Others: 18
    }, {
        y: '2012 Q3',
        Android: 74.9,
        iOS: 14.4,
        Windows: 2.0,
        Blackberry: 4.1,
        Others: 4.5
    }, {
        y: '2013 Q3',
        Android: 81.2,
        iOS: 12.8,
        Windows: 3.6,
        Blackberry: 1.7,
        Others: 0.6
    }, {
        y: '2014 Q3',
        Android: 84.4,
        iOS: 11.7,
        Windows: 2.9,
        Blackberry: 0.5,
        Others: 0.6
    }],
    xkey: 'y',
    ykeys: ['Android', 'iOS', 'Windows', 'Blackberry', 'Others'],
    labels: ['Android', 'iOS', 'Windows', 'Blackberry', 'Others'],
    resize: true,
    lineColors: ['#57ad68', '#5088f7', '#9f00a7', '#333', '#999'],
    postUnits: ['%'],
    xlables: ['Q3'],
    fillOpacity: ['0.90'],
    ymax: ['100']
});
Morris.Line({
    element: 'smartphoneVendormkt',
    data: [{
        y: '2011 Q3',
        Samsung: 22.7,
        Apple: 13.8,
        Xiaomi: 0,
        Lenovo: 0.4,
        LG: 3.7,
        Others: 59.4
    }, {
        y: '2012 Q3',
        Samsung: 31.2,
        Apple: 14.4,
        Xiaomi: 1.0,
        Lenovo: 3.7,
        LG: 3.7,
        Others: 46.0
    }, {
        y: '2013 Q3',
        Samsung: 32.2,
        Apple: 12.8,
        Xiaomi: 2.1,
        Lenovo: 4.7,
        LG: 4.6,
        Others: 43.6
    }, {
        y: '2014 Q3',
        Samsung: 23.7,
        Apple: 11.7,
        Xiaomi: 5.2,
        Lenovo: 0.4,
        LG: 5.0,
        Others: 49.3
    }],
    xkey: 'y',
    ykeys: ['Samsung', 'Apple', 'Xiaomi', 'Lenovo', 'LG', 'Others'],
    labels: ['Samsung', 'Apple', 'Xiaomi', 'Lenovo', 'LG', 'Others'],
    resize: true,
    lineColors: ['#57ad68', '#5088f7', '#DC3434', '#31AADC', '#F5A239', '#999'],
    postUnits: ['%'],
    xlables: ['Q3'],
    fillOpacity: ['0.90'],
    ymax: ['100']
});
Morris.Donut({
    element: 'iosversions',
    data: [{
        label: "iOS 8",
        value: 64
    }, {
        label: "iOS 7",
        value: 32
    }, {
        label: "Earlier",
        value: 4
    }],
    resize: true,
});
Morris.Donut({
    element: 'androidversions',
    data: [{
        label: "Froyo",
        value: 0.5
    }, {
        label: "Gingerbread",
        value: 9.1
    }, {
        label: "Ice Cream Sandwich",
        value: 7.8
    }, {
        label: "Jelly Bean",
        value: 48.7
    }, {
        label: "KitKat",
        value: 33.9
    }],
    resize: true,
    colors: ['rgba(111,173,12,.2)', 'rgba(111,173,12,.4)','rgba(111,173,12,.6)','rgba(111,173,12,.8)','rgba(111,173,12,1)']
});
Morris.Line({
  element: 'deviceshipments',
  data: [
    { y: '2013', a: 296131,  b: 207082},
    { y: '2014', a: 276457,  b: 229085},
    { y: '2015', a: 261005,  b: 272904}
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Traditional PCs', 'Tablets']
});
// Morris.Line({
//   element: 'xboxps4',
//   data: [
//     { y: '2013-11', a: 1,  b: 1},
//     { y: '2013-12', a: 4.2,  b: 2},
//     { y: '2014-01', a: 276457,  b: 229085},
//     { y: '2014-02', a: 5.3,  b: 229085},
//     { y: '2014-03', a: 276457,  b: 229085},
//     { y: '2014-04', a: 276457,  b: 229085},
//     { y: '2014-05', a: 276457,  b: 229085},
//     { y: '2014-06', a: 276457,  b: 229085},
//     { y: '2014-07', a: 276457,  b: 229085},
//   ],
//   xkey: 'y',
//   ykeys: ['a', 'b'],
//   labels: ['Traditional PCs', 'Tablets']
// });

