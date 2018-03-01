import PropTypes from 'prop-types';
import React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';

import defaults from '../theme';
import deepMerge from '../utils/deepMerge';
import buildPropGetter from '../utils/buildPropGetter';
import callAll from '../utils/callAll';

function Thumbnail ({ index, src, thumbnail, active, onClick, renderThumbnail }, { theme }) {
	const url = thumbnail ? thumbnail : src;
	const classes = StyleSheet.create(deepMerge(defaultStyles, theme));

	const clickHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClick(index);
  };

	if (renderThumbnail) {
		return renderThumbnail({ index, src, thumbnail, active }, buildPropGetter({
			onClick: f => event => callAll([clickHandler, f], event.target, [event]),
      className: className => `${className || ''} ${css(classes.thumbnail, active && classes.thumbnail__active)}`,
  }));
	}

	return (
		<div
			className={css(classes.thumbnail, active && classes.thumbnail__active)}
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();
				onClick(index);
			}}
			style={{ backgroundImage: 'url("' + url + '")' }}
		/>
	);
}

Thumbnail.propTypes = {
	active: PropTypes.bool,
	index: PropTypes.number,
	onClick: PropTypes.func.isRequired,
  renderThumbnail: PropTypes.func,
  src: PropTypes.string,
	thumbnail: PropTypes.string,
};

Thumbnail.contextTypes = {
	theme: PropTypes.object.isRequired,
};

const defaultStyles = {
	thumbnail: {
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		borderRadius: 2,
		boxShadow: 'inset 0 0 0 1px hsla(0,0%,100%,.2)',
		cursor: 'pointer',
		display: 'inline-block',
		height: defaults.thumbnail.size,
		margin: defaults.thumbnail.gutter,
		overflow: 'hidden',
		width: defaults.thumbnail.size,
	},
	thumbnail__active: {
		boxShadow: `inset 0 0 0 2px ${defaults.thumbnail.activeBorderColor}`,
	},
};

export default Thumbnail;
