const Text = ({children}: { children: string }) => {
    return (
        <div className="flex items-center justify-center h-screen overflow-hidden bg-transparent">
            {/*<div className="flex items-start justify-center h-screen pt-32">*/}
            <div className="perspective-[400px]">
                <div className="
            text-main text-2xl font-bold
            w-[600px]
            animate-crawl
            origin-bottom
            [transform:rotateX(25deg)]
            text-center
            space-y-8
          "
                >
                    {children}
                </div>
            </div>
        </div>

)
    ;
};

export default Text;
