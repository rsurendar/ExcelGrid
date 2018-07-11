(function() {
    //var table = document.createElement('table');
    var mainGridData = '<table><tbody>',
        row = 0,
        col = 0;
    for (row = 0; row < 5000; row++) {
        mainGridData += '<tr id=gtRow' + row + '>';
        for (var col = 0; col < 30; col++) {
            mainGridData += '<td id=GTrOW' + row + col + '>Tex' + row + '#' + col + '</td>';
        }
        mainGridData += '</tr>'
    }
    mainGridData += '</tbody></table>';
    // document.getElementById("gt-grid").outerHTML = mainGridData;
    var d1 = document.getElementById('gt-grid');
    d1.insertAdjacentHTML('afterbegin', mainGridData);
    //document.body.innerHTML(mainGridData);



})();