import './Header.scss';

import type { Props } from '../../types/Props';

function Header({ children }: Props) {
  return <header className="header">{children}</header>;
}

export default Header;
