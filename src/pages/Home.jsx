import { Col, message, Row, Select } from "antd";
import PageHeader from "./PageHeader";
import TextArea from "antd/es/input/TextArea";
import { GlobalOutlined, LockOutlined, PictureOutlined, SmileOutlined, TeamOutlined } from "@ant-design/icons";
import PostCard from "../components/PostCard";

function Home() {
    const postType = [
        {
            value: 'anyOne',
            label: <div className="flex justify-between text-[#7b2cbf]">AnyOne <GlobalOutlined /></div>,
        },
        {
            value: 'justFriend',
            label: <div className="flex justify-between text-[#7b2cbf]">Friend <TeamOutlined /></div>,
        },
        {
            value: 'private',
            label: <div className="flex justify-between text-[#7b2cbf]">Private <LockOutlined /></div>,
        }
    ]

    const array = Array(10).fill(null);

    const onHandleClick = () => {
        message.loading("Comming Soon")
    }

    return (
        <div className="h-fit w-full bg-[#240046]">
            <PageHeader index={1} />
            <Row className="w-full flex justify-center absolute bg-[#240046]">
                <Col xs={0} sm={0} md={4} lg={4} xl={4} className="h-[100vh] left-0 w-full fixed">

                </Col>
                <Col xs={24} sm={24} md={16} lg={16} xl={16} className="flex justify-center flex-wrap shadow-xl w-full relative">
                    <div className="md:mt-[120px] mt-[160px] w-[80%] h-fit bg-white rounded-[12px]">
                        <div className="p-[20px]">
                            <div className="w-full flex justify-start">
                                <span className="text-[16px] font-sans font-semibold text-[#3c096c]">How's your day going today?</span>
                            </div>
                            <div className="w-full flex justify-start mt-[10px]">
                                <Select className="w-[110px]" defaultValue="anyOne" options={postType} />
                            </div>
                            <br />
                            <div className="w-full">
                                <TextArea rows={2} />
                            </div>
                            <div className="w-full flex justify-end mt-[10px] flex-wrap">
                                <div className="w-fit flex justify-between text-[20px]">
                                    <PictureOutlined className="pr-[10px] text-green-500 cursor-pointer hover:scale-105 transition-all" onClick={() => onHandleClick()} />
                                    <SmileOutlined className="pr-[10px] text-yellow-500 cursor-pointer hover:scale-105 transition-all" onClick={() => onHandleClick()} />
                                </div>
                                <div>
                                    <button className="px-[10px] py-[5px] bg-[#9d4edd] rounded-[4px] text-white font-semibold hover:bg-[#c77dff]">
                                        Post
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[80%] mt-[10px]">
                        {array.map((_, index) => (
                            <div className="my-[10px]">
                                <PostCard />
                            </div>
                        ))}
                    </div>
                </Col>
                <Col xs={0} sm={0} md={4} lg={4} xl={4} className="h-[100vh] right-0 w-full fixed">
                </Col>
            </Row>
        </div>
    )
}

export default Home;