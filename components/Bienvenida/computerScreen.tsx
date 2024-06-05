// components/ComputerScreen.js
const ComputerScreen = () => {
    return (
        <div className="relative w-full h-screen flex items-center justify-center">
            <img
                src="https://via.placeholder.com/800x600.png?text=Computer+Screen"
                alt="Computer Screen"
                className="absolute"
                style={{ width: '50%', height: 'auto' }}
            />
        </div>
    );
};

export default ComputerScreen;
