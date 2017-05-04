Ext.define('tallySys.view.main.IndexView2',
		{
				extend:'Ext.chart.CartesianChart',
				requires:['tallySys.store.IndexStore2','Ext.chart.axis.Numeric','Ext.chart.axis.Category','Ext.chart.series.Bar'],
			    xtype : 'indexView2',
			    store : Ext.create("tallySys.store.IndexStore2"),
			    insetPadding : {  
			      top : 60,  
			      bottom : 20,  
			      left : 20,  
			      right : 40  
			    },  
			    axes : [ {  
			      type : 'numeric',  
			      position : 'left',  
			      grid : true,  
			      title : {  
			        text : '额度',  
			        fontSize : 16  
			      }  
			    }, {  
			      type : 'category3d',  
			      title : {  
			        text : '月份',  
			        fontSize : 16  
			      },  
			      position : 'bottom'  
			    }],  
			    series : [ {  
			      type : 'bar3d',  //bar 平面图
			      stacked:false, //true 加上面
			      xField : 'year',  
			      yField : [ 'total', 'slaves' ],
			      tooltip : {  
			            trackMouse : true, 
			            renderer : function(storeItem, item) {  
			                this._tooltip.setHtml(item.get('year') + ', 收入:' + item.data.total+ '、 支出:' + item.data.slaves );
			            }  
			        }
			    }],  
			    sprites : {  
			      type : 'text',  
			      text : '每月收入与支付对比图',  
			      font : '25px Helvetica',  
			      width : 120,  
			      height : 35,  
			      x : 60,  
			      y : 40  
			    }  
  
			  }
);
