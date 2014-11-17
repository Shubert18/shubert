/** @jsx React.DOM */
		var date = new Date();
		
(function(window) {
var App = window.App;

		App.Views.clock = React.createClass ({
	getInitialState: function() {
		return {seconds: date.getSeconds(),
						minutes: date.getMinutes(),
						hour: date.getHours(),
						year: date.getFullYear(),
						month: date.getMonth(),
						day: date.getDate(),
					}
	},

	render: function(){
		if (this.state.seconds < 10) {
		 	  this.state.seconds = "0"+this.state.seconds;
		 } 
		if (this.state.minutes < 10) {
		 	  this.state.minutes = "0"+this.state.minutes;
		 }
		if (this.state.hour < 10) {
		 	  this.state.hour = "0"+this.state.hour;
		 }  
			 return (
	 	<div id="my-clock">
	 		<div className="date">
	 		 {this.state.day}/{this.state.month}/{this.state.year}
	 		</div>
	 		<div className="time">
	 		{this.state.hour}:{this.state.minutes}:{this.state.seconds}
	 		</div>
	 	</div>
	 )	
	},
	componentDidMount: function() {
		this.timer = setInterval(this.tick, 50);

	},
	componentWillUpdate: function() {
		date = new Date();
	},
	tick: function() {
		this.setState({	seconds: date.getSeconds(),
									 	minutes: date.getMinutes(),
										hour: date.getHours(),
										year: date.getFullYear(),
										month: date.getMonth(),
										day: date.getDate(),
		});
}
});

React.render(<App.Views.clock />,document.getElementById('clock'));

window.App = App;
})(window);