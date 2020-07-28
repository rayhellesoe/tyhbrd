$(".driver-name").click(e => {
    let drivers = $(".driver-name")
    
    for (let i = 0; i < drivers.length; i++) {
        if (drivers[i].src.search("-active") !== -1) {
            drivers[i].src = drivers[i].src.replace("-active","")
        }
    }

    if (e.target.id === "lhamilton-vod") {
        $(".main-video")[0].src = `${e.target.getAttribute("src").replace(".png", "")}-vod.mp4`
    } else {
        $(".main-video")[0].src = `${e.target.getAttribute("src").replace(".png", "")}.mp4`
    }

    e.target.src = e.target.getAttribute("src").replace(".png", "-active.png")

    // $('#driver-stats')[0].setAttribute("src", `assets/hud/stats-${e.target.id}.png`)
    // console.log()
})

$("#cam-config").click(e => {
    $("#main-section").hide();
    $(".config-menu").show();
})

// TODO: Update to use a cleaner method of switching images

$("#step1").click(e => {
    $(".config-ui").hide();
    $("#step2").show();
})

$("#step2").click(e => {
    $(".config-ui").hide();
    $("#step3").show();
})

$("#step3").click(e => {
    $(".config-ui").hide();
    $("#step4").show();
})

$("#step4").click(e => {
    $(".config-ui").hide();
    $("#step5").show();
})

$("#step5").click(e => {
    $(".config-ui").hide();
    $("#step6").show();
})

$("#step6").click(e => {
    $(".config-ui").hide();
    $("#step7").show();
})

$("#step7").click(e => {
    $(".config-ui").hide();
    $("#step8").show();
})

$("#step8").click(e => {
    $(".config-ui").hide();
    $("#step9").show();
})

$("#step9").click(e => {
    $(".config-ui").hide();
    $("#step10").show();
})

$("#close-menu").click(e => {
    $(".config-ui").hide();
    $(".config-menu").hide();
    $("#main-section").show();
    $("#step1").show();
})

$(".pip-video").click(e => {
    if ($(".pip-video").hasClass("pip-full")) {
        $(".pip-video").removeClass("pip-full");
        return;
    } else {
        $(".pip-video").addClass("pip-full");
    }
})

$(".track-and-stats").click(e => {
    $(".speedometer").toggle();
})

$('#toggle-audio').click(e => {
    // console.log(e.target)
    $('.pip-video')[0].muted = !$('.pip-video')[0].muted
    if ($('.pip-video')[0].muted) {
        console.log("Audio is ", $('.pip-video')[0].muted)
        $('#audio-label')[0].innerText = " ENABLE AUDIO"
        $('#audio-icon').toggleClass("fa-volume-up fa-volume-mute")
    } else {
        console.log("Audio is ", $('.pip-video')[0].muted)
        $('#audio-label')[0].innerText = " MUTE AUDIO"
        $('#audio-icon').toggleClass("fa-volume-up fa-volume-mute")
    }
})