/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    const { selectFlat, index } = this.props;

    selectFlat(index);
    console.log(selectFlat(index));
  }

  render() {
    const { handleClick, flat, selected } = this.props;

    const style = { backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${flat.imageUrl}')`};

    return (
      <div
        className={`card ${selected ? ' active' : ''} `}
        style={style}
        onClick={handleClick}
        onKeyDown={handleClick}
      >
        <div className="card-category">
          {flat.price}
          {flat.priceCurrency}
        </div>
        <div className="card-description">
          <h2>{flat.name}</h2>
          {flat.description}
        </div>
        <a href="#" className="card-link" alt={flat.name}></a>
      </div>
    );
  }
}

export default Flat;
