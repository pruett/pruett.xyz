import s from "./header.module.css";

export default function Header(): React.ReactElement {
  return (
    <header className={s.container}>
      <nav>navigation</nav>
    </header>
  );
}
