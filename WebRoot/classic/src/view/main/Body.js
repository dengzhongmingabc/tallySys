Ext.define('tallySys.view.main.Body',
		{
				extend:'Ext.TabPanel',
				collapsible: false,
				//border: true,
				id:"content-panel",
				requires:['tallySys.view.main.IndexView1','tallySys.view.main.IndexView2','tallySys.view.main.IndexView3','tallySys.view.main.IndexView4','tallySys.view.adddata.AddDataPanel'],
				split: true,
				xtype:'mainBody',
                region: "center", //设置方位
                activeTab: 0,
                enableTabScroll: true,
                defaults: { autoScroll: true,styleHtmlContent: true },
                tabBarPosition: 'top',
                fullscreen: true,
                items: [
                        {
                            title: '首页',
                            xtype:'panel',
                            iconCls: 'fa fa-home',
                            layout:'vbox',
                            defaults: {
                            	flex: 1,
                            	width: '100%',
                            	padding: 10,
                            	defaults: {
	                            	flex: 1,
	                            	height: '100%',
	                            	margin: 10,
	                            	border:1
                            	}   
                            	},
                            items:[
                                   {
                                	   layout:'hbox',
                                	   xtype:'panel',
                                	   items:[
													{
													    xtype:'panel',
													    html: 'Home Screen',
												    	layout : 'fit',  
												    	items : [ {xtype : 'indexView1'}]  	
													},
												    {
							                            xtype:'panel',
							                            html: 'Home Screen',
							                            layout : 'fit',  
							                            items : [ {xtype : 'indexView2'}]}
                                	          ]
                                   },
                                   {
                                	   layout:'hbox',
                                	   xtype:'panel',
                                	   items:[
													{
													    xtype:'panel',
													    layout : 'fit',  
							                            items : [ {xtype : 'indexView3'}]},
												    {
							                            	xtype:'panel',
														    layout : 'fit',  
								                            items : [ {xtype : 'indexView4'}]}
                                	          ]
                                   }
                                   ]
                        }
                    ]
            }
);
