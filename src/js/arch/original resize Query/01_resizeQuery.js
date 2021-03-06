var resizeQuery = (function () {
	
 		//console.log(window.matchMedia('(max-width: 500px)'));
		//console.log('test');
		
		var mQueries = ['(max-width: 500px)','(max-width: 768px) and (orientation: landscape)','(max-width: 768px)','(max-width: 1024px)', '(max-width: 1324px)', '(min-width: 1324px)'];
		var currentMQ = idQuery();
	
		var monitorMQ = function (eventsobj, init) {
			
			var tmpMQ = currentMQ;
			
			if(init){
				fireCallback(eventsobj,currentMQ);
			}
			
			window.onresize = function() {
				var newMQ = idQuery();
			
				if(newMQ != tmpMQ){
					fireCallback(eventsobj,newMQ);
					
					if(eventsobj['(all)']){
						fireCallback(eventsobj,'(all)');
					}
					
					tmpMQ = newMQ;
				};
			};

		}
		
		function idQuery() {
			for (var i=0 ;i < mQueries.length; i++) {
				if(Modernizr.mq(mQueries[i]) == true){
					return mQueries[i];
				}
			}
		}
		
		function fireCallback(events,index) {
			
			if( typeof(events[index]) === 'function' ){
				return events[index]();
				}
		}
		
		return monitorMQ; 
	
})();