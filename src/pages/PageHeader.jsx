import { AntDesignOutlined, BellOutlined, HomeOutlined, LogoutOutlined, MessageFilled, RollbackOutlined, SearchOutlined, ShopOutlined, TeamOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Badge, Input } from "antd";
import { Link } from "react-router-dom";
import { useAuth } from "../config/AuthContext";

function PageHeader({ index }) {

    const { handleLogout } = useAuth();

    const [navBar, setNavBar] = useState(false);
    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState(false);
    const isHome = index === 1;

    const handleSearch = () => {
        setSearch(true);
        setMenu(false);
        setNavBar(false);
    }

    return (
        <div className="flex justify-center flex-wrap absolute w-full z-10">
            <div className={`w-full h-[80px] bg-gradient-to-r from-theme-300 via-theme-200 to-theme-200 flex justify-between fixed top-0 z-10 items-center ${search ? "" : "hidden"}`}>
                <button className="text-white text-[30px] font-bold ml-[20px] flex items-center"><AntDesignOutlined /> <div className="sm:flex hidden">AntD</div></button>
                <div className="flex justify-center w-full items-center">
                    <div className="w-[65%] md:w-[50%] bg-white h-[50%] rounded-[25px] flex justify-between items-center">
                        <div className="mx-[20px] flex justify-between w-full items-center">
                            <SearchOutlined className="text-theme-300 text-[20px]" />
                            <Input className="w-full sm:py-[10px]" variant="borderless" />
                        </div>
                    </div>
                    <button className="sm:w-[35px] w-[30px] bg-white sm:h-[35px] h-[30px] ml-[10px] flex justify-center items-center rounded-[24px] hover:scale-110 transition-all" onClick={() => setSearch(false)}>
                        <RollbackOutlined className="text-theme-300 sm:text-[25px] text-[20px]" />
                    </button>
                </div>
            </div>
            <div className={`w-full h-[80px] bg-gradient-to-r from-theme-300 via-theme-200 to-theme-200 flex justify-center fixed top-0 ${isHome ? "" : "hidden md:flex"}`}>
                <div className="xl:w-[70%] lg:w-[80%] md:w-[90%] w-[100%] flex justify-between items-center">
                    <Link to={"/Home"} className="text-white text-[30px] font-bold md:ml-0 ml-[20px]"><AntDesignOutlined /> AntD</Link>
                    <div className="md:flex hidden justify-start w-[60%]">
                        <Link to={"/Home"} className={`py-[20px] text-white text-[30px] lg:px-[30px] px-[20px] cursor-pointer mx-[6px] rounded-[4px] 
                                    hover:bg-theme-600 hover:scale-110 transition-all hover:shadow-xl
                                    ${index === 1 ? "scale-105 bg-theme-600 shadow-xl" : ""}`}>
                            <HomeOutlined />
                        </Link>
                        <Link to={"/Video"} className={`py-[20px] text-white text-[30px] lg:px-[30px] px-[20px] cursor-pointer mx-[6px] rounded-[4px]
                                    hover:bg-theme-600 hover:scale-110 transition-all hover:shadow-xl
                                    ${index === 2 ? "scale-105 bg-theme-600 shadow-xl" : ""}`}>
                            <VideoCameraOutlined />
                        </Link>
                        <Link to={"/Friends"} className={`py-[20px] text-white text-[30px] lg:px-[30px] px-[20px] cursor-pointer mx-[6px] rounded-[4px]
                                    hover:bg-theme-600 hover:scale-110 transition-all hover:shadow-xl
                                    ${index === 3 ? "scale-105 bg-theme-600 shadow-xl" : ""}`}>
                            <Badge dot={true} className=""><TeamOutlined className="text-white text-[30px]" /></Badge>
                        </Link>
                        <Link to={"/Shop"} className={`py-[20px] text-white text-[30px] lg:px-[30px] px-[20px] cursor-pointer mx-[6px] rounded-[4px]
                                    hover:bg-theme-600 hover:scale-110 transition-all hover:shadow-xl
                                    ${index === 4 ? "scale-105 bg-theme-600 shadow-xl" : ""}`}>
                            <ShopOutlined />
                        </Link>
                        <Link to={"/Notification"} className={`py-[20px] text-white text-[30px] lg:px-[30px] px-[20px] cursor-pointer mx-[6px] rounded-[4px]
                                    hover:bg-theme-600 hover:scale-110 transition-all hover:shadow-xl
                                    ${index === 5 ? "scale-105 bg-theme-600 shadow-xl" : ""}`}>
                            <Badge dot={true}><BellOutlined className="text-white text-[30px]" /></Badge>
                        </Link>
                    </div>
                    <div className="bg-white h-[50%] rounded-[25px] lg:flex justify-center items-center hidden mr-[10px]">
                        <div className="mx-[20px] flex justify-between">
                            <SearchOutlined className="text-theme-300 text-[20px]" />
                            <Input className="w-full" variant="borderless" />
                        </div>
                    </div>
                    <Link to={"/Profile"} className={`py-[20px] text-white text-[30px] px-[30px] cursor-pointer rounded-[4px] md:flex hidden
                                    hover:bg-theme-600 hover:scale-110 transition-all hover:shadow-xl
                                    ${index === 6 ? "bg-theme-600 shadow-xl" : ""}
                                    ${navBar ? "bg-theme-600 shadow-none py-[30px]" : ""}`}
                        onMouseEnter={() => setNavBar(true)}>
                        <Badge dot={true}>
                            <UserOutlined className="text-white text-[30px]" />
                        </Badge>
                    </Link>
                    <div className={`py-[20px] text-white text-[30px] px-[30px] cursor-pointer rounded-[4px] flex md:hidden
                                    ${menu ? "bg-theme-200 shadow-none py-[30px]" : ""}`}
                        onClick={() => setMenu(!menu)}>
                        <Badge dot={true}>
                            <UserOutlined className="text-white text-[30px]" />
                        </Badge>
                    </div>
                </div>
            </div>
            {navBar && <div className="xl:w-[70%] lg:w-[80%] md:w-[90%] w-[100%] flex justify-end fixed top-[80px]">
                <div className="w-[20%] min-w-[200px] h-fit bg-theme-600 rounded-[8px] shadow-xl rounded-t-none ease-in-out transition-all" onMouseLeave={() => setNavBar(false)}>
                    <button className="w-full text-white py-[20px] text-[16px] flex justify-center font-bold items-center lg:hidden
                                    hover:bg-theme-300"
                        onClick={() => handleSearch()}>
                        <SearchOutlined className="mr-[4px] text-[20px]" /> Search
                    </button>
                    <button className="w-full text-[#094074] py-[20px] text-[16px] flex justify-center font-bold items-center rounded-b-[8px]
                                    hover:bg-theme-300">
                        <MessageFilled className="mr-[4px]" /> <Badge dot={true}>Message</Badge>
                    </button>
                    <Link to={"/Profile"} className="w-full text-white py-[20px] text-[16px] flex justify-center font-bold items-center
                                    hover:bg-theme-300">
                        <UserOutlined className="mr-[4px]" /> Account
                    </Link>
                    <button className="w-full text-black py-[20px] text-[16px] flex justify-center font-bold items-center rounded-b-[8px]
                                    hover:bg-theme-300"
                                    onClick={handleLogout}>
                        <LogoutOutlined className="mr-[4px]" /> Log Out
                    </button>
                </div>
            </div>}
            {menu && <div className="lg:w-[70%] md:w-[90%] w-[100%] flex justify-end z-10 fixed top-[80px]">
                <div className="w-[20%] min-w-[200px] h-fit bg-theme-200 rounded-[8px] shadow-xl rounded-t-none ease-in-out transition-all" onMouseLeave={() => setNavBar(false)}>
                    <button className="w-full text-white py-[20px] text-[16px] flex justify-center font-bold items-center md:hidden
                                    hover:bg-theme-300"
                        onClick={() => handleSearch()} >
                        <SearchOutlined className="mr-[4px] text-[20px]" /> Search
                    </button>
                    <button className="w-full text-[#a6e1fa] py-[20px] text-[16px] flex justify-center font-bold items-center rounded-b-[8px]
                                    hover:bg-theme-300">
                        <MessageFilled className="mr-[4px]" /> <Badge dot={true} className="text-[#a6e1fa] text-[16px]">Message</Badge>
                    </button>
                    <Link to={"/Profile"} className="w-full text-white py-[20px] text-[16px] flex justify-center font-bold items-center
                                    hover:bg-theme-300">
                        <UserOutlined className="mr-[4px]" /> Account
                    </Link>
                    <button className="w-full text-red-500 py-[20px] text-[16px] flex justify-center font-bold items-center rounded-b-[8px]
                                    hover:bg-theme-300"
                                    onClick={handleLogout}>
                        <LogoutOutlined className="mr-[4px]" /> Log Out
                    </button>
                </div>
            </div>}
            <div className={`w-full ${isHome ? "top-[80px]" : "top-0"} fixed md:hidden bg-theme-100`}>
                <div className="h-[50px] sm:h-[60px] flex justify-center items-end">
                    <div className="w-[80%] flex justify-between items-center sm:text-[30px]">
                        <Link to={"/Home"}>
                            <HomeOutlined className={`${index === 1 ? "text-theme-300" : "text-white"} text-[20px] hover:text-theme-300 cursor-pointer p-[10px]`} />
                            <hr className={`${index === 1 ? "" : "hidden"} border-b-[3px] border-theme-300`} />
                        </Link>
                        <Link to={"/Video"}>
                            <VideoCameraOutlined className={`${index === 2 ? "text-theme-300" : "text-white"} text-[20px] hover:text-theme-300 cursor-pointer p-[10px]`} />
                            <hr className={`${index === 2 ? "" : "hidden"} border-b-[3px] border-theme-300`} />
                        </Link>
                        <Badge dot={true}>
                            <Link to={"/Friends"}>
                                <TeamOutlined className={`${index === 3 ? "text-theme-300" : "text-white"}  text-[20px] hover:text-theme-300 cursor-pointer p-[10px]`} />
                                <hr className={`${index === 3 ? "" : "hidden"} border-b-[3px] border-theme-300`} />
                            </Link>
                        </Badge>
                        <Link to={"/Shop"}>
                            <ShopOutlined className={`${index === 4 ? "text-theme-300" : "text-white"} text-[20px] hover:text-theme-300 cursor-pointer p-[10px]`} />
                            <hr className={`${index === 4 ? "" : "hidden"} border-b-[3px] border-theme-300`} />
                        </Link>
                        <Badge dot={true}>
                            <Link to={"/Notification"}>
                                <BellOutlined className={`${index === 5 ? "text-theme-300" : "text-white"} text-[20px] hover:text-theme-300 cursor-pointer p-[10px]`} />
                                <hr className={`${index === 5 ? "" : "hidden"} border-b-[3px] border-theme-300`} />
                            </Link>
                        </Badge>
                    </div>
                </div>
                <hr className="border-t-[2px] border-theme-300" />
            </div>
        </div>
    )
}

export default PageHeader;