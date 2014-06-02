/** @jsx React.DOM */
var React = require("react");

var BacklogItemView = React.createClass({

    getInitialState: function() {
        return {
            open: false
        };
    },

    toggleChildren: function() {
        this.setState({open: !this.state.open});
    },

    render: function() {
        var toggleClass = this.state.open ? 'is_open' : 'is_closed';

        return (
            <li className="backlog_item">
                <div className="backlog_item_title">
                    {this.props.children}
                </div>
                <div className="backlog_item_children_wrapper">
                    <div className={"backlog_item_children " + toggleClass}>
                        Coucou, tu veux voir mes fils?
                    </div>
                    <a onClick={this.toggleChildren} className="show_children">…</a>
                </div>
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
