export function Card() {
    return (
        <div className="flex flex-col  justify-center gap-4 mt-10">
            <div className="flex justify-center gap-4">
                <div className="bg-amber-200 basis-xs h-96 rounded-xl shadow-lg"></div>
                <div className="bg-blue-200 basis-xs h-96 rounded-xl shadow-lg"></div>
                <div className="bg-emerald-200 basis-xs h-96 rounded-xl shadow-lg"></div>
            </div>
            <div>
                <h2 className="text-center text-3xl font-text">Mantente informado de lo mejor del entrentenimiento!</h2>
            </div>
        </div>

    );
}
