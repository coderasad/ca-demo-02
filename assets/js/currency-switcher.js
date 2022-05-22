function setCountry(code){
        if(code || code==''){
            var text = jQuery('a[cunt_code="'+code+'"]').html();
            $(".currency-dropdown dt a span").html(text);
        }
    }
    $(document).ready(function() {
        $(".currency-dropdown img.flag").addClass("flagvisibility");

        $(".currency-dropdown dt a").click(function() {
            $(".currency-dropdown dd ul").toggle();
        });

        $(".currency-dropdown dd ul li a").click(function() {
            //console.log($(this).html())
            var text = $(this).html();
            $(".currency-dropdown dt a span").html(text);
            $(".currency-dropdown dd ul").hide();
            $("#result").html("Selected value is: " + getSelectedValue("country-select"));
        });

        function getSelectedValue(id) {
            //console.log(id,$("#" + id).find("dt a span.value").html())
            return $("#" + id).find("dt a span.value").html();
        }

        $(document).bind('click', function(e) {
            var $clicked = $(e.target);
            if (! $clicked.parents().hasClass("currency-dropdown"))
                $(".currency-dropdown dd ul").hide();
        });


        $("#flagSwitcher").click(function() {
            $(".currency-dropdown img.flag").toggleClass("flagvisibility");
        });
    });