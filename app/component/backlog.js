/** @jsx React.DOM */
var React = require("react");

var BacklogItemView = React.createClass({
    render: function() {
        return (
            <li className="backlog_item">
                {this.props.children}
            </li>
        );
    }
});

var BacklogView = React.createClass({
    render: function() {
        var backlogItems = this.props.backlog.map(function (item, i) {
            return <BacklogItemView key={i} xref={item.xref} points={item.points}>{item.title}</BacklogItemView>
        });
        return (
            <div className="backlog col-md-6">
                <h2>To be planned</h2>
                <ul>
                    {backlogItems}
                </ul>
            </div>
        );
    }
});

module.exports = BacklogView;
