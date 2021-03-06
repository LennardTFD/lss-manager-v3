(function ($, I18n) {
    I18n.translations.de['lssm']['aaosearch'] = {
        search_aao: "AAO suchen",
        use_dd: "Dropdown nutzen: ",
        reset: "Zurücksetzen",
        select: "Bitte wählen..."
    };
    I18n.translations.en['lssm']['aaosearch'] = {
        search_aao: "Search AAO",
        use_dd: "Use dropdown: ",
        reset: "Reset",
        select: "Please select..."
    };
	I18n.translations.nl['lssm']['aaosearch'] = {
        search_aao: "AUR Doorzoeken",
        use_dd: "Gebruik dropdown-menu: ",
        reset: "Reset",
        select: "Maak je keuze.."
    };
    /**
     * Creates a select
     */
    let use_dropdown = lssm.settings.get("aaos_dropdown", false).toString();
    function addToDropdown()
    {
        "use strict";
        // Add all the original AAO options
        $(".aao,.vehicle_group").each(function (i,e) {
            e = $(e);
            let option = document.createElement("option");
            option.value = e.attr('id');
            option.text = e.text();
            $("#lssm_aao_dropdown").append(option);
        });

        // When we select something
        $("#lssm_aao_dropdown").on("change", function(){
            let aao_id = $(this).val();
            // We need a ID
            if (aao_id === -1)
                return;
            // Get the original button
            $("#"+aao_id).click();
            setTimeout(function(){
                $('#lssm_aao_dropdown').val("-1");
            }, 500);
        });
    }

    /**
     * Formats the options for the select
     * @param option
     * @returns {*}
     */
    function formatOptions(option)
    {
        "use strict";
        if(typeof option.id == "undefined" || option.id === "-1") {
            return option.text;
        }
        option.id = option.id.replace(/vehicle_group_/,'');
        let available = document.getElementById("available_"+option.id).innerHTML;
        let bg = $("#"+option.id).css("background-color");
        if (typeof bg != "undefined")
            option = $('<span style="background-color: '+bg+';">'+available + option.text+'</span>');
        else
            option = $('<span>'+available + option.text+'</span>');
        return option;
    }
    function activateSearch()
    {
        "use strict";
        $("#mission-aao-group").before('<input type="text" search_class="aao_searchable" class="search_input_field" id="lssm_aao_search" style="min-width: 400px;" placeholder="'+I18n.t('lssm.aaosearch.search_aao')+'">');
        $('#lssm_aao_search').focus();
        $("#mission-aao-group").before('<div id="lssm_aao_results"></div>');
        $("#mission-aao-group").before('<div id="lssm_vehicle_group_results"></div>');
        $("a[id^='aao_']").css("display", "inline-block");
        $("#lssm_aao_search").on("keyup", function(){
            "use strict";
            let value = this.value;
            if(value.length > 0)
            {
                if($("#lssm_aao_results > a[id^='lssm_aao']:containsci('"+value+"')").length === 0) {
                    $("a[id^='aao_']:containsci('" + value + "')").each(function() {
                        let id = this.id;
                        $(this).clone().prop({ id: "lssm_"+id}).appendTo("#lssm_aao_results").on("click", function(){
                            $("#"+this.id.substring(5)).click();
                        });
                    });
                }
                if($("#lssm_vehicle_group_results > a[id^='lssm_vehicle_group']:containsci('"+value+"')").length === 0) {
                    $("a[id^='vehicle_group_']:containsci('" + value + "')").each(function() {
                        let id = this.id;
                        $(this).clone().prop({ id: "lssm_"+id}).appendTo("#lssm_vehicle_group_results").on("click", function(){
                            $("#"+this.id.substring(5)).click();
                        });
                    });
                }
                $("#mission-aao-group div:not(.clearfix)").each(function() {
                    this.style.setProperty("display", "none");
                });
                $("#lssm_aao_results > a[id^='lssm_aao_']:not(:containsci('"+value+"'))").remove();
                $("#lssm_vehicle_group_results > a[id^='lssm_vehicle_group_']:not(:containsci('"+value+"'))").remove();
            }
            else
            {
                $("#mission-aao-group div:not(.clearfix)").each(function() {
                    this.style.setProperty("display", "block");
                });
                $("#lssm_aao_results > a").remove();
                $("#lssm_vehicle_group_results > a").remove();
            }
        });
    }
    /**
     * Initialize
     */
    $("#mission-aao-group").before(I18n.t('lssm.aaosearch.use_dd')+'<div class="onoffswitch"><input class="onoffswitch-checkbox" id="lssm_aao_search_dropdown" '+((use_dropdown==="true")?'checked="checked"':'')+' value="true" name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="lssm_aao_search_dropdown"></label></div>');
    // Add a reset button
    $("#mission-aao-group").before('<button id="lssm_aao_reset" class="btn btn-small btn-danger">'+I18n.t('lssm.aaosearch.reset')+'</button>');
    if(use_dropdown === "true")
    {
        // Hide all original AAO buttons
        $("#mission-aao-group div:not(.clearfix)").each(function() {
            this.style.setProperty("display", "none");
        });
        // Create a new select
        $("#mission-aao-group").before('<select id="lssm_aao_dropdown" name="lssm_aao_dropdown" style="min-width: 400px;"><option value="-1">'+I18n.t('lssm.aaosearch.select')+'</option></select>');
        // Add the original AAO's to the select
        addToDropdown();
        // Format the options from the select
        $( "#lssm_aao_dropdown" ).select2({
            templateResult: formatOptions
        });
    }
    else
    {
        activateSearch();
    }

    $("#lssm_aao_search_dropdown").on("click", function() {
        "use strict";
        lssm.settings.set("aaos_dropdown", this.checked);
        if(this.checked)
        {
            $("#lssm_aao_search,#lssm_aao_results,#lssm_vehicle_group_results").remove();
            // Hide all original AAO buttons
            $("#mission-aao-group div:not(.clearfix)").each(function() {
                this.style.setProperty("display", "none");
            });
            // Create a new select
            $("#mission-aao-group").before('<select id="lssm_aao_dropdown" name="lssm_aao_dropdown" style="min-width: 400px;"><option value="-1">'+I18n.t('lssm.aaosearch.select')+'</option></select>');
            addToDropdown();
            // Format the options from the select
            $( "#lssm_aao_dropdown" ).select2({
                templateResult: formatOptions
            });
        }
        else
        {
            $("#mission-aao-group div:not(.clearfix)").each(function() {
                this.style.setProperty("display", "block");
            });
            $("#lssm_aao_dropdown").remove();
            $(".select2:has(#select2-lssm_aao_dropdown-container)").remove();
            activateSearch();
        }
    });
    
    $("#lssm_aao_reset").on("click", function(){
        "use strict";
        vehicleSelectionReset();
    });
    
})($, I18n);
