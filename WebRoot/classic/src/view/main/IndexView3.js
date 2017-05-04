Ext.define('tallySys.view.main.IndexView3',
		{
				extend:'Ext.chart.PolarChart',
				requires:['tallySys.store.Expense','Ext.chart.series.Bar3D','Ext.chart.series.Pie','Ext.chart.interactions.ItemHighlight','Ext.chart.series.Area'],
			    xtype : 'indexView3',
			    store : Ext.create("tallySys.store.Expense"),
			    animate:true,
			    legend : {  
			        docked : 'right'  
			      },  
			      insetPadding : {  
			        top : 50,  
			        bottom : 20,  
			        left : 20,  
			        right : 20  
			      },  
			      series : [ {  
			        type : 'pie',  
			        angleField : 'spent',  
			        label : {  
			          field : 'cat'  
			        },  
			        highlight:{
                        segment:{
                            margin:20
                        }
                    },
			        tooltip : {  
			            trackMouse : true, 
			            renderer : function(storeItem, item) {  
			            	var value = ((parseFloat(item.data.spent/item.store.sum('spent')) * 100.0).toFixed(2));
			                this._tooltip.setHtml(item.get('cat') + ': ' + value + '%');
			            }  
			        }
			      }],
			      sprites : {  
				      type : 'text',  
				      text : '总支出占比',  
				      font : '25px Helvetica',  
				      width : 100,  
				      height : 15,  
				      x : 60,  
				      y : 40  
				    }
			  } 
  
);
