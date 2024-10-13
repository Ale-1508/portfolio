import Link from 'next/link';

interface NavbarOptionProps {
  name: string;
  route: string;
}

export default function Navbar() {
  return (
    <ul>
      <NavbarOption name="Work" route="/" />
      <NavbarOption name="About" route="/about"/>
      <li>Showcase</li>
      <li>Contact</li>
    </ul>
  );
}

const NavbarOption = ( props: NavbarOptionProps ) => {
  return(
    <li>
      <Link  href={props.route}>
        {props.name}
      </Link>
    </li>
  );
}