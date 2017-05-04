/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('tallySys.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    itemclick1: function (record , item , index , e , eOpts) {
    	alert(12);
        //Ext.Msg.confirm('Confirm', 'Are you sure1?', 'onConfirm', this);
    },

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure1?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
