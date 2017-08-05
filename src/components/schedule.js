import React from 'react';
import {
  Link
} from 'react-router-dom';
import data from './schedule-data.json';

export default class Schedule extends React.Component {
  render() {
    var rows = [];
    for (var key in data) {
      var row = data[key];
      var l = (
        <Link to={`schedule/${key}`}>{row.title}</Link>
      )
      rows.push(
        <div className="schedule-session" key={key}>
          <div className="schedule-time">{row.time}</div>
          <div className="schedule-details">
            <div className="schedule-title">{l}</div>
            <div className="schedule-speaker">{row.speakers}</div>
          </div>
        </div>
      );
    }
    var out = (
      <div className="schedule">
        <h1>Schedule</h1>
        <div className="content">
          {rows}
        </div>
      </div>
    );
    if (this.props.match.params.session) {
      var d = this.props.match.params.session;
      if (data[d]) {
        var session = data[d]
        var speaker = (session.speakers) ? <h3>{session.speakers}</h3> : "";
        out = (
          <div className="session">
            <h1>{session.title}</h1>
            <div className="content">
              {speaker}
              <p className="session-time">{session.time}</p>
              <div className="session-description" dangerouslySetInnerHTML={{ __html: session.description}} />
              <Link to="/schedule">Back to schedule</Link>
            </div>
          </div>
        );
      }
    }
    return out;
  }
}
