// Plain javascript that runs before AUI is ready (to prevent content flashing

// Body
addCssClassName(document.body, 'js');

//Dockbar
var plainOldJsDockbarNode = document.getElementById('dockbarWrap');
addCssClassName(plainOldJsDockbarNode, 'aui-helper-hidden');

//Hide footer before positionFooter has been run
var plainOldJsfooterNode = document.getElementById('footer');
addCssClassName(plainOldJsfooterNode, 'aui-helper-hidden');

function addCssClassName(node, cssClassName) {
	if(node) {
		var newClassName = node.className + ' ' + cssClassName;
		node.className = newClassName;
	}
}

AUI().ready('rp-theme-2', function(A) {
	var rpTheme2 = new A.RpTheme2().render();
});

Liferay.on('allPortletsReady',function() {
	AUI().use('aui-base', 'rp-footer-plugin', function(A) {
		var footerNode = A.one('#footer');
		if(footerNode) {
			footerNode.plug(A.Plugin.RpFooter);	
		}
	});
});

// Testing iframe link plugin. Code should be placed in RpTheme2 module when finished.
AUI().ready('aui-base', 'rp-iframe-link-plugin', function(A) {
	
	//initPlugLinks();
	
	function initPlugLinks() {
		var navNode = A.one('#navigation');
		if(navNode) {
			navNode.append('<br /><p>To test the iframe dialog: <a class="rp-overlay-link" href="http://www.lipsum.com" target="_BLANK">Click here</a></p><br />');
			plugLinks();
		}
	}
	
	function plugLinks() {
		var overlayLinks = A.all('a.rp-overlay-link');
		overlayLinks.plug(A.Plugin.RpIframeLink);
	}
	
});
