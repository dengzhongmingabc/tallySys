Ext.define('tallySys.store.IndexStore2', {
	 extend : 'Ext.data.Store',  
	  storeId : 'indexStore2',  
	  requires:['tallySys.model.index.IndexModel2'],
	  model : 'tallySys.model.index.IndexModel2',  
	  data : [{  
	    "year" : "1790",  
	    "total" : 3.9,  
	    "slaves" : 0.7  
	  },{  
	    "year" : "1800",  
	    "total" : 5.3,  
	    "slaves" : 0.9  
	  },{  
	    "year" : "1810",  
	    "total" : 7.2,  
	    "slaves" : 1.2  
	  },{  
	    "year" : "1820",  
	    "total" : 9.6,  
	    "slaves" : 1.5  
	  },{  
	    "year" : "1830",  
	    "total" : 12.9,  
	    "slaves" : 2  
	  },{  
	    "year" : "1840",  
	    "total" : 17,  
	    "slaves" : 2.5  
	  },{  
	    "year" : "1850",  
	    "total" : 23.2,  
	    "slaves" : 3.2  
	  },{  
	    "year" : "1860",  
	    "total" : 31.4,  
	    "slaves" : 4  
	  }]  
	});  
