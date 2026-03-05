type NavigationProps = {
    changePage: (page: number) => void;
};

const Navigation = ({ changePage }: NavigationProps) => {
    return (
        <nav className="flex gap-4 p-4">
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => changePage(0)}
            >
                Home
            </button>

            <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => changePage(1)}
            >
                About
            </button>

            <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => changePage(2)}
            >
                Contact
            </button>
        </nav>
    );
};

export default Navigation;
