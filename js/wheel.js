var WheelFn = (function() {
	function WheelFn(el, cb) {
		var elem = el;
		var marker = true;
		var delta;
		var direction;
		var interval = 50;
		var counter1 = 0;
		var counter2;
		var now;

		elem.addEventListener('wheel', wheel);

		function wheel(e){
			counter1++;
			delta = e.deltaY;
			direction > 0 ?  'up':'down'
			if (marker) {wheelStart()}
			return false;
		}
		function wheelStart(e){
			marker = false;
			wheelAct();
		}
		function wheelAct(e){
			counter2 = counter1;
			setTimeout(function(){
				if (counter2 == counter1) {
					wheelEnd(e);
				} else wheelAct();
				
			},interval);
		}
		function wheelEnd(e){
			cb(direction);
			marker = true;
			counter1 = 0;
			counter2 = false;
		}
	}
	return WheelFn;
})();