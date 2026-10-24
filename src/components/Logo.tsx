import { Isotipo } from "./Isotipo";

type Props = { tone?: "light" | "dark"; className?: string };

export function Logo({ tone = "light", className = "" }: Props) {
  const isotipo = tone === "dark" ? "#FFFFFF" : "#1D5A91";
  const uno = tone === "dark" ? "text-white" : "text-brand";
  const dev = tone === "dark" ? "text-white/70" : "text-ink";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Isotipo className="h-9 w-auto" color={isotipo} />
      <span className="text-2xl font-extrabold leading-none tracking-tight">
        <span className={uno}>UNO</span>
        <span className={dev}>DEV</span>
      </span>
    </span>
  );
}
