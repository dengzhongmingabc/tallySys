 Ext.define('tallySys.view.main.Main', {
    extend: 'Ext.Viewport', 
    title: "Viewport",
    layout: "border",
    defaults: {
        //bodyStyle: "background-color: #FFFFFF;",
        
    },
    requires: [
               'tallySys.view.main.MainMeun',
               'tallySys.view.main.Head',
               'tallySys.view.main.Footer',
               'tallySys.view.main.Body',
               'tallySys.view.main.Detail',
               'tallySys.view.main.MainMeunController'
           ],
    items: [
                {xtype:'mainMeun'}, 
                {xtype:'mainDetail',frame: true},
                { xtype:'mainHead' },
                {xtype:'mainBody',frame: true },
                { xtype:'mainFooter' }
            ]
});