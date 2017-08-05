import React from 'react';

const About = () => (
  <div className="about">
    <h1>About</h1>
    <div className="content">
      <p>Decoupled Dev Days is a small developer-focused conference for architects, developers, and businesspeople involved in implementing decoupled Drupal architectures.</p>
      <p>Decoupled Drupal is the use of Drupal as a content service for other non-Drupal applications, whether they are in native desktop or mobile, universal JavaScript, set-top boxes, IoT devices, conversational interfaces, or other technologies.</p>

      <h2>Mission</h2>
      <p>The mission of Decoupled Dev Days, beyond helping attendees engage and connect with people sharing their interests, is threefold:</p>
      <ul>
        <li><strong>Share best practices in sessions.</strong> We encourage everyone to share their experiences in both back-end development of Drupal as a content service and front-end development of non-Drupal applications consuming Drupal content, especially those in JavaScript.</li>
        <li><strong>Discuss difficult shared problems in discussions.</strong> We invite everyone to help identify and discuss shared issues in decoupling Drupal Drupal-backed front ends to gather in discussions to unblock progress in our respective communities.</li>
        <li><strong>Build open-source projects in sprints.</strong> We collaborate with contributors and members of open-source projects across the Drupal ecosystem and outside of it to build other open-source projects in code sprints that tangibly benefit our communities.</li>
      </ul>

      <h2>Conference</h2>
      <p>The conference consists of two days:</p>
      <ul>
        <li><strong>Saturday, August 19:</strong> Single track of sessions</li>
        <li><strong>Sunday, August 20:</strong> Code sprints and discussions</li>
      </ul>
      <p>Topics include best practices in the use of Drupal as a content service, such as Drupal web services, recommended architectures and frameworks, and techniques. Other topics include the surrounding decoupled Drupal ecosystem, including SDKs, libraries, and client technologies.</p>

      <h2>Organizing team</h2>
      <ul>
        <li><strong>Matt Davis</strong>, Mediacurrent</li>
        <li><strong>Preston So</strong>, Acquia</li>
        <li>Alex Ross, NBCUniversal</li>
        <li>Annie Stone, Phase2 Technology</li>
        <li>Bob Kepford, Mediacurrent</li>
        <li>Brian Aznar, Major League Soccer</li>
        <li>Chris Hamper, Acquia</li>
        <li>Jeremy Kutner, Warner Music Group</li>
        <li>Mark Casias, Mediacurrent</li>
        <li>Matt Grill, Acquia</li>
      </ul>
    </div>
  </div>
);

export default About;
