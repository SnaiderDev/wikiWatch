export function LabelItem ({ icon, children })  {
    return (
        <div
            className="
                group
                flex items-center gap-3
                px-3 py-2
                rounded-xl
                cursor-pointer
                transition-all duration-300
                hover:text-[var(--color-primary)]
                hover:bg-[var(--color-surface)]
                hover:scale-105
            "
        >
            <span
                className="
                    text-[var(--color-primary)]
                    transform: scale-200
                    transition-transform duration-300
                    group-hover:rotate-20
                "
            >
                {icon}
            </span>

            <span className="font-ui font-medium tracking-wide text-xl">
                {children}
            </span>
        </div>
    );
};