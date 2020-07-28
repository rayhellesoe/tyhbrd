// Enable tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// Add 'hover' class to schedule-table element when hovered
$(".schedule-table").hover(
    function(){ $(this).addClass('hover') },
    function(){ $(this).removeClass('hover') },
)

// Filter scheduled races when user types in search box
function filterSchedule()
{
    let input = $('#searchQuery')[0].value.toUpperCase();
    let upcomingRaces = $(".upcoming-races").children('.schedule-table');
    let pastRaces = $(".past-races").children('.schedule-table');

    for (let i = 0; i < upcomingRaces.length; i++)
    {
        let temp = upcomingRaces[i].textContent;
        if (temp.indexOf(input) > -1)
        {
            upcomingRaces[i].style.display = "";
        }
        else
        {
            upcomingRaces[i].style.display = "none";
        }
    }

    for (let i = 0; i < pastRaces.length; i++)
    {
        let temp = pastRaces[i].textContent;
        if (temp.indexOf(input) > -1)
        {
            pastRaces[i].style.display = "";
        }
        else
        {
            pastRaces[i].style.display = "none";
        }
    }

    if ($(".upcoming-races").children(".schedule-table:visible").length === 0)
    {
        $(".upcoming-races").children(".noSearchResults")[0].style.display = "block";
    }
    else
    {
        $(".upcoming-races").children(".noSearchResults")[0].style.display = "none";     
    }

    if ($(".past-races").children(".schedule-table:visible").length === 0)
    {
        $(".past-races").children(".noSearchResults")[0].style.display = "block";
    }
    else
    {
        $(".past-races").children(".noSearchResults")[0].style.display = "none";     
    }
}

// Show and hide subscription panel
$(".sbc-open").on('click', function(){
    $(".alert").fadeIn(250);
    // $(".sbc-open").fadeOut(250);
})

$(".book-btn").on('click', function(event){
    event.preventDefault();
    event.stopPropagation();
    if(this.classList.contains('race-unavailable')) {
        return;
    }
    $(".alert").fadeIn(250);
    $(".sbc-open").fadeOut(250);
    $("html, body").animate({scrollTop: 0}, 700);
})

$(".comingsoon-btn").on('click', function(event){
    event.preventDefault();
    event.stopPropagation();
    if(this.classList.contains('race-unavailable')) {
        return;
    }
})

$(".sbc-close").on('click', function(){
    $(".alert").fadeOut(250);
    $(".sbc-open").fadeIn(250);
})

$(document).ready(function(){
    $('#watchModal').on('hide.bs.modal', function (event) {
        $("#race-video").attr('src', '');
    });

    $('#watchModal').on('show.bs.modal', function (event) {
        // If user is on mobile, open video on YouTube
        if(window.innerWidth < 1136){
            event.stopPropagation();
            event.preventDefault;
            let video_url = $(event.relatedTarget).data('whatever');
            window.open(video_url, "_blank");
            return false;
        };

        var button = $(event.relatedTarget);
        var recipient = button.data('whatever');
        $("#race-video").attr('src', recipient);
    })
});

$('#liveStreamOptions').on('show.bs.modal', function (e) {
    let threesixtyRace = $(e.relatedTarget).data('threesixty-race');
    let youtubeRace = $(e.relatedTarget).data('youtube-race');
    if (threesixtyRace.length < 5) {
        $('#threesixty-video').hide();
    } else {
        $('#threesixty-video').show();
    };
    if (youtubeRace.length < 5) {
        $('#youtube-video').hide();
    } else {
        $('#youtube-video').show();
    };
    $('#threesixty-video')[0].href = threesixtyRace;
    $('#youtube-video')[0].href = youtubeRace;
});

$('#watchModal').on('show.bs.modal', function (event) {
    $('.youtube-race')
})

$(".more-races-link").on('click', function(event){
    event.stopPropagation();
    event.preventDefault();
})

$(".more-races-accordion").on('click', function(event){
    $('.collapse').collapse('toggle') 
})

$("#explore-yaris").hover(
    e => {
        $(".explore-thumb")[0].setAttribute("src", "assets/home/explore.gif")
    },
    e => {
        $(".explore-thumb")[0].setAttribute("src", "assets/home/yaris-thumb.jpg")
    }
)

$("#test-one").hover(
    e => {
        $(".testone-thumb")[0].setAttribute("src", "assets/home/test1.gif")
    },
    e => {
        $(".testone-thumb")[0].setAttribute("src", "assets/home/live-thumb.jpg")
    }
)

$("#test-two").hover(
    e => {
        $(".testtwo-thumb")[0].setAttribute("src", "assets/home/test2.gif")
    },
    e => {
        $(".testtwo-thumb")[0].setAttribute("src", "assets/home/book-thumb.jpg")
    }
)

$("#test-three").hover(
    e => {
        $(".testthree-thumb")[0].setAttribute("src", "assets/home/test3.gif")
    },
    e => {
        $(".testthree-thumb")[0].setAttribute("src", "assets/home/vod-thumb.jpg")
    }
)