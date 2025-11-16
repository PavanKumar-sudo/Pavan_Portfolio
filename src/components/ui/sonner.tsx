import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            [
              "group toast",
              // Layout & spacing
              "group-[.toaster]:px-4 group-[.toaster]:py-3",
              // Premium glassmorphism card
              "group-[.toaster]:rounded-2xl group-[.toaster]:border group-[.toaster]:border-white/60",
              "group-[.toaster]:bg-white/90 group-[.toaster]:backdrop-blur-xl",
              "group-[.toaster]:shadow-[0_18px_45px_rgba(148,163,184,0.35)]",
              // Left accent bar
              "group-[.toaster]:before:absolute group-[.toaster]:before:left-0 group-[.toaster]:before:top-0 group-[.toaster]:before:h-full group-[.toaster]:before:w-1.5",
              "group-[.toaster]:before:bg-gradient-to-b group-[.toaster]:before:from-purple-500 group-[.toaster]:before:via-blue-500 group-[.toaster]:before:to-teal-400",
              // Smooth entrance
              "group-[.toaster]:animate-fade-in",
              "group-[.toaster]:text-slate-900",
            ].join(" "),
          description:
            "group-[.toast]:text-slate-500 group-[.toast]:text-xs group-[.toast]:sm:text-sm",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
