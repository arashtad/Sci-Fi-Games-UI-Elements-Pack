/***
  __    ___    __    __   _    _____   __    ___
 / /\  | |_)  / /\  ( (` | |_|  | |   / /\  | | \
/_/--\ |_| \ /_/--\ _)_) |_| |  |_|  /_/--\ |_|_/

*** Product Name:    Sci-Fi Game UI
*** Description:     UI elements pack for Sci-Fi games.
*** Author:          Arashtad
*** Author URI:      https://arashtad.com
*** Version:         1.0.0
*** Creation Date:   Nov 21, 2022
*** License:         GNU General Public License V3
*** Copyright:       (C) 2022 - Arashtad.com. All Rights Reserved.

***/

$(document).ready(function() {
    // Changing the default browser scrollbar
    $(function() {
        $('.ar-slider-list > li, .overlayscroll').overlayScrollbars({ });
    });

    $('.ar-slider').each(function() {
        var $slider = $(this);
        var len = $slider.find('li').length;
        var prev = $slider.find('.ar-prev');
        var next = $slider.find('.ar-next');
        $slider.find('li:first-child').addClass('active');
        var active = 1;
        $(prev).click(function() {
            if(active === 1) {
                $slider.find('li:first-child').removeClass('active');
                $slider.find('li:last-child').addClass('active');
                active = len;
            }
            else {
                $slider.find('li:nth-child(' + active + ')').removeClass('active');
                active--;
                $slider.find('li:nth-child(' + active + ')').addClass('active');
            }
        });
        $(next).click(function() {
            if(active === len) {
                $slider.find('li:last-child').removeClass('active');
                $slider.find('li:first-child').addClass('active');
                active = 1;
            }
            else {
                $slider.find('li:nth-child(' + active + ')').removeClass('active');
                active++;
                $slider.find('li:nth-child(' + active + ')').addClass('active');
            }
        });
    });

    $('.ar-tabs').each(function() {
        var $tabs = $(this);
        var tabLen = $tabs.find('.ar-tabs-buttons').find('li').length;
        var activeTab = 1;
        $tabs.find('.ar-tabs-buttons').find('li:first-child').addClass('active');
        $tabs.find('.ar-tabs-content').find('li:first-child').addClass('active');

        $tabs.find('.ar-tabs-buttons > li').click(function() {
            activeTab = $(this).index() + 1;
            $tabs.find('.ar-tabs-buttons').find('li').removeClass('active');
            $tabs.find('.ar-tabs-content').find('li').removeClass('active');
            $tabs.find('.ar-tabs-buttons').find('li:nth-child(' + activeTab + ')').addClass('active');
            $tabs.find('.ar-tabs-content').find('li:nth-child(' + activeTab + ')').addClass('active');
        });
    });

    function resizeScreen() {
        var winHeight = $(window).height();
        var screenHeight = (winHeight / 100) * 29;
        var screenWidth = screenHeight * 4.05;
        $('.screen, .screen .inner').width(screenWidth);
    }
    resizeScreen();
    $(window).resize(function(){
        resizeScreen();
    });

    // Opening modals
    $('.ar-modal').click(function() {
        var id = $(this).attr('data-rel');
        $('#' + id).addClass('open');
    });

    // Closing modals
    $('.ar-modal-close').each(function() {
        var id = $(this).parent('.ar-modal-window').attr('id');
        $(this).click(function() {
            $('#' + id).removeClass('open');
        });
    });
});
