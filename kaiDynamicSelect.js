
var kaiDynamicSelect = {};

kaiDynamicSelect = ( function() {
    
    var twoLevelSelect = function (grandparentID,parentID,selfID,code,_defaultString) {
            var defaultString = _defaultString || "defaultString";
            
            $(function() {
                $('#'+parentID).change(function() {
                    // $('#'+selfID).empty().append("<option value=''>"+ defaultString +"</option>");
                    $.ajax({
                        type: "post",
                        url: "ajax_select.php",
                        data: {
                            year: $('#'+grandparentID+' option:selected').val(),
                            month: $('#'+parentID+' option:selected').val(),
                            code: code
                        },
                        datatype: "json",
                        success: function(result) {
                            if (result == "") {
                                $('#'+selfID).val($('option:first').val());
                            }
                            if(result){
                                $('#'+selfID).html('');
                                for(let i = 1;i<=result;i++){
                                    $("#"+selfID).append("<option value='" + i + "'>" + i + "</option>");
                                }
                            }
                        },
                        error: function(xhr, status, msg) {
                            console.error(xhr);
                            console.error(msg);
                        }
                    });
                });
            });
        },
        threeLevelSelect = function (parentID,selfID,sonID,code,_defaultString={}){
            
            var defaultString = {};
            defaultString.selfString = _defaultString.selfString || "defaultString";
            defaultString.sonString = _defaultString.sonString || "defaultString";

            $(function() {
                $('#'+parentID).change(function() {
                    $('#'+selfID).empty().append("<option value=''>"+defaultString.selfString+"</option>");
                    $('#'+sonID).empty().append("<option value=''>"+defaultString.sonString+"</option>");
                    var i = 0;
                    $.ajax({
                        type: "post",
                        url: "ajax_select.php",
                        data: {
                            country_id: $('#'+parentID+' option:selected').val(),
                            code: code
                        },
                        datatype: "json",
                        success: function(result) {
                            var jresult = JSON.parse(result);
                            if (jresult == "") {
                                $('#'+selfID).val($('option:first').val());
                                $('#'+sonID).val($('option:first').val());
                            }
                            if(jresult){
                                while (i < jresult.length) {
                                    $("#"+selfID).append("<option value='" + jresult[i]['class_sn'] + "'>" + jresult[i]['class_name'] + "</option>");
                                    i++;
                                }
                            }
                        },
                        error: function(xhr, status, msg) {
                            console.error(xhr);
                            console.error(msg);
                        }
                    });
                });
            });
        },
        daySelect = function (grandparentID,parentID,selfID,code,_defaultString) {
            var defaultString = _defaultString || "defaultString";
            
            $(function() {
                $('#'+parentID).change(function() {
                    // $('#'+selfID).empty().append("<option value=''>"+ defaultString +"</option>");
                    $.ajax({
                        type: "post",
                        url: "ajax_select.php",
                        data: {
                            year: $('#'+grandparentID+' option:selected').val(),
                            month: $('#'+parentID+' option:selected').val(),
                            code: code
                        },
                        datatype: "json",
                        success: function(result) {
                            if (result == "") {
                                $('#'+selfID).val($('option:first').val());
                            }
                            if(result){
                                $('#'+selfID).html('');
                                for(let i = 1;i<=result;i++){
                                    $("#"+selfID).append("<option value='" + i + "'>" + i + "</option>");
                                }
                            }
                        },
                        error: function(xhr, status, msg) {
                            console.error(xhr);
                            console.error(msg);
                        }
                    });
                });
            });
        },
        monthSelect = function (parentID,selfID,code,_defaultString) {
            var defaultString = _defaultString || "defaultString";
            
            $(function() {
                $('#'+parentID).change(function() {
                    // $('#'+selfID).empty().append("<option value=''>"+ defaultString +"</option>");
                    $.ajax({
                        type: "post",
                        url: "ajax_select.php",
                        data: {
                            year: $('#'+parentID+' option:selected').val(),
                            code: code
                        },
                        datatype: "json",
                        success: function(result) {
                            if (result == "") {
                                $('#'+selfID).val($('option:first').val());
                            }
                            if(result){
                                $('#'+selfID).html('');
                                for(let i = 1;i<=result;i++){
                                    $("#"+selfID).append("<option value='" + i + "'>" + i + "</option>");
                                }
                            }
                        },
                        error: function(xhr, status, msg) {
                            console.error(xhr);
                            console.error(msg);
                        }
                    });
                });
            });
        };
    return {
        twoLevelSelect: twoLevelSelect,
        threeLevelSelect: threeLevelSelect,
        daySelect: daySelect,
        monthSelect:monthSelect
    };
}());

