export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <span className="font-heading font-semibold text-foreground">
          Dieci<span className="text-primary">AI</span>
        </span>
        <p>© {new Date().getFullYear()} Dieci AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
