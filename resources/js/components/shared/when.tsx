export default function When({
    condition,
    children,
    fallback = null,
}: {
    condition: boolean;
    children: React.ReactNode;
    fallback?: React.ReactNode;
}) {
    return condition ? <>{children}</> : <>{fallback}</>;
}
