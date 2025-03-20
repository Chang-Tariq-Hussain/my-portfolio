const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-[98%] mx-auto md:w-[93%] lg:w-[90%] xl:w-[85%]">
            {children}
        </div>
    );
};

export default Container;
