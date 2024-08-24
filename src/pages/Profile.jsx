import { useEffect, useState } from "react";
import PageHeader from "./PageHeader";
import { Col, message, Popover, Row, Select } from "antd";
import { CameraOutlined, CarOutlined, EditOutlined, EllipsisOutlined, GlobalOutlined, LockOutlined, ManOutlined, PictureOutlined, SmileOutlined, TableOutlined, TeamOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { getEmoji } from "../config/api/EmojiApi";

function Profile() {

    const [emoji, setEmoji] = useState([]);
    const [blogText, setBlogText] = useState();

    const postType = [
        {
            value: 'anyOne',
            label: <div className="flex justify-between text-theme-200">AnyOne <GlobalOutlined /></div>,
        },
        {
            value: 'justFriend',
            label: <div className="flex justify-between text-theme-200">Friend <TeamOutlined /></div>,
        },
        {
            value: 'private',
            label: <div className="flex justify-between text-theme-200">Private <LockOutlined /></div>,
        }
    ]

    const fetchEmoji = async () => {
        const res = await getEmoji();
        setEmoji(res.slice(0, 50));
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        fetchEmoji();
    }, []);

    const onHandleClick = async () => {
        message.loading("Comming Soon")
    }

    return (
        <div className="h-fit bg-theme-100 min-h-[100vh]">
            <PageHeader index={6} />
            <Row className="w-full flex justify-center absolute bg-theme-100">
                <Col xs={0} sm={0} md={4} lg={4} xl={4} className="h-[100vh] left-0 w-full fixed">
                </Col>
                <Col xs={24} sm={24} md={16} lg={16} xl={16} className="flex justify-center flex-wrap shadow-xl w-full relative">
                    <div className="w-full mt-[50px] md:mt-[80px] mb-[20px] justify-center flex flex-wrap">
                        <div className="w-full relative">
                            <div className="w-full bg-gray-700 h-[200px] md:h-[400px]">
                            </div>
                            <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-theme-200 border-[2px] border-white rounded-[50%] absolute z-2 top-[150px] md:top-[325px] left-[50px] md:left-[100px]">
                            </div>
                            <div className="absolute z-2 top-[170px] md:top-[350px] right-[50px] md:right-[100px] text-white">
                                <CameraOutlined />
                            </div>
                        </div>
                        <div className="w-full mt-[60px] md:mt-[90px] ml-[60px] md:ml-[100px] text-white font-bold text-[20px] md:text-[30px]">
                            Duong Do
                        </div>
                        <div className="w-[80%] flex justify-between mt-[10px]">
                            <button className="text-white bg-theme-400 py-[5px] w-[75%] rounded-[4px] hover:bg-theme-500"><EditOutlined /> Edit Profile</button>
                            <button className="text-white bg-theme-400 py-[5px] w-[21%] rounded-[4px] hover:bg-theme-500"><EllipsisOutlined /></button>
                        </div>
                        <div className="w-[80%] h-fit mt-[20px] bg-white rounded-[12px]">
                            <div className="p-[20px]">
                                <div className="w-full font-bold">
                                    Infomation
                                </div>
                                <div className="mt-[10px] w-full px-[10px]">
                                    <div><TableOutlined className="mr-[10px]"/>Children</div>
                                    <div><ManOutlined className="mr-[10px]"/>Male</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[20px] w-[80%] h-fit bg-white rounded-[12px]">
                            <div className="p-[20px]">
                                <div className="w-full flex justify-start">
                                    <span className="text-[16px] font-sans font-semibold text-theme-200">How's your day going today?</span>
                                </div>
                                <div className="w-full flex justify-start mt-[10px]">
                                    <Select className="w-[110px]" defaultValue="anyOne" options={postType} />
                                </div>
                                <br />
                                <div className="w-full">
                                    <TextArea rows={2} value={blogText} onChange={(event) => setBlogText(event.target.value)} />
                                </div>
                                <div className="w-full flex justify-end mt-[10px] flex-wrap">
                                    <div className="w-fit flex justify-between text-[20px]">
                                        <PictureOutlined className="pr-[10px] text-green-500 cursor-pointer hover:scale-105 transition-all" onClick={() => onHandleClick()} />
                                        <div className="max-w-[50%]">
                                            <Popover placement="bottom" title="" overlayStyle={{ width: 'fit-content' }} content={(
                                                <div className="flex justify-center max-w-[500px]">
                                                    <div className="w-full flex flex-wrap justify-start">
                                                        {emoji.map((value, index) => (
                                                            value.character.length !== 2 ?
                                                                <div />
                                                                :
                                                                <button className="w-fit px-[10px] py-[5px] hover:bg-yellow-100 rounded-[4px] flex justify-center items-center min-w-[50px]" onClick={() => setBlogText(blogText + value.character)}>
                                                                    {value.character}
                                                                </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}>
                                                <SmileOutlined className="pr-[10px] text-yellow-500 cursor-pointer hover:scale-105 transition-all" />
                                            </Popover>
                                        </div>

                                    </div>
                                    <div>
                                        <button className="px-[10px] py-[5px] bg-theme-300 rounded-[4px] text-white font-semibold hover:bg-theme-400">
                                            Post
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex justify-center text-white text-[10px] mt-[10px]">No post</div>
                    </div>
                </Col>
                <Col xs={0} sm={0} md={4} lg={4} xl={4} className="h-[100vh] right-0 w-full fixed">
                </Col>
            </Row>
        </div>
    )
}

export default Profile;