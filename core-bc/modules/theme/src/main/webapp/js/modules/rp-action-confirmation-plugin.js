AUI.add('rp-action-confirmation-plugin', function(A) {
	
	var	Lang = A.Lang,
		getClassName = A.ClassNameManager.getClassName,
		NAME = 'rp-action-confirmation-plugin',
		NS = 'rp-action-confirmation-plugin',
	
		// Custom Attributes
		WIDTH = 'width',
	
		// Property keys
		HOST = 'host'
	;
	
	var TPL_DIALOG_CONTENTS = '<div class="rp-action-confirmation-dialog-bd"></div>';
	
	var RpActionConfirmation = A.Component.create({
		
		ATTRS:
			{
	            width: {
	            value: 600
            }
        },

        EXTENDS: A.Plugin.Base,
        NAME: NAME,
        NS: NS,

        prototype: {
        	dialog: null,
        	dialogTitle: '',

			initializer: function() {
				var instance = this;
				
				var host = instance.get(HOST);

				instance._initLinks();
			},

			_initLinks: function() {
				var instance = this;
		
				var host = instance.get(HOST);
				
				host.removeClass('requires-confirmation');
				host.addClass('requires-confirmation-active');
				
				host.on('click', instance._onHostClick, instance);
			},
			
			_onHostClick: function(e) {
				var instance = this;
				e.halt();

				//alert('Should now launch a dialog');
				
				var width = 300;
				var height = 200;
				
				var title = "Titel";
				
				var dialog = new A.Dialog({
					bodyContent: 'Lorem ipsum',
					centered: true,
					cssClass: 'rp-iframe-dialog',
					align: { node: null, points: [A.WidgetPositionAlign.TC, A.WidgetPositionAlign.TC] },
					destroyOnClose: true,
					modal: true,
					title: title,
					resizable: false,
					height: height,
					width: width,
					buttons: [{
						text: 'OK',
						handler: function() {
							instance._confirmAction();
						}
					},{
						text: 'Not OK',
						handler: function() {
							instance._haltAction();
						}
					}]
				});
				
				dialog.render();

				instance.dialog = dialog;

				// Listen for when the iframe is available to be modified
				//A.on('available', instance._onIframeAvailable, '#' + iframeId, null, null, instance);
			},
			
			_confirmAction: function () {
				var instance = this;
				
				// Should now continue with action
				instance.dialog.close();
				alert('Event should now continue');
			},
			
			_haltAction: function () {
				var instance = this;
				
				// Should now continue with action
				instance.dialog.close();
				alert('Event should now NOT continue');
			},

			_someFunction: function() {}
        	}

		}
	);

	A.namespace('Plugin').RpActionConfirmation = RpActionConfirmation;

	}, '1.0.1' ,{
		requires:[
			'aui-component',
			'aui-dialog',
			'plugin'
		]
	}
);
