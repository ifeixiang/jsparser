$(function() {
    var a = a || {};
    a = {
        defaultItem: 6,
        defaultDuration: 1200,
        html: $("div.wrapper").html(),
        imageCaption: $("#imageCaption"),
        sliderCtrl: $("#slider"),
        coverflowCtrl: $("#coverflow"),
        coverflowImages: $("#coverflow").find("img"),
        coverflowItems: $(".coverflowItem"),
        sliderVertical: $("#slider-vertical"),
        origSliderHeight: "",
        sliderHeight: "",
        sliderMargin: "",
        difference: "",
        proportion: "",
        handleHeight: "",
        listContent: "",
        artist: "",
        album: "",
        sortable: $("#sortable"),
        scrollPane: $("#scroll-pane"),
        setDefault: function() {
            this.defaultItem -= 1,
            $(".coverflowItem").eq(this.defaultItem).addClass("ui-selected")
        },
        setCaption: function(a) {
            this.imageCaption.html(a)
        },
        init_coverflow: function(b) {
            this.setDefault(),
            this.coverflowCtrl.coverflow({
                item: a.defaultItem,
                duration: 1200,
                select: function(b, c) {
                    a.skipTo(c.value)
                }
            }),
            this.coverflowImages.each(function(b, c) {
                var d = $(this);
                try {
                    a.listContent += "<li class='ui-state-default coverflowItem' data-itemlink='" + b + "'>" + d.data("artist") + " - " + d.data("album") + "</li>"
                } catch(e) {}
            }),
            this.coverflowItems = this.getItems(),
            this.sortable.html(this.listContent),
            this.skipTo(this.defaultItem),
            this.init_slider(this.sliderCtrl, "horizontal"),
            this.scrollPane.css("overflow", "hidden"),
            this.difference = this.sortable.height() - this.scrollPane.height(),
            this.proportion = this.difference / this.sortable.height(),
            this.handleHeight = Math.round((1 - this.proportion) * this.scrollPane.height()),
            this.setScrollPositions(this.defaultItem),
            this.origSliderHeight = this.sliderVertical.height(),
            this.sliderHeight = this.origSliderHeight - this.handleHeight,
            this.sliderMargin = (this.origSliderHeight - this.sliderHeight) * .5,
            this.init_mousewheel(),
            this.init_keyboard(),
            this.sortable.selectable({
                stop: function() {
                    var b = $("#select-result").empty();
                    $(".ui-selected", this).each(function() {
                        var b = $("#sortable li").index(this);
                        a.skipTo(b)
                    })
                }
            })
        },
        init_slider: function(b, c) {
            c == "horizontal" ? b.slider({
                min: 0,
                max: $("#coverflow > *").length - 1,
                value: a.defaultItem,
                slide: function(b, c) {
                    var d = $(".coverflowItem");
                    a.coverflowCtrl.coverflow("select", c.value, !0),
                    d.removeClass("ui-selected"),
                    d.eq(c.value).addClass("ui-selected"),
                    a.setCaption(d.eq(c.value).html())
                }
            }) : c == "vertical" && b.slider({
                orientation: c,
                range: "max",
                min: 0,
                max: 100,
                value: 0,
                slide: function(b, c) {
                    console.log("aaa");
                    var d = -((100 - c.value) * a.difference / 100);
                    a.sortable.css({
                        top: d
                    })
                }
            })
        },
        getItems: function() {
            var a = $(".coverflowItem");
            return a
        },
        skipTo: function(a) {
            var b = $(".coverflowItem");
            this.sliderCtrl.slider("option", "value", a),
            this.coverflowCtrl.coverflow("select", a, !0),
            b.removeClass("ui-selected"),
            b.eq(a).addClass("ui-selected"),
            this.setCaption(b.eq(a).html())
        },
        init_mousewheel: function() {
            
        },
        init_keyboard: function() {
           
        },
        generateList: function() {
            
        },
        setScrollPositions: function() {
           
        },
        handleScrollpane: function() {
           
        }
    },
    a.init_coverflow()
})