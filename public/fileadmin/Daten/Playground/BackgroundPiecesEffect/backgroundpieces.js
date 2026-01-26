
/*
	By André Rinas, www.andrerinas.de
	Available for use under the MIT License
*/

;( function( $, window, document, undefined )
{
	'use strict';

$.fn.backgroundPieces = function( options )
{

	// Check if clip-path is supported. From http://stackoverflow.com/a/30041538.
	function clipPathSupported() {
		var base = 'clipPath',
			prefixes = [ 'webkit', 'moz', 'ms', 'o' ],
			properties = [ base ],
			testElement = document.createElement( 'testelement' ),
			attribute = 'polygon(50% 0%, 0% 100%, 100% 100%)';

		// Push the prefixed properties into the array of properties.
		for ( var i = 0, l = prefixes.length; i < l; i++ ) {
			var prefixedProperty = prefixes[i] + base.charAt( 0 ).toUpperCase() + base.slice( 1 ); // remember to capitalize!
			properties.push( prefixedProperty );
		}

		// Interate over the properties and see if they pass two tests.
		for ( var i = 0, l = properties.length; i < l; i++ ) {
			var property = properties[i];

			// First, they need to even support clip-path (IE <= 11 does not)...
			if ( testElement.style[property] === '' ) {

				// Second, we need to see what happens when we try to create a CSS shape...
				testElement.style[property] = attribute;
				if ( testElement.style[property] !== '' ) {
					return true;
				}
			}
		}
		return false;
	};

	// Creates a sorted array of random numbers between minVal and maxVal with a length = size.
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min +1)) + min;
	}

	// return the transition prefix or false if transitions are not supported
	function transPrefix() {
		var s = document.body || document.documentElement, s = s.style;
			if( s.WebkitTransition == '' ) return '-webkit-';
			if( s.MozTransition == '' ) return '-moz-';
			if( s.OTransition == '' ) return '-o-';
			if( s.transition == '' ) return '';
		return false;
	}

	function Pieces(el, options) {
		this.el = el;
		this.options = $.extend({
			pieces: [],
			parallax: false,
			animation: {
				duration: 1000,
				easing: 'easeOutQuad',
				delay: 500,
				translates: {
					translateZ: {min: 10, max: 15},
					translateX: false,
					translateY: false
				}
			}
		},options);
		var self = this;

		this.active = false;

		// clip-path support
		this.clipPathSupported = clipPathSupported();
		this.transPrefix = transPrefix();

		if(this.options.pieces.length > 0){
			self._init();
			self._initEvents()
		}
	}

	Pieces.prototype._init = function() {
		var background = this.el.css('background-image');
		this.imgsrc = background.replace('url(','').replace(')','').replace(/\"/gi, "");

		this.dimensions = {
			width: this.el.outerWidth(),
			height: this.el.outerHeight()
		};

		var self = this;

		// create pieces
		$.each(self.options.pieces, function(i,piece){
			self._renderPiece(i,piece);
		});

		// animate
		if(self.options.animation){
			$('.background-piece').each(function(i,piece){
					self._animatePiece(i,$(piece));
			});
		}
	}

	Pieces.prototype._initEvents = function(){
		var self = this;
		var t = getRandomInt(5,10);

		// parallax
		$(window).on('mousemove', function(ev){
			if( !self.active ) {
				return false;
			}

			if (typeof self.dimensions.width === "undefined") {
				self.dimensions = {
					width: self.el.outerWidth(),
					height: self.el.outerHeight()
				};
			}

			var transX = t/(self.dimensions.width)*ev.clientX - t/2,
			transY = t/(self.dimensions.height)*ev.clientY - t/2,
			transform = self.transPrefix+'transform',
			translate3d = 'translate3d(' + transX + 'px,' + transY + 'px,0)';

			$('.bgp-parallax').each(function(i,piece) {
				requestAnimationFrame(function() {
					$(piece).css({
						transform: translate3d
					});
				});
			});
		});

		// resize
		$(window).resize(function(){
				self._handleResize();
		});
	}

	Pieces.prototype._handleResize = function(){
		var self = this;
		$.each(self.options.pieces, function(i,piece){
			var css = self._calcCSS(piece);
			$('.bgp-cp').eq(i).css(css);
		});
	}

	Pieces.prototype._calcCSS = function(piece){
		var self = this;
		self.dimensions = {
			width: self.el.offsetWidth,
			height: self.el.offsetHeight
		};

		var clipcss = '',top, left, width, height, clipTop, clipLeft, clipRight, clipBottom;

		top = piece.top;
		left = piece.left;
		width =	piece.width;
		height = piece.height;

		if( !this.clipPathSupported ) {
			clipTop = piece.top/100 * self.dimensions.height;
			clipLeft = piece.left/100 * self.dimensions.width;
			clipRight = piece.width/100 * self.dimensions.width + clipLeft;
			clipBottom = piece.height/100 * self.dimensions.height + clipTop;
		}
		clipcss = (this.clipPathSupported)
			? 'background-image: url(' + this.imgsrc + '); -webkit-clip-path: polygon(' + left + '% ' + top + '%, ' + (left + width) + '% ' + top + '%, ' + (left + width) + '% ' + (top + height) + '%, ' + left + '% ' + (top + height) + '%); clip-path: polygon(' + left + '% ' + top + '%, ' + (left + width) + '% ' + top + '%, ' + (left + width) + '% ' + (top + height) + '%, ' + left + '% ' + (top + height) + '%)'
			: 'background-image: url(' + this.imgsrc + '); clip: rect(' + clipTop + 'px,' + clipRight + 'px,' + clipBottom + 'px,' + clipLeft + 'px)'

		return clipcss;
	}

	Pieces.prototype._animatePiece = function(i,piece){
		var styles = {},
			self = this,
			shadowstyles = {},
			delay = 50 + i * this.options.animation.delay;

			styles[this.transPrefix + 'transform'] = '';
			$.each(this.options.animation.translates, function(translate,value){
				if(value){
					if(typeof value === 'object') {
						value = getRandomInt(value.min, value.max);
					}
					styles[self.transPrefix + 'transform'] += ' '+translate+'('+value+'px)';
				}
			});

		styles[this.transPrefix + 'transition'] = 'all ' + this.options.animation.duration / 1000 + 's linear';

		shadowstyles['opacity'] = 1;
		shadowstyles[this.transPrefix + 'transition'] = 'all ' + this.options.animation.duration / 1000 + 's linear';

		window.setTimeout(function(){
			piece.css(styles);
			piece.find('.bgp-elem').css(shadowstyles);
			if(i + 1 == self.options.pieces.length){
				self.active = true;
			}
		},delay);
	}

	Pieces.prototype._renderPiece = function(i,piece){
		// add piece element
		var elem = $('<div>');
		var self = this;
		elem.addClass('background-piece').appendTo(this.el);

		if(this.options.parallax){
			elem.wrap("<div class='bgp-parallax'></div>");
		}

		// add element to style
		var shadow = $('<div>')
			.addClass('bgp-elem')
			.css({
				'width': piece.width +'%',
				'height': piece.height +'%',
				'top': piece.top +'%',
				'left': piece.left +'%',
			});
			shadow.appendTo(elem);

		// add clip-path background
		var bgpcp = $('<div>').addClass('bgp-cp');

		var  clipcss = self._calcCSS(piece)
		bgpcp.appendTo(elem);
		bgpcp.attr('style',clipcss);
	}

	// init backgroundpieces
	window.Pieces = Pieces;
	new Pieces(this, options);

	return this;
};
})( jQuery, window, document );
