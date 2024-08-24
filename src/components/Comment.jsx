function Comment() {
    return (
        <div className="flex flex-wrap">
            <div className="rounded-[12px] bg-theme-900 w-full">
                <div className="p-[10px] flex flex-wrap">
                    <div className="flex items-center w-full">
                        <div className="sm:w-[40px] w-[30px] sm:h-[40px] h-[30px] rounded-[50%] bg-theme-100 hover:bg-theme-200"></div>
                        <div className="ml-[10px] sm:text-[20px] text-[16px] font-sans font-semibold text-theme-200 hover:text-theme-300">Duong Do</div>
                    </div>
                    <div className="w-full ml-[40px]">
                        Hay quá
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="ml-[50px] text-[10px] flex justify-between w-fit">
                    <div>1 hour ago</div>
                    <div className="mx-[20px] font-semibold cursor-pointer hover:text-theme-400">Like</div>
                    <div className="font-semibold cursor-pointer hover:text-theme-400">Reply</div>
                </div>
            </div>
        </div>
    )
}

export default Comment;