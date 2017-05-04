Ext.define('tallySys.view.main.IndexView4',
		{
				extend:'Ext.chart.CartesianChart',
				requires:['tallySys.store.IndexStore2','Ext.chart.axis.Numeric','Ext.chart.axis.Category','Ext.chart.series.Bar'],
			    xtype : 'indexView4',
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
			      type : 'category',  
			      title : {  
			        text : '月份',  
			        fontSize : 16  
			      },  
			      position : 'bottom'  
			    }],  
			    series: [ {  
			        type : 'area',  
			        xField : 'year',  
			        stacked : false,  
			        title : [ 'Total', 'slaves' ],  
			        yField : [ 'total', 'slaves' ],  
			        style : {  
			          stroke : "#94ae0a",  
			          fillOpacity : 0.6  
			        }  
			      } ] ,  
			    sprites : {  
			      type : 'text',  
			      text : '每月盈余',  
			      font : '25px Helvetica',  
			      width : 120,  
			      height : 35,  
			      x : 60,  
			      y : 40  
			    }  
  
			  }
);
