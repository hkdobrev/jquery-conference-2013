"  _______________                                        
"  ______(_)_  __ \___  __________________  __            
"  _____  /_  / / /  / / /  _ \_  ___/_  / / /            
"  ____  / / /_/ // /_/ //  __/  /   _  /_/ /             
"  ___  /  \___\_\\__,_/ \___//_/    _\__, /              
"  /___/                             /____/               
"                                                         
"                                                         
"  ________       ______                     _____        
"  ___  __ )___  ____  /______ ______ __________(_)_____ _
"  __  __  |  / / /_  /__  __ `/  __ `/_  ___/_  /_  __ `/
"  _  /_/ // /_/ /_  / _  /_/ // /_/ /_  /   _  / / /_/ / 
"  /_____/ \__,_/ /_/  _\__, / \__,_/ /_/    /_/  \__,_/  
"                      //___/                             



// optimizing Array.prototype.<function>.call with core_deletedIds
// optimizing Object.prototype.<function>.call with class2type
var core_concat = core_deletedIds.concat,
	core_push = core_deletedIds.push,
	core_slice = core_deletedIds.slice,
	core_indexOf = core_deletedIds.indexOf,
	core_toString = class2type.toString,
	core_hasOwn = class2type.hasOwnProperty,
	core_trim = core_version.trim;

// ~~~

// breakdown of
jQuery.type(); // uses class2type

// ~~~

jQuery.readyWait++;

// ~~~

jQuery.globalEval;

// ~~~

jQuery.guid

// ~~~

// building with AMD and Grunt

// ~~~

jQuery.ajaxTransport();

// show example in jQuery-File-Upload
// https://github.com/blueimp/jQuery-File-Upload/blob/master/js/jquery.iframe-transport.js

// ~~~

// All jQuery hooks
// http://stackoverflow.com/questions/15494498/which-hooks-are-provided-in-jquery/15511578#15511578

// ~~~

// Good way to browse through jQuery source code:
// http://james.padolsey.com/jquery/

// ~~~

jQuery('.btn').addClass(function(index, currentClass) {

});

jQuery('.btn').toggleClass(function(index, currentClass) {

});

// ~~~

// Node.nodeType
// https://developer.mozilla.org/en-US/docs/Web/API/Node.nodeType

// ~~~

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

// ~~~

