import { Col, Popover, Row } from "antd";
import PageHeader from "./PageHeader";
import { useEffect, useState } from "react";
import { DeleteOutlined, EllipsisOutlined, PlusOutlined } from "@ant-design/icons";

function Friends() {

    const [index, setIndex] = useState(1);

    const array = Array(10).fill(null);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <div className="h-fit bg-theme-100 min-h-[100vh]">
            <PageHeader index={3} />
            <Row className="w-full flex justify-center absolute bg-theme-100">
                <Col xs={0} sm={0} md={4} lg={4} xl={4} className="h-[100vh] left-0 w-full fixed">

                </Col>
                <Col xs={24} sm={24} md={16} lg={16} xl={16} className="flex justify-center flex-wrap shadow-xl w-full relative">
                    <div className="w-[80%]">
                        <div className="text-white w-full flex justify-start text-[30px] font-semibold mt-[100px] mb-[20px] items-center">
                            Friend
                        </div>
                        <div className="w-full flex justify-start">
                            <div className="w-fit flex justify-between">
                                <button className={`mr-[10px] px-[10px] py-[5px] rounded-[12px] text-white flex items-center hover:bg-theme-400
                                                    ${index === 1 ? "bg-theme-400" : "bg-theme-500"}`} onClick={() => setIndex(1)}>
                                    Requests
                                </button>
                                <button className={`px-[10px] py-[5px] rounded-[12px] text-white flex items-center hover:bg-theme-400
                                                    ${index === 2 ? "bg-theme-400" : "bg-theme-500"}`} onClick={() => setIndex(2)}>
                                    Friends
                                </button>
                            </div>
                        </div>
                        <div className={`w-full ${index === 1 ? "" : "hidden"} bg-white rounded-[8px] py-[2px] mt-[10px]`}>
                            {array.map((_, index) => (
                                <div className="my-[10px] bg-white px-[20px] py-[10px] rounded-[12px] flex justify-between">
                                    <div className="flex justify-start">
                                        <button className="sm:w-[40px] w-[30px] sm:h-[40px] h-[30px] rounded-[50%] bg-theme-100 hover:bg-theme-200"></button>
                                        <button className="ml-[10px] sm:text-[20px] text-[16px] font-sans font-semibold text-theme-200 hover:text-theme-300">Duong Do</button>
                                    </div>
                                    <div className="flex justify-between w-fit sm:text-[16px] text-[10px]">
                                        <button className="mr-[10px] px-[10px] py-[5px] bg-theme-500 rounded-[8px] text-white font-semibold items-center hover:bg-theme-600">
                                            Accept
                                        </button>
                                        <button className="mr-[10px] px-[10px] py-[5px] bg-gray-200 rounded-[8px] text-black font-semibold items-center hover:bg-gray-400">
                                            Decline
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={`w-full ${index === 2 ? "" : "hidden"} bg-white rounded-[8px] py-[2px] mt-[10px]`}>
                            {array.map((_, index) => (
                                <div className="my-[10px] bg-white px-[20px] py-[10px] rounded-[12px] flex justify-between">
                                    <div className="flex justify-start">
                                        <div className="sm:w-[40px] w-[30px] sm:h-[40px] h-[30px] rounded-[50%] bg-theme-100 hover:bg-theme-200"></div>
                                        <div className="ml-[10px] sm:text-[20px] text-[16px] font-sans font-semibold text-theme-200 hover:text-theme-300">Duong Do</div>
                                    </div>
                                    <div className="flex justify-between w-fit">
                                        <Popover placement="right" title="" content={(
                                            <div className="flex flex-wrap justify-center">
                                                <button className="w-[100%] px-[10px] py-[5px] hover:bg-red-100 rounded-[4px] flex justify-between items-center">
                                                    Delete <DeleteOutlined className="text-red-500 ml-[5px]" />
                                                </button>
                                            </div>
                                        )}>
                                            <EllipsisOutlined className="text-[20px] cursor-pointer" onClick={() => setIndex(2)} />
                                        </Popover>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="w-full mb-[20px]">
                            <div className={`text-white w-full flex justify-start text-[20px] font-semibold mt-[10px] mb-[20px] items-center ${index === 1 ? "" : "hidden"}`}>
                                Suggest
                            </div>
                            <div className={`w-full ${index === 1 ? "" : "hidden"} bg-white rounded-[8px] py-[2px] mt-[10px]`}>
                                {array.map((_, index) => (
                                    <div className="my-[10px] bg-white px-[20px] py-[10px] rounded-[12px] flex justify-between">
                                        <div className="flex justify-start">
                                            <button className="sm:w-[40px] w-[30px] sm:h-[40px] h-[30px] rounded-[50%] bg-theme-100 hover:bg-theme-200"></button>
                                            <button className="ml-[10px] sm:text-[20px] text-[16px] font-sans font-semibold text-theme-200 hover:text-theme-300">Duong Do</button>
                                        </div>
                                        <div className="flex justify-between w-fit sm:text-[16px] text-[10px]">
                                            <button className="mr-[10px] px-[15px] py-[5px] bg-theme-500 rounded-[8px] text-white font-semibold items-center hover:bg-theme-600">
                                                <PlusOutlined className="mr-[10px] font-bold" />Add
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={0} sm={0} md={4} lg={4} xl={4} className="h-[100vh] right-0 w-full fixed">
                </Col>
            </Row>
        </div>
    )
}

export default Friends;