import { ThemeButton } from "./ThemeButton";

export default function Header() {
  return (
    <section className="flex justify-between items-center py-2">
      <h1>devfinder</h1>
      <ThemeButton />
    </section>
  );
}
