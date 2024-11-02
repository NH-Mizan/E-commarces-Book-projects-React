import BannerImg from '../assets/books.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen mb-8 rounded-lg">
                <div className="hero-content gap-8 flex-col lg:flex-row-reverse">
                    <img
                        src={BannerImg}
                        className="max-w-xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                       
                        <button className="btn btn-primary mt-14">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;