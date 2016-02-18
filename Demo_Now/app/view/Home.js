Ext.define('DemoNow.view.Home', {
    extend : 'Ext.Panel',
    xtype : 'home',

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
 
        defaults : {
            labelAlign : 'top'
        },
       
        items : [{
                  layout:'hbox',

                    items:[{
                     xtype: 'button',
                     text: 'FRUITS',

                     ui:'round',
                     id:'btnfruits',
                },{
                     xtype: 'button',
                     text: 'VEGETABLES',
                     ui:'round',
                     id:'btnvegetable',
                }]}
        ]
    }
});
