/** @jsx React.DOM */
var React = require("react");
var MilestoneView = require("./submilestone.js");

var PlanView = React.createClass({
    render: function() {
        var submilestones = this.props.plan.map(function (submilestone, i) {
            return (
                <MilestoneView key={i} title={submilestone.title} />
            );
        });
        return (
            <div className="plan col-md-6">
                <h2>List of Sprint in Release 7.0</h2>
                {submilestones}
            </div>
        );
    }
});

module.exports = PlanView;
