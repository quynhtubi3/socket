import { CommentOutlined, DislikeFilled, DislikeOutlined, EllipsisOutlined, EyeInvisibleOutlined, FlagOutlined, HeartFilled, HeartOutlined, LikeFilled, LikeOutlined, PictureOutlined, SendOutlined, SmileOutlined } from "@ant-design/icons";
import { Image, Input, Modal, Popover, Tabs } from "antd";
import { useState } from "react";
import Comment from "./Comment";

function PostCard() {

    const [modal, setModal] = useState({
        like: false,
        comment: false,
        share: false,
    })

    const array = Array(2).fill(null);

    const items = [
        {
            key: '1',
            label: (<div className="flex items-center text-[#9d4edd]"><LikeFilled className="mr-[4px]" />2</div>),
            children: array.map((_, index) => (
                <div className="my-[10px]">
                    <div className="flex justify-start px-[10px] py-[5px] rounded-[4px]">
                        <button className="sm:w-[40px] w-[30px] sm:h-[40px] h-[30px] rounded-[50%] bg-[#240046] hover:bg-[#3c096c] cursor-pointer"></button>
                        <button className="ml-[10px] sm:text-[20px] text-[16px] font-sans font-semibold text-[#3c096c] hover:text-[#5a189a] cursor-pointer">Duong Do</button>
                    </div>
                </div>
            )),
        },
        {
            key: '2',
            label: (<div className="flex items-center text-[#9d4edd]"><DislikeFilled className="mr-[4px]" />0</div>),
            children: '',
        },
        {
            key: '3',
            label: (<div className="flex items-center text-[#9d4edd]"><HeartFilled className="mr-[4px]" />0</div>),
            children: '',
        },
    ];

    return (
        <div className="w-full bg-white rounded-[12px] h-fit">
            <Modal open={modal.like} onClose={() => setModal({ ...modal, like: false })} onCancel={() => setModal({ ...modal, like: false })} footer={[]} centered>
                <Tabs defaultActiveKey="1" items={items} />
            </Modal>
            <Modal open={modal.comment} title={(<button className="w-fit px-[10px] py-[5px] hover:bg-[#e0aaff] rounded-[4px]">
                <LikeOutlined />
            </button>)} onClose={() => setModal({ ...modal, comment: false })} onCancel={() => setModal({ ...modal, comment: false })} footer={[]} width={1000} centered>
                <hr className="w-full" />
                {array.map((_, index) => (
                    <div className="mt-[10px]">
                        <Comment />
                    </div>
                ))}
                <div className="w-full px-[10px] py-[5px] bg-gray-100 mt-[20px] rounded-[4px] flex justify-between items-center">
                    <Input variant="borderless" />
                    <div className="flex justify-between w-fit">
                        <PictureOutlined className="cursor-pointer hover:scale-105 transition-all text-[16px] text-green-500" />
                        <SmileOutlined className="ml-[10px] mr-[15px] cursor-pointer hover:scale-105 transition-all text-[16px] text-yellow-500" />
                        <SendOutlined className="cursor-pointer hover:scale-105 transition-all text-[20px]" />
                    </div>
                </div>
            </Modal>
            <Modal open={modal.share} onClose={() => setModal({ ...modal, share: false })} onCancel={() => setModal({ ...modal, share: false })} footer={[]} centered>
                <div className="mt-[30px]">
                    {array.map((_, index) => (
                        <div className="my-[10px]">
                            <div className="flex justify-between px-[10px] py-[5px] rounded-[4px] items-center">
                                <div className="flex justify-start">
                                    <div className="sm:w-[40px] w-[30px] sm:h-[40px] h-[30px] rounded-[50%] bg-[#240046] hover:bg-[#3c096c]"></div>
                                    <div className="ml-[10px] sm:text-[20px] text-[16px] font-sans font-semibold text-[#3c096c] hover:text-[#5a189a]">Duong Do</div>
                                </div>
                                <button className="px-[10px] py-[5px] bg-[#9d4edd] text-white rounded-[4px] hover:bg-[#c77dff]"> 
                                    Share
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </Modal>
            <div className="p-[20px] flex flex-wrap">
                <div className="w-full justify-between flex items-center">
                    <div className="flex justify-start w-fit items-center">
                        <div className="flex items-center cursor-pointer">
                            <div className="sm:w-[40px] w-[30px] sm:h-[40px] h-[30px] rounded-[50%] bg-[#240046] hover:bg-[#3c096c]"></div>
                            <div className="ml-[10px] sm:text-[20px] text-[16px] font-sans font-semibold text-[#3c096c] hover:text-[#5a189a]">Duong Do</div>
                            <div className="ml-[10px] sm:text-[12px] text-[8px] mt-[10px]">23 mins ago</div>
                        </div>
                    </div>
                    <div className="w-fit">
                        <Popover placement="right" title="" content={(
                            <div className="flex flex-wrap justify-center">
                                <button className="w-[100%] px-[10px] py-[5px] hover:bg-[#e0aaff] rounded-[4px] flex justify-between items-center">
                                    Hide <EyeInvisibleOutlined />
                                </button>
                                <button className="w-[100%] px-[10px] py-[5px] hover:bg-[#e0aaff] rounded-[4px] flex justify-between items-center">
                                    Report <FlagOutlined className="text-red-500" />
                                </button>
                            </div>
                        )}>
                            <EllipsisOutlined className="text-[20px] cursor-pointer" />
                        </Popover>
                    </div>
                </div>
                <div className="w-full justify-start flex mt-[10px] font-sans">
                    Title
                </div>
                <div className="w-full h-[200px] bg-gradient-to-r from-[#5a189a] via-[#7b2cbf] to-[#9d4edd] rounded-[12px] mt-[10px]">
                </div>
                <div className="w-full mt-[10px] flex justify-between">
                    <button className="flex items-center" onClick={() => setModal({ ...modal, like: true })}><LikeFilled className="text-[#9d4edd] text-[16px] mr-[4px]" />You and 1 more</button>
                    <button onClick={() => setModal({ ...modal, comment: true })}>2 comments</button>
                </div>
                <hr className="w-full mt-[10px]" />
                <div className="w-full flex justify-between mt-[10px]">
                    <Popover placement="top" title="" content={(
                        <div className="flex justify-between w-fit">
                            <button className="w-fit px-[10px] py-[5px] hover:bg-[#e0aaff] rounded-[4px]">
                                <LikeOutlined />
                            </button>
                            <button className="w-fit px-[10px] py-[5px] hover:bg-[#e0aaff] rounded-[4px]">
                                <DislikeOutlined />
                            </button>
                            <button className="w-fit px-[10px] py-[5px] hover:bg-[#e0aaff] rounded-[4px]">
                                <HeartOutlined />
                            </button>
                        </div>
                    )}>
                        <button className="flex w-[30%] hover:bg-[#e0aaff] px-[10px] py-[5px] rounded-[4px] items-center justify-center"><LikeOutlined className="text-[20px] mr-[4px]" />Like</button>
                    </Popover>
                    <button className="flex w-[30%] hover:bg-[#e0aaff] px-[10px] py-[5px] rounded-[4px] items-center justify-center" onClick={() => setModal({ ...modal, comment: true })}><CommentOutlined className="text-[20px] mr-[4px]" />Comment</button>
                    <button className="flex w-[30%] hover:bg-[#e0aaff] px-[10px] py-[5px] rounded-[4px] items-center justify-center" onClick={() => setModal({ ...modal, share: true })}><SendOutlined className="text-[20px] mr-[4px]" />Share</button>
                </div>
            </div>
        </div>
    )
}

export default PostCard;