Ext.define('DemoNow.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
         main : 'main',
            navigationView : 'navigationview',
            mainMenu : 'mainmenu',
           
          
        },
        control: {
    
        'mainmenu > button[navButton]' : {
                    tap: 'navButtonTap'
            },
       '#btnvegetable':{

                tap:'gotolink'
            }
        },
        routes: {
            ':viewtype': 'navigateToView'
        }
    },
      launch : function(e) {
     console.log(e);
               window.location.href="#home";     
         
       
    },
gotolink:function(){

 this.getApplication().redirectTo('myaccount');  
},

    navButtonTap: function(button, e, eOpts) {
        Ext.Viewport.hideMenu('right');
    	 this.getApplication().redirectTo(button.config.action);
    
    	
        
       
            
    },
    navigateToView: function(xtype) {

        main = Ext.create('widget.main', {});
        Ext.Viewport.setActiveItem(main);

        Ext.Viewport.setMenu(Ext.create('widget.mainmenu'), {
            side: 'right'
        });
        var newView = Ext.create('widget.' + xtype);
        main.push(newView);

    },


   


});