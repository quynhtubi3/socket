import { DeleteOutlined, EllipsisOutlined } from "@ant-design/icons";
import { Popover } from "antd";

function NotiCard() {
    return (
        <div className="w-full h-fit bg-white my-[8px] rounded-[6px]">
            <div className="p-[15px] sm:p-[20px] flex justify-between items-center">
                <div className="flex">
                    <div className="sm:w-[50px] w-[40px] sm:h-[50px] h-[40px] rounded-[50%] bg-theme-100 hover:bg-theme-200 mb-[10px]"></div>
                    <div className="ml-[10px] sm:text-[20px] text-[16px]"><span className="font-bold">Duong Do</span> Liked your post.</div>
                </div>
                <div>
                    <Popover placement="right" title="" content={(
                        <div className="flex flex-wrap justify-center">
                            <button className="w-[100%] px-[10px] py-[5px] hover:bg-red-100 rounded-[4px] flex justify-between items-center">
                                Delete <DeleteOutlined className="text-red-500 ml-[5px]" />
                            </button>
                        </div>
                    )}>
                        <EllipsisOutlined className="text-[25px] cursor-pointer ml-[4px]" />
                    </Popover>
                </div>
            </div>
        </div>
    )
}

export default NotiCard;