import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup"

const initialValues = {
    name: '',
    email: '',
    channel: '',
}
const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
}
const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    channel: Yup.string().required('Required')
})

const YoutubeForm = () => {
    return (
        <div className="h-screen px-4 lg:px-0 ">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
                <Form className="flex flex-col mt-20 lg:w-96 shadow-lg mx-auto py-10 px-10 rounded-xl">
                    <h2 className="text-3xl text-[#333] font-sans font-bold text-center mb-6">Registration Form</h2>

                    {/*-------- Name --------*/}
                    <label htmlFor="name" className="font-semibold mb-2">Name</label>
                    {/* input field */}
                    <Field type="text" id="name" name="name" className='input' />
                    {/* error message */}
                    <p className="error"><ErrorMessage name="name" /></p>

                    {/*-------- Email --------*/}
                    <label htmlFor="email" className="font-semibold my-2">Email</label>
                    {/* input */}
                    <Field type="email" id="email" name="email" className='input' />
                    {/* error */}
                    <p className="error"><ErrorMessage name="email" /></p>

                    {/*-------- Channel --------*/}
                    <label htmlFor="channel" className="font-semibold my-2">Channel</label>
                    {/* input */}
                    <Field type="text" id="channel" name="channel" className='input' />
                    {/* error */}
                    <p className="error"><ErrorMessage name="channel" /></p>

                    {/* Button */}
                    <button type="submit" className="btn mt-4">Submit</button>
                </Form>

            </Formik>
        </div>
    );
};

export default YoutubeForm;