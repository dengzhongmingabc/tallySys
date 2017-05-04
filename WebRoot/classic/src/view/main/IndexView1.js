Ext.define('tallySys.view.main.IndexView1',
		{
				extend:'Ext.chart.CartesianChart',
				requires:['tallySys.store.IndexStore','Ext.chart.axis.Numeric','Ext.chart.axis.Category','Ext.chart.series.Bar'],
	    	    xtype : 'indexView1',  
	    	    border:false,
	    	    insetPadding : {  
	    	      top : 60,  
	    	      bottom : 20,  
	    	      left : 20,  
	    	      right : 40  
	    	    },  
	    	    store : Ext.create("tallySys.store.IndexStore"),  
	    	    axes : [ {  
	    	      type : 'numeric',  
	    	      position : 'left',  
	    	      grid : true,  
	    	      title : {  
	    	        text : '收入额度',  
	    	        fontSize : 16  
	    	      }  
	    	    }, {  
	    	      type : 'category',  
	    	      title : {  
	    	        text : '月份',  
	    	        fontSize : 16  
	    	      },  
	    	      position : 'bottom'  
	    	    }],  
	    	    series : [ {  
	    	      type : 'bar',  
	    	      xField : 'year',  
	    	      yField : [ 'population' ],
	    	      tooltip : {  
			            trackMouse : true, 
			            renderer : function(storeItem, item) {  
			                this._tooltip.setHtml(item.get('year') + ': ' + item.data.population );
			            }  
			        }
	    	    } ],  
	    	    sprites : {  
	    	      type : 'text',  
	    	      text : '每月收入',  
	    	      font : '25px Helvetica',  
	    	      width : 120,  
	    	      height : 35,  
	    	      x : 100,  
	    	      y : 40  
	    	    }  
            }
);
