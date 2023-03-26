import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ prev, next }) => {
  return (
    <div className="navigation">
      {prev && <Link to={prev} className="prev-arrow">←</Link>}
      {next && <Link to={next} className="next-arrow">→</Link>}
    </div>
  );
};

export default Navigation;
