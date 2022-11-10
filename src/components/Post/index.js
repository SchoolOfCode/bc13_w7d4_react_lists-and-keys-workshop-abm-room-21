import React from 'react';

import './index.css';

function Post(prop) {
  return <article>
<h1> {Props.title} </h1>
<h2> {Props.author} </h2>
<p> {props.date} </p>
<img src={props.image.link} atl={props.image.alt}></img>
<p> {props.text} </p>

  </article>;
}

export default Post;
