import { Button, Toast, ToastBody } from "reactstrap"


const SucessToast = ({ toastIsOpen, setToastIsOpen }) => {

    return (
        <Toast
            className="bg-success text-white fixed-bottom ms-auto me-4 mb-4"
            isOpen={toastIsOpen}

        >
            <ToastBody
                className="d-flex justify-content-between">
                Produto adicionado ao carrinho.
                <Button
                    close
                    className="btn-close-white"
                    onClick={() => setToastIsOpen(false)}
                >
                </Button>
            </ToastBody>
        </Toast>
    );
};

export default SucessToast;