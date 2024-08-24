import { Col, Input, Row } from "antd";
import PageHeader from "./PageHeader";
import VideoCard from "../components/VideoCard";
import { useEffect, useState } from "react";
import { searchVideos } from "../config/api/YoutubeApi";
import { SearchOutlined } from "@ant-design/icons";

function Video() {

    const [videos, setVideos] = useState([])
    const [search, setSearch] = useState("Doraemon thuyết minh")

    const fetchVideos = async () => {
        try {
            const res = await searchVideos(search);
            setVideos(res);
        } catch (error) {
            console.error('Error fetching videos', error);
        }
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        fetchVideos();
    }, []);

    const handleSearch = () => {
        fetchVideos();
    }


    return (
        <div className="h-[200vh] bg-theme-100">
            <PageHeader index={2} />
            <Row className="w-full flex justify-center absolute bg-theme-100">
                <Col xs={0} sm={0} md={4} lg={4} xl={4} className="h-[100vh] left-0 w-full fixed">

                </Col>
                <Col xs={24} sm={24} md={16} lg={16} xl={16} className="flex justify-center flex-wrap shadow-xl w-full relative">
                    <div className="w-[80%]">
                        <div className="text-white w-full flex justify-between text-[30px] font-semibold mt-[100px] mb-[20px] items-center">
                            Video
                            <div className="flex justify-center w-full items-center">
                                <div className="w-[65%] md:w-[50%] bg-white h-[50%] rounded-[25px] flex justify-between items-center">
                                    <div className="mx-[20px] flex justify-between w-full items-center">
                                        <Input className="w-full py-[5px]" variant="borderless" onChange={(event) => setSearch(event.target.value)} />
                                    </div>
                                </div>
                                <button className="sm:w-[35px] w-[30px] bg-white sm:h-[35px] h-[30px] ml-[10px] flex justify-center items-center rounded-[24px] hover:scale-110 transition-all" onClick={() => handleSearch(false)}>
                                    <SearchOutlined className="text-theme-300 sm:text-[25px] text-[20px]" />
                                </button>
                            </div>
                        </div>
                        {videos.map((value) => {
                            const { videoId, playlistId } = value.id;
                            const { title } = value.snippet;
                            return (
                                <div className="my-[10px]">
                                    <VideoCard url={`https://www.youtube.com/embed/${videoId ? videoId : playlistId}`} title={title} />
                                </div>
                            );
                        })}
                    </div>
                </Col>
                <Col xs={0} sm={0} md={4} lg={4} xl={4} className="h-[100vh] right-0 w-full fixed">
                </Col>
            </Row>
        </div>
    )
}

export default Video;