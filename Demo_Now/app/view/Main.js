Ext.define('DemoNow.view.Main', {
    extend : 'Ext.navigation.View',
    xtype : 'main',
     requires: [
        'Ext.Button'
    ],
  config : {
        fullscreen : true,
        defaultBackButtonText : '',

     //nav starts here !!!

        navigationBar : {
            ui : 'title',
            cls : 'topNavBar',
            backButton : {
                iconCls : 'back',
                iconAlign : 'left',
                ui : ''
            },
            animation : false,
            items : [{
                iconCls : 'menu',
                align : 'right',

                handler : function() {
                    Ext.Viewport.showMenu('right');
                 
            
                }
            }]
        }
    },
 


});
