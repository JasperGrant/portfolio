export default function PageHeading({ children }) {
    return (
        <div className="pt-14 pb-10 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-yellow sm:text-4xl">{children}</h1>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-turquoise"/>
        </div>
    );
}
