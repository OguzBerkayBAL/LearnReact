import React from 'react'
import { useFormik } from 'formik'
import { registerFormSchemas } from '../schemas/RegisterFormSchemas';

export const RegisterForm = () => {

    const submit = (values, action) => {
        console.log(values);
        console.log(action);
        setTimeout(() => {
            action.resetForm();
        }, 3000);
    }

    const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
            term: '',
        },
        validationSchema: registerFormSchemas,
        onSubmit : submit
    });

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='inputDiv'>
                    <label>Email</label>
                    <input type="text" id='email' placeholder='Email Giriniz' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                    {touched.email && errors.email && <p className='inputError'>{errors.email}</p>}
                </div>

                <div className='inputDiv'>
                    <label>Yaş</label>
                    <input type="number" id='age' placeholder='Yaşınızı Griniz' value={values.age} onChange={handleChange} onBlur={handleBlur} />
                    {touched.age && errors.age && <p className='inputError'>{errors.age}</p>}
                </div>

                <div className='inputDiv'>
                    <label>Şifre</label>
                    <input type="password" id='password' placeholder='Şifrenizi Griniz' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                    {touched.password && errors.password && <p className='inputError'>{errors.password}</p>}
                </div>

                <div className='inputDiv'>
                    <label>Şifre Tekrarı</label>
                    <input type="password" id='confirmPassword' placeholder='Şifrenizi Yeniden Griniz' value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} />
                    {touched.confirmPassword && errors.confirmPassword && <p className='inputError'>{errors.confirmPassword}</p>}
                </div>

                <div className='inputDiv'>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                        <input style={{ width: '20px', height: '12px' }} type="checkbox" id='term' value={values.term} onChange={handleChange} onBlur={handleBlur} />
                        <label>Kullanıcı Sözleşmesini Kabul Ediyorum</label>
                    </div>
                    {touched.term && errors.term && <p className='inputError'>{errors.term}</p>}
                </div>

                <button type='submit' className='saveButton'>Kaydet</button>
            </form>
        </div>
    )
}
