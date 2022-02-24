import Container from "../Container";

const ContactMe = () => {
    return (
        <Container
            id="contact"
            className="w-full h-[30vh] bg-primary text-white text-center flex flex-col justify-evenly"
        >
            <h3 className="text-3xl font-bold">Contact Me</h3>
            <a className="mb-6" href="mailto: surendranjagadeesh@gmail.com">
                Email: surendranjagadeesh@gmail.com
            </a>
        </Container>
    );
};

export default ContactMe;
