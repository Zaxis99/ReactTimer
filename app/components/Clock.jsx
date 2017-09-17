import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
    constructor(props) {
        super(props);
    }

    formatSeconds(totalSeconds) {
        var seconds;
        var minutes;

        seconds = totalSeconds % 60;
        minutes = Math.floor(totalSeconds / 60);

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        return minutes + ':' + seconds;
    }

    render() {
        var {totalSeconds} = this.props;

        return (
            <div className="clock">
                <span className="clock-text">{this.formatSeconds(totalSeconds)}</span>
            </div>
        );
    }
}

Clock.propTypes = {
    totalSecons: PropTypes.number
};

Clock.defaultProps = {
    totalSecons: 0
};

module.exports = Clock;