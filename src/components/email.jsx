var React = require('react');
var valueMixin = require('./mixins/valueMixin.jsx');
var multiMixin = require('./mixins/multiMixin.jsx');
var inputMixin = require('./mixins/inputMixin.jsx');

module.exports = React.createClass({
  displayName: 'Email',
  mixins: [valueMixin, multiMixin, inputMixin]
});