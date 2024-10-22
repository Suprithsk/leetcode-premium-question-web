
import Header from "./Header";

function HomePage() {
    

    return (
        <>
            <Header />
            <div className="container mx-auto py-14 px-4 md:max-w-[calc(80%-20px)]">
                <h2 className="font-bold text-lg">Welcome, Suprith S K</h2>
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-14 flex justify-center items-center rounded-lg">
                    <div>
                        <h1 className="text-5xl text-white font-bold mb-4 text-center">Coding can be fun!</h1>
                        <h3 className="text-xl text-white font-medium text-center">Unlock your coding potential with the ultimate DSA challenge collection!</h3>
                    </div>
                </div>
                
            </div>
        </>
    );
}
export default HomePage;
