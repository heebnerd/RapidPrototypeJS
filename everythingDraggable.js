(function ($) {
	$("<style type='text/css'> .everything-draggable{ position: absolute}  </style>").appendTo("head");
	$("<style type='text/css'> .ui-draggable-disabled{ opacity: 1} </style>").appendTo("head");
	$("<style type='text/css'> .snap-x-marker {width: 2px; background-color: green; height: 100%; top: 0px; position: absolute }</style>").appendTo("head");

	var draggableSelector;
	var resizableSelector;
	$(document).ready(function(everythingDraggable, $, undefined){
		everythingDraggable.Selector = function(s){
			draggableSelector = s;
		}
	}( window.everythingDraggable = window.everythingDraggable || {}, jQuery ));

	$(document).ready(function(everythingResizeable, $, undefined){
		everythingResizeable.Selector = function(s){
			resizableSelector = s;
		}
	}( window.everythingResizable = window.everythingResizable || {}, jQuery ));

	$(document).ready(function(){
	  	
		var handler = function(e) {
			$(draggableSelector).draggable({
				disabled: !e.shiftKey,
				stop: function(){
					$(draggableSelector).each(function() {
						$(".snap-x-marker").remove();
						$("body").append("<div class='snap-x-marker' style='left: " + $(this).position().left + "px'></div>");
					});
				}
			});

		    if (!e.shiftKey) {
		        $(draggableSelector).removeClass("ui-draggable-disabled ui-state-disabled everything-draggable");
		        $(draggableSelector).parent().removeClass("everything-draggable");
		    } else {
		    	$(draggableSelector).addClass("everything-draggable");
		    	$(draggableSelector).parent().addClass("everything-draggable");
		    }
		}

		$(document).keydown(handler);
		$(document).keyup(handler);
	});

	$(document).ready(function(){
		var handler = function(e) {
			$(resizableSelector).resizable({
				disabled: !e.altKey
			});


			/*if(e.altKey){
				$(resizableSelector).resizable();
			} else {
				$(resizableSelector).resizable('disable');
			}*/

		    if (!e.altKey) {
		        $(resizableSelector).removeClass("ui-resizable-disabled ui-state-disabled everything-draggable");
		    } else {
		    	$(resizableSelector).addClass("everything-draggable");
		    }
		}

		$(document).keydown(handler);
		$(document).keyup(handler);
	});
}(jQuery));
