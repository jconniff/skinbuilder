YUI.add('skin-form', function (Y) {

var Skin  = Y.Skin,
    space = Skin.SPACE;

Skin.form = null;
Skin.refreshFormSkin = function () {
    Skin.form = {
        skinName: space.skin.name,
        prefix:   space.skin.prefix,

        tableCaptionPadding: Skin.getPadding(1, 0),
        tableCellPadding: Skin.getPadding(0.3, 0.6),   // 4px 10px 4px 10px;

        tableHeadGradient:   space.block.normal.gradient,
        tableHeadBackground: space.block.normal.background,
        tableHeadText:       space.block.normal.text.normal,
        tableHeadBorder:     space.border.low,
        tableCellBackground: space.background,
        tableCellText:       space.text.normal,
        tableCellEvenBackground: space.border.low,
        tableCellEvenText:   space.hover.text.normal,

        tableHeadSortedBackground:   space.block.high.background,
        tableHeadSortedGradient:     space.block.high.gradient,
        tableHeadSortedText:         space.block.high.text.normal,
        tableHeadSortedHoverBackground:   space.block.high.background,
        tableHeadSortedHoverText:         space.block.high.text.normal,

        tableCellSortedEvenBackground:   space.block.low.border.low,
        tableCellSortedOddBackground:   space.block.low.background,
        tableCellSortedEvenText:         space.block.low.hover.text.normal,

        tableBorder:        space.border.low,
        tableCaptionText:    space.block.page.text.low,

        // Tilo, add stuff for other default CSS here 
        formLabelText: space.block.page.text.normal, 



        foo: space
    };
};

}, '0.0.1', {
    requires: ['skin-space']
});
