var popoverDefaultWhiteList = $.fn.tooltip.Constructor.Default.whiteList;

// Allow button on popover
popoverDefaultWhiteList.button = ['onclick', 'class'];

var lastCell = null;

jQuery(function ($) {
    $(".shelf-cell").popover({ trigger: "click" }).click(function (event) {
        event.stopPropagation();
        if (lastCell && lastCell !== event.target)
            $(lastCell).popover('hide')
        lastCell = event.target;

    }).on('inserted.bs.popover', function () {
        $(".popover").click(function (event) {
            event.stopPropagation();
        })
    })

    $(document).click(function () {
        $(lastCell).popover('hide');
        lastCell = null;
    })
})
