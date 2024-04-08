import './TechElement.scss';

import { Technology } from '../../types/Technology';

export default function TechElement({ technology }: { technology: Technology }) {
  const { logo, title } = technology;
  return (
    <li className="main__stack-list-element">
      <img className="main__stack-list-logo" alt={title} src={logo}></img>
    </li>
  );
}
