/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('tallySys.view.main.MainMeunController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.mainMeun',

    requires: [
               'tallySys.model.main.Model'//必需引入下方的 下面才能使用
           ],
    init: function () {  
        //初始化部分，下面是部分是给菜单绑定单击事件，接下来会用，这里先注释  
            this.control({  
            	//这是一个方试 但这个问情 mainMeun 很容易搞成不是唯一的容易出错 ，现在直接view上用controller属性，用listener邦定相应的事件
              	/*'mainMeun': {
              		render: this.onPanelRender
    	        }*/
              });
        },

    itemclick1: function (record , item , index , e , eOpts) {
        //Ext.Msg.confirm('Confirm', 'Are you sure1?', 'onConfirm', this);
    	var main = Ext.getCmp("content-panel"); 
    	var panel =  main.child('*[id=itemPanel'+item.id+']');
        if(!panel){  
        	var location = (window.location+'').split('/'); 
        	var basePath = location[0]+'//'+location[2]+'/'+location[3];
        	var baidu = 'https://www.hao123.com/';
            panel =Ext.create('Ext.panel.Panel', {
                title: item.data.text, 
                html : '<iframe scrolling="auto" frameborder="0" width="100%" height="100%" src="'+baidu+'"></iframe>',
                id:'itemPanel'+item.id,
                closable: true  
            });
            var p = main.add(panel);  
            main.setActiveTab(p);
        }else{ 
            main.setActiveTab(panel);  
        }
    },
    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
        
    //加载菜单 目前写死，后期ajax动态加载   直接view上用controller属性，用listener邦定相应的事件
    onPanelRender:function(eOpts){
    	var json = [
            {
            text:'系统录入',
    		iconCls: "fa fa-th",
    		children: [{id:'1',text: '录入明细', leaf: true},{id:'2',text: '展示明细', leaf: true}]
	    	},
	    	{
            text:'账面统计',
    		iconCls: "fa fa-list",
    		children: [{id:'3',text: '录入明细', leaf: true},{id:'4',text: '展示明细', leaf: true}]
	    	},
	    	{
            text:'收入情况',
    		iconCls: "fa fa-money",
    		children: [{id:'5',text: '录入明细', leaf: true},{id:'6',text: '展示明细', leaf: true}]
	    	},
	    	{
            text:'每月盈余',
    		iconCls: "fa fa-line-chart",
    		children: [{id:'7',text: '录入明细', leaf: true},{id:'8',text: '展示明细', leaf: true}]
	    	},
	    	{
            text:'每月报表',
    		iconCls: "fa fa-bar-chart",
    		children: [{id:'9',text: '录入明细', leaf: true},{id:'10',text: '展示明细', leaf: true}]
	    	},	
	    	{
            text:'权限用户',
    		iconCls: "fa fa-user-plus",
    		children: [{id:'11',text: '录入明细', leaf: true},{id:'12',text: '展示明细', leaf: true}]
	    	}
    	];
    	var test = Ext.getCmp('menu-panel');
		var cs  = [];
        Ext.each(json, function(el) {  
                    var panel = Ext.create('Ext.tree.Panel', {  
			                                title : el.text,
			                                iconCls:el.iconCls,
			                                width: 200,
			                                layout : 'fit',
			                                rootVisible : false, 
			                                store : Ext.create('Ext.data.TreeStore', {  
			                                	model: 'tallySys.model.main.Model',
			                                    root : {  
			                                        expanded : true,
			                                        children : el.children  
			                                    } 
			                                })
			                            });  
                    cs.push(panel);
           });
        test.add(cs);
    }
});
