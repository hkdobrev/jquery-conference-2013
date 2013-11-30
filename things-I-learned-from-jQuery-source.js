


console.log("%c\
:::::::::::::::::::::::::::::::::::::::::::::::::::::   \n\
::·················································::   \n\
::···o·.oPYo.······································::   \n\
::·····8····8······································::   \n\
::··o8·8····8··o····o·.oPYo.·oPYo.·o····o··········::   \n\
::···8·8··d.8··8····8·8oooo8·8··`'·8····8··········::   \n\
::···8·8··`b8.·8····8·8.·····8·····8····8··········::   \n\
::···8·`YooP'P·`YooP'·`Yooo'·8·····`YooP8··········::   \n\
::··:8·:....:.::.....::.....:..:::::....8··········::   \n\
::··oP·::::::::::::::::::::::::::::::ooP'.·········::   \n\
::··..:::::::::::::::::::::::::::::::...::·········::   \n\
::·················································::   \n\
::···.oPYo.········8······················o········::   \n\
::···8···`8········8·······························::   \n\
::··o8YooP'·o····o·8·.oPYo.·.oPYo.·oPYo.·o8·.oPYo.·::   \n\
::···8···`b·8····8·8·8····8·.oooo8·8··`'··8·.oooo8·::   \n\
::···8····8·8····8·8·8····8·8····8·8······8·8····8·::   \n\
::···8oooP'·`YooP'·8·`YooP8·`YooP8·8······8·`YooP8·::   \n\
::··:......::.....:..:....8·:.....:..:::::..:.....:::   \n\
:::::::::::::::::::::::ooP'.:::::::::::::::::::::::::   \n\
:::::::::::::::::::::::...:::::::::::::::::::::::::::   \n\
", 'color: #2BD636; background-color: black');





// Did you know you could print this in the console?























/*

888888  88  88  88  88b 88   dP""b8  .dP"Y8     88
  88    88  88  88  88Yb88  dP   `"  `Ybo."     88
  88    888888  88  88 Y88  Yb  "88  o.`Y8b     88
  88    88  88  88  88  Y8   YboodP  8bodP'     88


88      888888     db     88""Yb  88b 88  888888  8888b.
88      88__      dPYb    88__dP  88Yb88  88__     8I  Yb
88  .o  88""     dP__Yb   88"Yb   88 Y88  88""     8I  dY
88ood8  888888  dP""""Yb  88  Yb  88  Y8  888888  8888Y"


888888  88""Yb   dP"Yb   8b    d8     888888  88  88  888888
88__    88__dP  dP   Yb  88b  d88       88    88  88  88__
88""    88"Yb   Yb   dP  88YbdP88       88    888888  88""
88      88  Yb   YbodP   88 YY 88       88    88  88  888888


 88888   dP"Yb   88   88  888888  88""Yb  Yb  dP
    88  dP   Yb  88   88  88__    88__dP   YbdP
o.  88  Yb b dP  Y8   8P  88""    88"Yb     8P
"bodP'   `"YoYo  `YbodP'  888888  88  Yb   dP


.dP"Y8   dP"Yb   88   88  88""Yb   dP""b8  888888
`Ybo."  dP   Yb  88   88  88__dP  dP   `"  88__
o.`Y8b  Yb   dP  Y8   8P  88"Yb   Yb       88""
8bodP'   YbodP   `YbodP'  88  Yb   YboodP  888888

by Haralan Dobrev

*/






/**
 * W h o   a m   I ?
 */

'working at' +
	'Despark' +
	'OpenBuildings' + 'Clippings';

//Check them out
/http:\/\/despark.com/;
/http:\/\/clippings.com/;
/http:\/\/openbuildings.com/;




















!function youShouldFollowMe() {
	console.dir('twitter.com/hkdobrev');
	console.dir('github.com/hkdobrev');
}();

// it's the truth















// optimizing Array.prototype.<function>.call with core_deletedIds
// optimizing Object.prototype.<function>.call with class2type
var core_concat = core_deletedIds.concat,
	core_push = core_deletedIds.push,
	core_slice = core_deletedIds.slice,
	core_indexOf = core_deletedIds.indexOf,
	core_toString = class2type.toString,
	core_hasOwn = class2type.hasOwnProperty,
	core_trim = core_version.trim;



















// breakdown of
jQuery.type(); // uses class2type
























// delay jQuery.ready event from your plugin
jQuery.readyWait++;






























// Evaluates a script in a global context
jQuery.globalEval = function( code ) {
	var script,
		indirect = eval;

	code = jQuery.trim( code );

	if ( code ) {
		// If the code includes a valid, prologue position
		// strict mode pragma, execute code by injecting a
		// script tag into the document.
		if ( code.indexOf("use strict") === 1 ) {
			script = document.createElement("script");
			script.text = code;
			document.head.appendChild( script ).parentNode.removeChild( script );
		} else {
		// Otherwise, avoid the DOM node creation, insertion
		// and removal by using an indirect global eval
			indirect( code );
		}
	}
};



























// jQuery.fn.hide();
// jQuery.fn.show();





























jQuery.ajaxTransport();

// show example in jQuery-File-Upload
// http://git.io/fZxkzA



























// jQuery hooks
// http://stackoverflow.com/a/15511578/679227
// Extending hooks in you application


























// feature-detection
jQuery.support;
// how jQuery modules expand it and how you could use it too

























// Good way to browse through jQuery source code:
// http://james.padolsey.com/jquery/

























jQuery('.btn').addClass(function(index, currentClass) {

});

jQuery('.btn').toggleClass(function(index, currentClass) {

});























// Node.nodeType
// https://developer.mozilla.org/en-US/docs/Web/API/Node.nodeType






















// Don't create clutter
// src/event/alias.js

jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});




















// building with Grunt

















// dependency injection and modularization with AMD


