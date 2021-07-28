
import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.index);
    console.log(this.props.selectFlat(this.props.index))
  }

  render() {
    return (
      <div className={`card${this.props.selected ? ' active' : '' } `} style={{ objectFit:'cover', backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')` }}>
        <div className="card-category">{this.props.flat.price}{this.props.flat.priceCurrency}</div>
        <div className="card-description">
          {this.props.flat.description}
        </div>
        <a href="#" className="card-link" onClick={this.handleClick}>a</a>
      </div>
    )
  }
}

export default Flat;