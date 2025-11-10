import { UseCardPinturesHome } from "../hooks/useHomePintures";

export function Card() {
    const cardPintures = UseCardPinturesHome()
    return (
        <div className="mt-14 flex flex-col  justify-center gap-4 mt-10">
            <div>
                <h2 className="text-center text-3xl font-subtitle">Stay up to date with the latest in entertainment!</h2>
            </div>
            <div className="flex flex-wrap justify-center  gap-4">
                <div className="bg-amber-500 basis-xs h-1/3 rounded-xl shadow-lg">
                    <img src={cardPintures[0]} alt="Card 1" className="w-full h-full object-cover rounded-xl opacity-85" />
                </div>
                <div className="bg-violet-500 basis-xs h-1/3 rounded-xl shadow-lg">
                    <img src={cardPintures[1]} alt="Card 2" className="w-full h-full object-cover rounded-xl opacity-85" />
                </div>
                <div className="bg-emerald-500 basis-xs h-1/3 rounded-xl shadow-lg">
                    <img src={cardPintures[2]} alt="Card 3" className="w-full h-full object-cover rounded-xl opacity-85" />
                </div>
            </div>
            <div>
                <h2 className="text-center text-xl font-text">Explore our collection of movies and series</h2>
            </div>
        </div>

    );
}

// function fot card pintures home
export function CardSeccion({ content, title }) {
    const Card = ({ image, text }) => (
        <div className="flex relative basis-sm h-64 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
            <img src={image} alt="Card" className="w-full h-full object-cover rounded-xl opacity-85" />
            <div className="absolute bottom-0 w-full p-2 bg-black text-center rounded-b-xl">
                <h6 className="text-xl">{text}</h6>
            </div>
        </div>
    )
    return (
        <main className="mt-10 flex flex-col gap-1.5 mt-10">
            {title && <h2 className="text-4xl font-subtitle  text-center">{title}</h2>}
            <div className="flex justify-center items-center gap-4  p-4 flex-wrap">
                {
                    content.map((pinture,index) => (
                        <Card key={index} image={pinture.image} text={pinture.name} />
                    ))
                }
            </div>
        </main>
    )
}