import { Col, Row } from "antd";
import PageHeader from "./PageHeader";
import ProductCard from "../components/ProductCard";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useEffect } from "react";

function Shop() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    const array = Array(10).fill(null);

    return (
        <div className="h-fit bg-theme-100 min-h-[100vh]">
            <PageHeader index={4} />
            <Row className="w-full flex justify-center absolute bg-theme-100">
                <Col xs={0} sm={0} md={4} lg={4} xl={4} className="h-[100vh] left-0 w-full fixed">
                </Col>
                <Col xs={24} sm={24} md={16} lg={16} xl={16} className="flex justify-center flex-wrap shadow-xl w-full relative">
                    <div className="w-[80%]">
                        <div className="text-white w-full flex justify-between text-[30px] font-semibold mt-[100px] mb-[20px] items-center">
                            Shop
                            <ShoppingCartOutlined />
                        </div>
                        <div className={`w-full py-[2px] mt-[10px] flex flex-wrap justify-between`}>
                            {array.map((_, index) => (
                                <div className="my-[10px] w-[48%]">
                                    <ProductCard />
                                </div>
                            ))}
                        </div>
                    </div>
                </Col>
                <Col xs={0} sm={0} md={4} lg={4} xl={4} className="h-[100vh] right-0 w-full fixed">
                </Col>
            </Row>
        </div>
    )
}

export default Shop;