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
      rows.push(<p key={key}><span>{row.time}</span>: <strong>{l}</strong> {row.speakers}</p>);
    }
    var out = (
      <div className="schedule">
        <h2>Schedule</h2>
        {rows}
      </div>
    );
    if (this.props.match.params.session) {
      var d = this.props.match.params.session;
      if (data[d]) {
        var session = data[d]
        var speaker = (session.speakers) ? <h3>{session.speakers}</h3> : "";
        out = (
          <div className="session">
            <h2>{session.title}</h2>
            {speaker}
            <p className="time">{session.time}</p>
            <div className="description"  dangerouslySetInnerHTML={{ __html: session.description}} />
            <Link to="/schedule">Back</Link>
          </div>
        );
      }
    }
    return out;
  }
}
