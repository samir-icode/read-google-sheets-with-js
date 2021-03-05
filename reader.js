<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> 

<script>
//Published file goes here in csv format.
    $.ajax("url_goes_here").done(
        function(result){
                var rows = result.split("\n");
                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");
                        //Keep html appednig in one line, it can give error to seperating lines
                        $("#main").append("<div class='col-sm-4 col-xs-3' id='demo' style='text-align:right; color:#453bcf;'><h4>" + cells[0]+ "<span></span></h4></div>");
                }
        });
</script>
