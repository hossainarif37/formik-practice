const YoutubeForm = () => {



    return (
        <div className="h-screen px-4 lg:px-0">
            <form className="flex flex-col mt-20 lg:w-96 shadow-lg mx-auto py-10 px-10 rounded-xl">
                <h2 className="text-3xl text-[#333] font-sans font-bold text-center mb-6">Registration Form</h2>
                {/* Name */}
                <label htmlFor="name" className="font-semibold mb-2">Name</label>
                <input type="text" id="name" className="input" />
                {/* name filed error message */}

                {/* Email */}
                <label htmlFor="email" className="font-semibold my-2">Email</label>
                <input type="email" id="email" className="input" />
                {/* email field error message */}


                {/* Channel */}
                <label htmlFor="channel" className="font-semibold my-2">Channel</label>
                <input type="text" id="channel" className="input" />
                {/* email field error message */}


                {/* Button */}
                <button type="submit" className="btn mt-4">Submit</button>
            </form>

        </div>
    );
};

export default YoutubeForm;