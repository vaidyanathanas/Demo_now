Ext.define('DemoNow.view.Menu', {
    extend : 'Ext.Menu',
    xtype : 'mainmenu',

    config : {
        scrollable : {
            direction : 'vertical',
            directionLock : true,

            momentumEasing : {
                momentum : {
                    acceleration : 30,
                    friction : 0.5
                },
                bounce : {
                    acceleration : 0.0001,
                    springTension : 0.9999
                },
                minVelocity : 5
            },
            outOfBoundRestrictFactor : 0
        },
        width : '75%',
        items : [{
            xtype : 'container',
            docked : 'top',
            height : '9.6em',
            cls : 'profile',
            
        }, {
            text : 'Home',
            iconCls : 'home',
            navButton : true,
           
            action : 'home'
        }, {
            text : 'MyAccount',
        
            navButton : true,
            action : 'myaccount'
        }]
    },

    initialize : function() {
     
   
    },

    setProfilePic : function(imagePath) {
    
    }
});
