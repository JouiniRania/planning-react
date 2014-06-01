/** @jsx React.DOM */
var React = require("react");

var SubmilestoneView = React.createClass({
    render: function() {
        return (
            <div className="submilestone">
                {this.props.title}
            </div>
        );
    }
});

module.exports = SubmilestoneView;
