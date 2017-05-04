Ext.define('tallySys.store.IndexStore', {
	 extend : 'Ext.data.Store',  
	  storeId : 'indexStore',  
	  requires:['tallySys.model.index.IndexModel'],
	  model : 'tallySys.model.index.IndexModel',  
	  data : [{  
	    "year" : "1610",  
	    "population" : 350  
	  },{  
	    "year" : "1650",  
	    "population" : 503  
	  },{  
	    "year" : "1700",  
	    "population" : 258  
	  },{  
	    "year" : "1750",  
	    "population" : 117  
	  },{  
	    "year" : "1800",  
	    "population" : 530  
	  },{  
	    "year" : "1900",  
	    "population" : 762  
	  },{  
	    "year" : "1950",  
	    "population" : 151  
	  },{  
	    "year" : "2000",  
	    "population" : 2814 
	  },{  
	    "year" : "2010",  
	    "population" : 3087
	  }]  
	});  
