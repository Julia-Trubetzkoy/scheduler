import React, { Component } from 'react';

class ProgressTracker extends Component {
  render() {
    return (
      <div className="progress-tracker">
        <label className="prgress-tracker__label">Progress Tracker</label>
        <div className="progress-tracker__percentage">
            {this.calculateProgress()}%
        </div>
      </div>
    )
  }
}

export default ProgressTracker;