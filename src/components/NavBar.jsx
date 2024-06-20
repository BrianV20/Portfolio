export default function NavBar() {

    return (
        <div className="bg-blue-300 py-1 px-5 flex justify-between gap-x-5">
            <div>
                <p className="text-xl">Brian Velázquez</p>
            </div>
            <div className="flex flex-wrap">
                <p>About</p>
                <p className="mx-1">-</p>
                <p>Education</p>
                <p className="mx-1">-</p>
                <p>Proyects</p>
                <p className="mx-1">-</p>
                <p>Contact</p>
            </div>
        </div>
    )
};