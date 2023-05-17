import Input from '../../elements/input/Input'
import Label from '../../elements/label/Label'
import InputForm from '../../fragments/input_form/InputForm'

const FormLogin = () => {
    return (
        <>
            <div className="px-3 w-fit border-green-500 border-1 rounded-md shadow-lg">
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

export default FormLogin