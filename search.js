function doSearch() {

    var active = document.activeElement.getAttribute("id");

    var searchText = document.getElementById(active).value;
    var targetTable = document.getElementById('dataTable');
    var targetTableColCount;

    /*$('option').click(function(){
        lastOption = $(this);
        var lastIsSelected = lastOption.is(':selected');
        var lastText = lastOption.text();
        // ...
    });*/


    //Loop through table rows
    for (var rowIndex = 0; rowIndex < targetTable.rows.length; rowIndex++) {
        var rowData = '';

        //Get column count from header row
        if (rowIndex == 0) {
            targetTableColCount = targetTable.rows.item(rowIndex).cells.length;
            //do not execute further code for header row.
        }

        // Get column where the search box is
        var ths = document.getElementsByTagName('th');

        for (var i=0; i<ths.length; i++) {
            if (ths[i].innerHTML.indexOf(active) !== -1) {
                var id = i;
                break;
            }
        }


        //Search data column
        rowData += targetTable.rows.item(rowIndex).cells.item(id).textContent;


        //If search term is not found in row data
        //then hide the row, else show
        if (rowData.toLowerCase().indexOf(searchText.toLowerCase()) == -1)
            targetTable.rows.item(rowIndex).style.display = 'none';
        else
            targetTable.rows.item(rowIndex).style.display = 'table-row';

        //console.log(rowData);
        //console.log(searchText);
    }
}





