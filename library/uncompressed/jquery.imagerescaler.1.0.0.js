(function($){
    $._ImageRescaler = function(object, options) {
        this.object = object
;        this.options = options;
        this.rescale(object, options);
    }

    $._ImageRescaler.prototype = {
        /**
        * returns image width/height rate.
        * @return float
        */
        getImageRate : function() {
            return this.object.width >= this.object.height ?
                    this.object.height / this.object.width :
                    this.object.width / this.object.height;
        },

        getScaledCanvasSize : function() {
            canvas = this.options.canvas;
            scale = this.options.scale;
            return {
                width : canvas.width * (scale / 100),
                height : canvas.height * (scale / 100)
            }
        },
        
        rescale : function() {
            canvas = this.getScaledCanvasSize();
            rate = this.getImageRate();
            if (this.object.width > this.object.height) {
                this.object.width = canvas.width ;
                this.object.height = canvas.width * rate;
            } else {
                this.object.height = canvas.height;
                this.object.width = canvas.height * rate;
            }
        }
    }

    $._ImageRescaler.defaults = {
        canvas : {
            width : 200,
            height : 150
        },
        scale : 100
    }

    //image resize component
    $.fn.extend({imageRescale:function(options){
        var opt = $.extend({}, $._ImageRescaler.defaults, options)
        return this.each(function(){
            new $._ImageRescaler(this, opt);
        })
    }});
})(window.jQuery)