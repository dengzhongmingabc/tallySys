Ext.define('tallySys.view.main.Footer',
		{
				extend:'Ext.toolbar.Toolbar',
				xtype:'mainFooter',
                region: "south", //设置方位
                height:40,
                style:{
                	backgroundColor:'#5fa2dd',
                	marginTop: '2px'
                },
                items: [
    			        '->',{ xtype: 'tbtext', width:200,html: '<div style="font-size:18px">版权所有 Copyright © 2017 钟鸣科技股份有限公司</div>', id: 'copyright' },
    			        '->'
    			    ]
            }
);
