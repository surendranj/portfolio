import Image from "next/image";
import logo2 from "../../../public/images/logo2.png";

const Logo = () => {
    return (
        <div className="max-w-[45px] h-full flex justify-center items-center">
            <Image src={logo2} alt="" />
        </div>
    );
};

export default Logo;
