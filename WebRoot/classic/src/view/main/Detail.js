Ext.define('tallySys.view.main.Detail',
		{
				extend:'Ext.panel.Panel',
				collapsible: true,
				collapsed:true,
				region: "east",
				width: 200,
				title: '说明与操作',
				xtype:'mainDetail',
				layout:'fit',
				items:[
				       	{ xtype: 'tbtext',
				       	  html: '<p style="font-family:arial,sans-serif">说明、首页是关于最近12个月的<br>整体统计.<br>操作、鼠标放到图上会出现理<br>具体的数据</p>' 
				       	}
				       ]
				
            }
);
