import React from "react";

function aboutCard(props) {
  return (
    <div className="card">
      <div className="card-header">{props.bandName}</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>A well-known quote, contained in a blockquote element.</p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

export default aboutCard;
