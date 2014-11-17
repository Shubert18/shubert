/** @jsx React.DOM */
(function(window) {
var App = window.App;
 App.Views.ToDo = React.createClass({
 componentDidMount: function() {
 		console.log(this.state);
 },	
 getInitialState: function() {
 	return {items: [],
 			text: ""
 		};
 },	
 handleChange: function(x) {
 	this.setState({text: x.target.value});
 },
  render: function(){
  	return(
  			<div className="lista">
  			<h1> To Do </h1>
  			<form>
  			 <input onChange={this.handleChange} value={this.state.text} />
  			 <button></button>
  			</form>
  			</div>
  		)
  }

});
React.render(<App.Views.ToDo />, document.getElementById("todo"));
window.App = App;
})(window);