'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _deepMerge = require('../utils/deepMerge');

var _deepMerge2 = _interopRequireDefault(_deepMerge);

var _buildPropGetter = require('../utils/buildPropGetter');

var _buildPropGetter2 = _interopRequireDefault(_buildPropGetter);

var _callAll = require('../utils/callAll');

var _callAll2 = _interopRequireDefault(_callAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Thumbnail(_ref, _ref2) {
	var index = _ref.index,
	    src = _ref.src,
	    thumbnail = _ref.thumbnail,
	    active = _ref.active,
	    _onClick = _ref.onClick,
	    renderThumbnail = _ref.renderThumbnail;
	var theme = _ref2.theme;

	var url = thumbnail ? thumbnail : src;
	var classes = _noImportant.StyleSheet.create((0, _deepMerge2.default)(defaultStyles, theme));

	var clickHandler = function clickHandler(e) {
		e.preventDefault();
		e.stopPropagation();
		_onClick(index);
	};

	if (renderThumbnail) {
		return renderThumbnail({ index: index, src: src, thumbnail: thumbnail, active: active }, (0, _buildPropGetter2.default)({
			onClick: function onClick(f) {
				return function (event) {
					return (0, _callAll2.default)([clickHandler, f], event.target, [event]);
				};
			},
			className: function className(_className) {
				return (_className || '') + ' ' + (0, _noImportant.css)(classes.thumbnail, active && classes.thumbnail__active);
			}
		}));
	}

	return _react2.default.createElement('div', {
		className: (0, _noImportant.css)(classes.thumbnail, active && classes.thumbnail__active),
		onClick: function onClick(e) {
			e.preventDefault();
			e.stopPropagation();
			_onClick(index);
		},
		style: { backgroundImage: 'url("' + url + '")' }
	});
}

Thumbnail.propTypes = {
	active: _propTypes2.default.bool,
	index: _propTypes2.default.number,
	onClick: _propTypes2.default.func.isRequired,
	renderThumbnail: _propTypes2.default.func,
	src: _propTypes2.default.string,
	thumbnail: _propTypes2.default.string
};

Thumbnail.contextTypes = {
	theme: _propTypes2.default.object.isRequired
};

var defaultStyles = {
	thumbnail: {
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		borderRadius: 2,
		boxShadow: 'inset 0 0 0 1px hsla(0,0%,100%,.2)',
		cursor: 'pointer',
		display: 'inline-block',
		height: _theme2.default.thumbnail.size,
		margin: _theme2.default.thumbnail.gutter,
		overflow: 'hidden',
		width: _theme2.default.thumbnail.size
	},
	thumbnail__active: {
		boxShadow: 'inset 0 0 0 2px ' + _theme2.default.thumbnail.activeBorderColor
	}
};

exports.default = Thumbnail;