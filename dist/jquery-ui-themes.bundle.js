var jQueryUIThemes =
webpackJsonpjQueryUIThemes([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	//*------------------------------------------------------------------

	var $ = __webpack_require__(1);

	// If using CommonsChunkPlugin the following require has no effect: https://github.com/webpack/webpack/issues/2161
	__webpack_require__(2);

	//*------------------------------------------------------------------*

	module.exports = function(jQueryUITheme) {

	    console.log("jQuery version " + $.fn.jquery);
	    console.log("jQuery-UI version " + $.ui.version);

	    if (jQueryUITheme) {
	        var cssDoc = document.createElement("link");
	        cssDoc.setAttribute("rel", "stylesheet");
	        cssDoc.setAttribute("type", "text/css");
	        cssDoc.setAttribute("href", "https://code.jquery.com/ui/1.11.1/themes/" + jQueryUITheme + "/jquery-ui.css");
	        document.getElementsByTagName("head")[0].appendChild(cssDoc);
	    }


	    $("#accordion").accordion();

	    $("#autocomplete").autocomplete({
	        source:["c++","java","php","coldfusion","javascript","asp","ruby","python","c","scala","groovy","haskell","perl"]
	    });

	    $("#button").button();

	    $("#radioset").buttonset();

	    $("#tabs").tabs();

	    $("#dialog").dialog({
	        autoOpen: false,
	        width: 600,
	        buttons: [
	            {text:"Ok", click: function() {$(this).dialog("close")}},
	            {text:"Cancel", click: function() {$(this).dialog("close")}}
	        ]
	    });
	    $("#dialog-link").on(
	        "click", 
	        function(e) { 
	            $("#dialog").dialog("open");
	            e.preventDefault(); 
	        }
	    );

	    $("#datepicker").datepicker({
	        inline: true
	    });

	    $("#slider").slider({
	        range: true,
	        values: [17,67]
	    });

	    $("#progressbar").progressbar({
	        value:20
	    });

	    $("#dialog-link, #icons li").mouseenter(
	        function() {
	            $(this).addClass("ui-state-hover");
	        }
	    ).mouseleave(
	        function() {
	            $(this).removeClass("ui-state-hover");
	        }
	    );

	    $("#spinner").spinner();

	    $("#menu").menu();

	    $("#selectmenu").selectmenu({
	        width:150
	    });

	    $("#tooltip").tooltip();
	};


/***/ }
]);