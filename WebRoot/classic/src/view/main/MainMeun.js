Ext.define('tallySys.view.main.MainMeun',
		{

				extend:'Ext.panel.Panel',
				id:'menu-panel',
				controller:'mainMeun',
				xtype:'mainMeun',
				scrollable:true,
                title: "系统菜单",
                layout: "accordion",  //设置为手风琴布局
                layoutConfig: {
                    animate: true
                },
                width: 250,
                minWidth: 90,
                region: "west", //设置方位
                split: true,
                collapsible: true,
                listeners: {
                	render:'onPanelRender'
        	    },
                defaults: {
                	listeners: {
            	    	itemclick:'itemclick1'
            	    }
                }
                /*items: [
                        	{
                        		xtype:'treepanel',
                        		title: '账本录入',
                        	    width: 200,
                        	    store: store,
                        	    rootVisible: false,
                        	    iconCls: "fa fa-th",
                        	    listeners: {
                        	    	itemclick:'itemclick1'
                        	    }
                        	},
                        	{
                        		xtype:'treepanel',
                        		title: '账面统计',
                        	    width: 200,
                        	    store: store,
                        	    rootVisible: false,
                        	    iconCls: "fa fa-list"
                        	},{
                        		xtype:'treepanel',
                        		title: '收入情况',
                        	    width: 200,
                        	    store: store,
                        	    rootVisible: false,
                        	    iconCls: "fa fa-money"
                        	},{
                        		xtype:'treepanel',
                        		title: '每月盈余',
                        	    width: 200,
                        	    store: store,
                        	    rootVisible: false,
                        	    iconCls: "fa fa-line-chart"
                        	},{
                        		xtype:'treepanel',
                        		title: '每月报表',
                        	    width: 200,
                        	    store: store,
                        	    rootVisible: false,
                        	    iconCls: "fa fa-bar-chart"
                        	},{
                        		xtype:'treepanel',
                        		title: '权限用户',
                        	    width: 200,
                        	    store: store,
                        	    rootVisible: false,
                        	    iconCls: "fa fa-user-plus"
                        	}
                            { title: "账本录入", 
                              html: "账本录入", 
                              iconCls: "fa fa-th",
                            },
                            { title: "账面统计", html: "账面统计", iconCls: "fa fa-list" },
                            { title: "收入情况", html: "收入情况", iconCls: "fa fa-money" },
                            { title: "支付情况", html: "支付情况", iconCls: "fa fa-briefcase" },
                            { title: "每月盈余", html: "每月盈余", iconCls: "fa fa-line-chart" },
                            { title: "每月报表", html: "每月报表", iconCls: "fa fa-bar-chart" },
                            { title: "权限用户", html: "权限用户", iconCls: "fa fa-user-plus" }
                       ]*/
            }
);
