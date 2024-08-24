import { AntDesignOutlined, PhoneOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import { useState } from "react";
import { useAuth } from "../config/AuthContext";

function Login() {

    const { handleLogin } = useAuth();

    const [userInfo, setUserInfo] = useState({
        username: "",
        password: "",
        confirm: "",
    });
    const [state, setState] = useState(false);

    return (
        <div className="flex justify-center bg-theme-100 h-screen items-center">
            <div className="bg-theme-200 rounded-[24px] 2xl:w-[60%] w-[80%] sm:h-[70%] h-fit shadow-black shadow-2xl flex justify-start">
                <div className={`bg-white h-fit md:w-[50%] w-full z-100 rounded-[24px] shadow-black shadow-xl ${state ? "md:animate-slideROut" : "md:animate-slideRIn"}`}>
                    <div className="sm:p-[60px] p-[20px]">
                        <div className="w-full flex justify-start font-sans text-[32px] sm:text-[40px] font-bold text-theme-300 transition-all">{state ? "Sign Up" : "Sign In"}</div>
                        <div className="w-full text-theme-300 flex justify-start text-[16px] sm:text-[20px]">Stay Connected with Friends and Family</div>
                        <div className="w-full flex justify-start sm:mt-[40px] md:mt-[120px] mt-[20px] sm:h-[150px] md:h-[250px] h-fit sm:mb-[80px] md:mb-0">
                            <Form
                                name="basic"
                                labelCol={{
                                    span: 6,
                                }}
                                wrapperCol={{
                                    span: 16,
                                }}
                                style={{
                                    maxWidth: 600,
                                }}
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={() => { }}
                                onFinishFailed={() => { }}
                                autoComplete="off"
                                className="w-full"
                            >
                                <Form.Item
                                    label={<div className="text-theme-300 font-bold font-sans lg:text-[14px] md:text-[10px] text-[14px]">Username</div>}
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your username!',
                                        },
                                    ]}
                                >
                                    <Input onChange={(event) => setUserInfo({ ...userInfo, username: event.target.value })} />
                                </Form.Item>

                                <Form.Item
                                    label={<div className="text-theme-300 font-bold font-sans lg:text-[14px] md:text-[10px] text-[14px]">Password</div>}
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                >
                                    <Input.Password onChange={(event) => setUserInfo({ ...userInfo, password: event.target.value })} />
                                </Form.Item>

                                {state ? (
                                    <Form.Item
                                        label={<div className="text-theme-300 font-bold font-sans lg:text-[14px] md:text-[10px] text-[14px]">Confirm</div>}
                                        name="confirm"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please confirm your password!',
                                            },
                                        ]}
                                    >
                                        <Input.Password onChange={(event) => setUserInfo({ ...userInfo, confirm: event.target.value })} />
                                    </Form.Item>
                                ) : (<div></div>)}

                                <Form.Item
                                    wrapperCol={{
                                        offset: 0,
                                        span: 16,
                                    }}
                                >
                                    <button className="bg-theme-300 font-bold rounded-[10px] hover:scale-105 transition-all">
                                        <div className="py-[10px] px-[20px] text-white" onClick={() => { state ? handleLogin(userInfo) : handleLogin(userInfo) }}>
                                            {state ? "SignUp" : "Login"}
                                        </div>
                                    </button>
                                </Form.Item>
                            </Form>
                        </div>
                        <div className="w-full md:hidden flex pb-[20px] justify-center">
                            <div className="flex justify-start text-theme-300">
                                <div>{state ? "Already" : "Do not"} have an account?</div>
                                <button className="ml-[10px] text-theme-300 cursor-pointer decoration-inherit" onClick={() => setState(!state)}>{!state ? "Sign Up" : "Sign In"}</button>
                            </div>
                        </div>
                        <div className="w-full flex justify-center text-[30px]">
                            <AntDesignOutlined className="text-theme-300 hover:text-theme-400" />
                        </div>
                        <a className="w-full flex justify-center mt-[10px]" href="https://ant.design/">
                            <div className="text-theme-300 hover:text-theme-400">
                                Made with AntDesign
                            </div>
                        </a>
                    </div>
                </div>
                <div className={`h-full md:w-[50%] md:flex hidden ${state ? "md:animate-slideLOut" : "md:animate-slideLIn"}`}>
                    <div className="p-[40px] flex flex-wrap">
                        <div className="text-white font-sans lg:text-[80px] md:text-[60px] text-[40px] font-bold text-left h-[400px]">
                            <div className="h-full flex justify-start">
                                {state ? "Join Us Today" : "Welcome"}
                            </div>
                        </div>
                        <div className="w-full flex justify-start">
                            <button className="bg-theme-300 font-bold rounded-[10px] hover:scale-105 transition-all">
                                <div className="py-[10px] px-[20px] text-white">
                                    Contact Us <PhoneOutlined />
                                </div>
                            </button>
                        </div>
                        <div className="w-full pt-[100px]">
                            <div className="flex justify-start text-white">
                                <div>{state ? "Already" : "Do not"} have an account?</div>
                                <button className="ml-[10px] text-[#90e0ef] hover:text-theme-300 cursor-pointer decoration-inherit" onClick={() => setState(!state)}>{!state ? "Sign Up" : "Sign In"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
