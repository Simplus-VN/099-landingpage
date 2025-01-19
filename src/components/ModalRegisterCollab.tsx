import {Button, DatePicker, Form, Input, Modal, App} from 'antd';
import {useState } from 'react';
import {FORM_RULES} from "../utils/constants.ts";
import {registerCollabApi} from "../apis/registerCollabApi.ts";
import dayjs from "dayjs";

interface ModalRegisterCollabProps {
    isOpen: boolean;
    setIsOpen: any;
}

function ModalRegisterCollab(props: ModalRegisterCollabProps) {
    const {isOpen, setIsOpen} = props
    const [isSending, setIsSending] = useState(false)
    const {message} = App.useApp();
    const [registerCollabForm] = Form.useForm()
    const handleCloseModal = () => {
        registerCollabForm.resetFields()
        setIsOpen(false)
    }
    const handleSendFormRegisterCollab = async () => {
        setIsSending(true)
        try {
            const formValues =  registerCollabForm.getFieldsValue()
            const dobFormatted = formValues?.dob ? dayjs(formValues.dob).format("DD/MM/YYYY") : "";
            await registerCollabApi.sendTicket({
                name: formValues?.name,
                email: formValues?.email,
                phone_number: formValues?.phone,
                title: 'Ticket Đăng ký CTV Gmobile',
                description: `Họ Tên: ${formValues?.name}<br>Ngày sinh: ${dobFormatted}<br>Email: ${formValues?.email}<br>Điện thoại: ${formValues?.phone}<br>Ghi chú: ${formValues?.note}`,
            })
            registerCollabForm.resetFields()
            message.success('Đăng ký CTV thành công. Chúng tôi sẽ liên hệ với bạn sớm nhất có thể!')
            handleCloseModal()
        } catch {
            message.error(
                'Đã có lỗi trong quá trình tạo ticket đăng ký CTV. Vui lòng thử lại sau!'
            )
        } finally {
            setIsSending(false)

        }
    }

    return (
        <Modal
            open={isOpen}
            footer={null}
            centered={true}
            onCancel={handleCloseModal}
        >
            <p className='md:text-[28px] text-2xl md:leading-[36px] mb-3 font-semibold'>Đăng ký Cộng Tác Viên</p>
            <p className='text-secondary text-sm md:text-base font-medium mb-6'>Điền thông tin bên dưới để đăng ký CTV của Simplus</p>
            <Form
                layout='vertical'
                form={registerCollabForm}
                onFinish={handleSendFormRegisterCollab}
            >
                <Form.Item
                    label='Họ & Tên'
                    name='name'
                    rules={FORM_RULES.NAME}
                >
                    <Input size='large' placeholder='Nhập đầy đủ họ & tên của bạn'/>
                </Form.Item>
                <Form.Item
                    label='Ngày sinh'
                    name='dob'
                    rules={FORM_RULES.DOB}
                >
                    <DatePicker format='DD/MM/YYYY' size='large' placeholder='dd/mm/yyyy' className='w-full' />
                </Form.Item>
                <Form.Item
                    label='Email'
                    name='email'
                    rules={FORM_RULES.EMAIL}
                >
                    <Input size='large' placeholder='Nhập địa chỉ email của bạn' />
                </Form.Item>

                <Form.Item
                    label='Số điện thoại'
                    name='phone'
                    rules={FORM_RULES.PHONE}
                >
                    <Input size='large' placeholder='Nhập số điện thoại' />
                </Form.Item>
                <Form.Item
                    label='Ghi chú'
                    name='note'
                >
                    <Input.TextArea placeholder='Nhập ghi chú của bạn'/>
                </Form.Item>
                <Form.Item>
                    <Button loading={isSending} type='primary' htmlType='submit' className='w-full h-12 text-white flex items-center justify-center'>Đăng ký</Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default ModalRegisterCollab;
