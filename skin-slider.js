YUI.add('skin-slider', function (Y) {

var Skin  = Y.Skin,
    space = Skin.SPACE;

Skin.slider = null;
Skin.refreshSliderSkin = function () {
    Skin.slider = {
        skinName: space.skin.name,
        prefix:   space.skin.prefix,

//        paddingTab: Skin.getPadding(0.3, 0.75),
//        tabRadius: Skin.getRadius(0.4),    // 30% of global space.radius


//          thumbBackground:      adjustColor(space.block.page.background, {l:50}, 'flip'),
//          thumbBackground:      space.block.page.text.normal,
          thumbBackground:      space.block.high.background,
          thumbBorderLight:     space.block.high.border.high,
          thumbBorderDark:      space.block.high.rule.low,
          thumbRadiusBottom:    Skin.getRadius(0.3),
          railBackground:       space.block.page.background,
          railBorderDark:       space.block.page.rule.low,
          railBorderLight:      space.block.page.rule.high,

        foo: space
    };
};

}, '0.0.1', {
    requires: ['skin-space']
});
