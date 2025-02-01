import { string } from 'prop-types';

import './HelpBox.css';

function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

// testing the skip 

// testig the skip with keyword

HelpBox.propTypes = {
  title: string,
  text: string,
};

export default HelpBox;
