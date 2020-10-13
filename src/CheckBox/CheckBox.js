import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Label from '../Label';

require('./styles.scss');

class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: this.props.defaultChecked
    };
    this.updateCheck = this.updateCheck.bind(this);
  }

  updateCheck() {
    const check = !this.state.isChecked;
    this.setState({
      isChecked: check
    }, this.props.checkUpdated(check));
  }

  render() {
    const id = uuidv4();
    return (
      <div className='CROWNCheckBox Active'>
        <input id={id} type='checkbox' className='Active' />
        {
          this.props.text && (
            <div className='Label'>
              <Label size='small' text={this.props.text} color='--black' weight='ligth_x' />
            </div>
          )
        }
      </div>
    );
  }
}

Switch.defaultProps = {
  defaultChecked: true,
  checkUpdated: isChecked => console.log(isChecked),
  color: '--yellow-4',
  text: null
};

export default Switch;