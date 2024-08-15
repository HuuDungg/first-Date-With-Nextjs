import { Button, Modal, message, Form, Input } from "antd"
import { useState } from "react"
import { createUser } from "../../service/user.service"
interface myProps {
    loadUsers: () => void
}
const UserCreate = (props: myProps) => {
    const { loadUsers } = props
    const [isCreate, setIsCreate] = useState<boolean>(false)
    const [name, setName] = useState<string>()
    const [phoneNumber, setPhoneNumber] = useState<string>()
    const [password, setPassword] = useState<string>()
    const handleOk = async () => {
        await createUser(name, password, phoneNumber)
        setIsCreate(false)
        setName("")
        setPhoneNumber("")
        setPassword("")
        await loadUsers()
        message.success("Create susscessfuly")
    }

    const handleCancel = () => {
        setIsCreate(false)
    }

    return (
        <>
            <Button onClick={() => { setIsCreate(true) }} type="primary" className="btn">Create</Button>
            <Modal title="Form Create" open={isCreate} okText={'Add'} onOk={() => { handleOk() }} onCancel={() => { handleCancel() }}>
                <Form layout="vertical">
                    <Form.Item label="Phone number">
                        <Input onChange={(event) => { setPhoneNumber(event.target.value) }} placeholder="input phone number" />
                    </Form.Item>
                    <Form.Item label="Name">
                        <Input onChange={(event) => { setName(event.target.value) }} placeholder="input name" />
                    </Form.Item>
                    <Form.Item label="Password">
                        <Input.Password onChange={(event) => { setPassword(event.target.value) }} placeholder="input password" />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default UserCreate