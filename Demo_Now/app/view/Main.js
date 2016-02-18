Ext.define('DemoNow.view.Main', {
    extend : 'Ext.navigation.View',
    xtype : 'main',
     requires: [
        'Ext.Button'
    ],
  config : {
        fullscreen : true,
        defaultBackButtonText : '',

      

        navigationBar : {
         
            backButton : {
                iconCls:'arrow_left', 
             
            
             
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
        ,

        items: [
            {
                xtype: 'home'
            }
        ]
    },
 

  onBackButtonTap : function() {
        var canGoBack = true, mypath = window.location.href.split("#");
       
        if (canGoBack === true) {
               console.log(this);
            
            window.history.back();
        }
    },

});

