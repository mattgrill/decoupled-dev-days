import React from 'react';
import {
  Link
} from 'react-router-dom';
import data from './program-data.json';

export default class Program extends React.Component {
  render() {
    var rows = [];
    for (var key in data) {
      var row = data[key];
      var l = (
        <Link to={`program/${key}`}>{row.title}</Link>
      )
      rows.push(
        <div className="program-session" key={key}>
          <div className="program-time">{row.time}</div>
          <div className="program-details">
            <div className="program-title">{l}</div>
            <div className="program-speaker">{row.speakers}</div>
          </div>
        </div>
      );
    }
    var out = (
      <div className="program">
        <h1>Program</h1>
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
              <Link to="/program">Back to program</Link>
            </div>
          </div>
        );
      }
    }
    return out;
  }
}
