define(["require", "exports"], function (require, exports) {
    "use strict";
    var $document = jQuery(document);
    var documentPosition = $document.position();
    console.log(documentPosition.left);
    console.log(documentPosition.top);
});
