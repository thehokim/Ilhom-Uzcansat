import React from 'react';
import FirstConSec from './firstConSec';
import SecondConSec from './secondConSec';

const ConcourseSection = () => {
    return (
        <div>
          <div id='concourse'><FirstConSec /></div>
          <div id='firstSec'><SecondConSec /></div>
        </div>
      );
    };
export default ConcourseSection