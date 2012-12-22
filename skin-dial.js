YUI.add('skin-dial', function (Y) {

var Skin  = Y.Skin,
    space = Skin.SPACE;

Skin.dial = null;
Skin.refreshDialSkin = function () {
    Skin.dial = {
        skinName: space.skin.name,
        prefix:   space.skin.prefix,

        ringBackgroundColor:        space.background,
        ringGradient:               ''+
            'background: -moz-linear-gradient(-45deg,  rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 39%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.2) 100%);\n'+ // /* FF3.6+ */
            '    background: -webkit-gradient(linear, left top, right bottom, color-stop(0%,rgba(255,255,255,0.1)), color-stop(39%,rgba(255,255,255,0)), color-stop(40%,rgba(0,0,0,0)), color-stop(100%,rgba(0,0,0,0.2)));\n'+ // /* Chrome,Safari4+ */
            '    background: -webkit-linear-gradient(-45deg,  rgba(255,255,255,0.1) 0%,rgba(255,255,255,0) 39%,rgba(0,0,0,0) 40%,rgba(0,0,0,0.2) 100%);\n'+ // /* Chrome10+,Safari5.1+ */
            '    background: -o-linear-gradient(-45deg,  rgba(255,255,255,0.1) 0%,rgba(255,255,255,0) 39%,rgba(0,0,0,0) 40%,rgba(0,0,0,0.2) 100%);\n'+ // /* Opera 11.10+ */
            '    background: -ms-linear-gradient(-45deg,  rgba(255,255,255,0.1) 0%,rgba(255,255,255,0) 39%,rgba(0,0,0,0) 40%,rgba(0,0,0,0.2) 100%);\n'+ // /* IE10+ */
            '    background: linear-gradient(135deg,  rgba(255,255,255,0.1) 0%,rgba(255,255,255,0) 39%,rgba(0,0,0,0) 40%,rgba(0,0,0,0.2) 100%);\n'+ // /* W3C */

            '',
        centerButtonBackgroundColor:    space.block.high.background,
        centerButtonText:               space.block.high.text.normal,
        centerButtonGradient:           ''+
            'background: -moz-radial-gradient(30% 30% 0deg, circle farthest-side,  rgba(255,255,255,0.2) 14%, rgba(255,255,255,0) 41%, rgba(0,0,0,0) 42%, rgba(0,0,0,0.2) 83%);\n'+ // /* FF3.6+ */
            '    background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(14%,rgba(255,255,255,0.2)), color-stop(41%,rgba(255,255,255,0)), color-stop(42%,rgba(0,0,0,0)), color-stop(83%,rgba(0,0,0,0.2)));\n'+ // /* Chrome,Safari4+ */
            '    background: -webkit-radial-gradient(30% 30%, circle farthest-side,  rgba(255,255,255,0.2) 14%,rgba(255,255,255,0) 41%,rgba(0,0,0,0) 42%,rgba(0,0,0,0.2) 83%);\n'+ // /* Chrome10+,Safari5.1+ */
            '    background: -o-radial-gradient(30% 30% 0deg, circle farthest-side,  rgba(255,255,255,0.2) 14%,rgba(255,255,255,0) 41%,rgba(0,0,0,0) 42%,rgba(0,0,0,0.2) 83%);\n'+ // /* Opera 12+ */
            '    background: -ms-radial-gradient(30% 30% 0deg, circle farthest-side,  rgba(255,255,255,0.2) 14%,rgba(255,255,255,0) 41%,rgba(0,0,0,0) 42%,rgba(0,0,0,0.2) 83%);\n'+ // /* IE10+ */
            '    background: radial-gradient(30% 30%, circle farthest-side,  rgba(255,255,255,0.2) 14%,rgba(255,255,255,0) 41%,rgba(0,0,0,0) 42%,rgba(0,0,0,0.2) 83%);\n'+ // /* W3C */
            '',
        handle:                         space.block.highest.background,
        marker:                         space.text.high,
        northMark:                      space.block.page.text.low,
        label:                          space.block.page.text.normal,
        valueString:                    space.block.page.text.high,

        foo: space
    };
};

}, '0.0.1', {
    requires: ['skin-space']
});
