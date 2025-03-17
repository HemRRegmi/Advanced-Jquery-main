$(document).ready(function() {
    console.log("Script is running!"); 
    $("#datepicker").datepicker({
        dateFormat: "mm/dd/yy",
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true
    });
    $("#animate-btn").click(function() {
        console.log("Animation button clicked!");
        $("#element").css("display", "block");
        $("#element").animate({
            width: "300px",
            height: "200px",
            opacity: 0.8
        }, 1000, "easeOutBounce", function() {
            console.log("Animation repeat 100!");
        });
    });
    $("#accordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });
    $("#progressbar").progressbar({ value: 0 });
    $("#start-progress").click(function() {
        let progress = 0;
        let interval = setInterval(function() {
            progress += 10;
            $("#progressbar").progressbar("value", progress);
            if (progress >= 100) {
                clearInterval(interval);
                console.log("Progress repeat 100!");
                
            }
        }, 300);
    });
    $("#draggable").draggable().resizable();
    $("#dialog").dialog({ autoOpen: false });
    $("#open-dialog").click(function() {
        $("#dialog").dialog("open");
    });
});
