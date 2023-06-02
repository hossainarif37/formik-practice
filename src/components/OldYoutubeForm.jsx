import { useFormik } from "formik";
import * as Yup from "yup"

const OldYoutubeForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            channel: '',
        },
        onSubmit: values => {
            console.log(values);
            formik.resetForm();
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            channel: Yup.string().required('Required')
        })

    })


    return (
        <div className="h-screen px-4 lg:px-0">
            <form onSubmit={formik.handleSubmit} className="flex flex-col mt-20 lg:w-96 shadow-lg mx-auto py-10 px-10 rounded-xl">
                <h2 className="text-3xl text-[#333] font-sans font-bold text-center mb-6">Registration Form</h2>
                {/* Name */}
                <label htmlFor="name" className="font-semibold mb-2">Name</label>
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} type="text" id="name" name="name" className="input" />
                {/* name filed error message */}
                {formik.touched.name && formik.errors.name ? <p className="error">{formik.errors.name}</p> : null}

                {/* Email */}
                <label htmlFor="email" className="font-semibold my-2">Email</label>
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="email" id="email" name="email" className="input" />
                {/* email field error message */}
                {formik.touched.email && formik.errors.email ? <p className="error">{formik.errors.email}</p> : null}


                {/* Channel */}
                <label htmlFor="channel" className="font-semibold my-2">Channel</label>
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.channel} type="text" id="channel" name="channel" className="input" />
                {/* email field error message */}
                {formik.touched.channel && formik.errors.channel ? <p className="error">{formik.errors.channel}</p> : null}


                {/* Button */}
                <button type="submit" className="btn mt-4">Submit</button>
            </form>

        </div>
    );
};

export default OldYoutubeForm;