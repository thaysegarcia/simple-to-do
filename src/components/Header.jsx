export default function Header() {
  return (
    <div className="flex justify-between py-4">
      <p>{new Date().toLocaleDateString()}</p>
      <span>Meu To-Do</span>
    </div>
  );
}