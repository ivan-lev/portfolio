import './MeshSpin.scss';

import { useState, useEffect } from 'react';

import { MeshSpin } from '../../vendor/meshspin.js';
import { dodecahedron } from '../../variables/meshSpinSettings.ts';

export default function MeshSpinComponent(): JSX.Element {
  const [isMeshLoaded, setIsMeshLoaded] = useState(false);

  const mesh = new MeshSpin();

  const renderFigure = () => {
    mesh.figure(dodecahedron);
    mesh.fake3D = true;
    mesh.background = true;
    mesh.setup('wrapper');
    mesh.run();
  };

  useEffect(() => {
    setIsMeshLoaded(true);
    if (isMeshLoaded) {
      renderFigure();
    }

    return () => {
      setIsMeshLoaded(false);
    };
  }, [isMeshLoaded]);

  return <div className="mesh-spin" id="wrapper"></div>;
}
