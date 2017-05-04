Ext.define('tallySys.view.main.Head',
		{
				extend:'Ext.toolbar.Toolbar',
				xtype:'mainHead',
                region: "north", //设置方位
                height:60,
                style:{
                	backgroundColor:'#5fa2dd',
                	marginBottom: '2px'
                },
                items: [
    			        { xtype: 'tbtext', width:200,iconCls: 'fa fa-user-circle',html: '<div style="font-family:微软雅黑;font-size:28px">家庭记账系统</div>', id: 'app-header-title' },
    			        '->',
    			        Ext.create('Ext.Img', {
    			            src: 'http://www.sencha.com/assets/images/sencha-avatar-64x64.png',
    			            height: 34,
    			            width: 34,
    			            style:'border-radius:50px'
    			        }),
    			        { xtype: 'tbtext', width:100,iconCls: 'fa fa-user-circle',html: '<div style="font-size:12px">欢迎你：李艳桃</div>', id: 'welcome' },
    			        { tooltip: '修改密码',width:100,text:'修改密码', iconCls: 'x-fa fa-key header-button-color', cls: 'simplecms-header-button', handler: 'onChangePassword' },
    			        { tooltip: '注销',width:70,text:'注销', cls: 'simplecms-header-button', iconCls: 'x-fa fa-sign-out', handler: 'onExit' }
    			    ]
            }
);
