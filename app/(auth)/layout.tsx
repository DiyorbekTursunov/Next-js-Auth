
const Authlayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full h-screen bg-black">
            <div className="flex max-w-[1440px] h-full mx-auto flex-col items-center justify-center">
                {children}
            </div>
        </div>
    )
}

export default Authlayout
