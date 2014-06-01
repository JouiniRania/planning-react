/** @jsx React.DOM */
var React = require("react");
var BacklogView = require("./backlog.js");
var PlanView = require("./plan.js");

var PlanningView = React.createClass({
  getInitialState: function() {
    return {backlog: [], plan: []};
  },
  loadPlanFromServer: function() {
    $.ajax({
      url: this.props.plan_url,
      datatype: 'json',
      success: function(data) {
        this.setState($.extend({}, this.state, {plan: data}));
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.plan_url, status, err.tostring());
      }.bind(this)
    });
  },
  loadBacklogFromServer: function() {
    $.ajax({
      url: this.props.backlog_url,
      datatype: 'json',
      success: function(data) {
        this.setState($.extend({}, this.state, {backlog: data}));
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.backlog_url, status, err.tostring());
      }.bind(this)
    });
  },
  componentWillMount: function() {
    this.loadBacklogFromServer();
    this.loadPlanFromServer();
    //setinterval(this.loadbacklogfromserver, this.props.pollinterval);
  },
  render: function() {
    return (
      <div className="planning">
        <h1>planning</h1>
        <div class="row">
            <BacklogView backlog={this.state.backlog} />
            <PlanView plan={this.state.plan} />
        </div>
    </div>
    );
  }
});

module.exports = PlanningView;
