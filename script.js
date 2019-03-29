 resetWidths();
    $(".toggleButton").click(function() {
        toggle(this);
    });

    $(".toggleButton").hover(
        function(){
            //on hover start
            $(this).addClass("buttonHoveredOver");
        }, function(){
            //on hover end
            $(this).removeClass("buttonHoveredOver");
        });

    $("#clearButton").hover(
        function(){
            //on hover start
            $(this).css("background-color","grey");
        }, function(){
            //on hover end
            $(this).css("background-color","white");
        });

    $("#clearButton").click(function() {
        $("#htmlBox").html("");
        $("#cssBox").html("");
        $("#jsBox").html("");
        run();
    });

    function toggle(id){
        var toggleBoxId = "#"+$(id).attr("for");
        if($(id).hasClass("buttonToggled")){
            $(id).removeClass("buttonToggled");
            $(toggleBoxId).addClass("hidden");
            $(toggleBoxId).removeClass("typeBox");
        } else {
            $(id).addClass("buttonToggled");
            $(toggleBoxId).removeClass("hidden");
            $(toggleBoxId).addClass("typeBox");
        }
        resetWidths();
    }

    function resetWidths(){
        var visibleNum = $(".typeBox").length;
        var widthPercentage = 99.0/visibleNum;
        var height = $(window).height()-$("#topBar").height()-20;;
        $(".typeBox").each(function (){
            $(this).css("width", widthPercentage+"%");
            $("#wrapper").css("height", height);
        });  
    } 

    $("#runButton").click(function(){
        run()
    });

    function run() {
        var htmlScript = "<html><head><style type='text/css'>" + $("#cssBox").val() + "</style></head><body>"+$("#htmlBox").val() + "</body></html>";
        $("#outputBox").contents().find("html").html(htmlScript);
        document.getElementById("outputBox").contentWindow.eval($("#jsBox").val());
    }

    run();