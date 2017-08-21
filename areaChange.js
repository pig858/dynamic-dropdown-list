
function areaChange(){
    $(function() {
        $('#areaSelect').change(function() {
            
            $('#citySelect').empty().append("<option value='no'>Please select!</option>");
            var i = 0;
            $.ajax({
                type: "post",
                url: "actionAJAX.php",
                data: {
                    area_id: $('#areaSelect option:selected').val()
                },
                datatype: "json",
                success: function(result) {
                    var jresult = JSON.parse(result);
                    
                    if (jresult == "") {
                        $('#citySelect').val($('option:first').val());
                    }
                    
                    while (i < jresult.length) {
                        $("#citySelect").append("<option value='" + jresult[i]['class_sn'] + "'>" + jresult[i]['class_name'] + "</option>");
                        i++;
                    }
                },
                error: function(xhr, status, msg) {
                    console.error(xhr);
                    console.error(msg);
                }
            });
        });
    });
}
