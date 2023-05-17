import Input from '../../elements/input/Input'
import Label from '../../elements/label/Label'
import InputForm from '../../fragments/input_form/InputForm'

const FormRegister = () => {
    return (
        <>
            <div className="mx-5 px-3 w-fit border-green-500 border-1 rounded-md shadow-lg">
                <InputForm title={"fullname"}>
                    <Label>Fullname</Label>
                    <Input type={"text"}>Enter fullname</Input>
                </InputForm>

                <InputForm title={"email"}>
                    <Label>Email</Label>
                    <Input type={"email"}>Enter email</Input>
                </InputForm>

                <InputForm title={"password"}>
                    <Label>Password</Label>
                    <Input type={"password"}>Enter password</Input>
                </InputForm>
            </div>
        </>
    )
}

export default FormRegister