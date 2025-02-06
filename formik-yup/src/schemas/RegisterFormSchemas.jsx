import * as yup from 'yup';

export const registerFormSchemas = yup.object().shape({
    email: yup.string().email('Geçerli bir email adresi giriniz').required('Email alanı zorunludur'),

    age: yup.number().positive('Yaş alanı pozitif bir sayı olmalıdır').integer("Yaşınız Tam Sayı Olmalıdır").required('Yaş alanı zorunludur'),

    password: yup.string().required('Şifre alanı zorunludur').min(6, 'Şifreniz en az 6 karakter olmalıdır'),

    confirmPassword: yup.string().required('Şifre Doğrulama Alanı Zorunludur').oneOf([yup.ref('password'), yup.password],'Şifreleriniz Uyuşmuyor'),

    term: yup.boolean().oneOf([true], 'Kullanıcı sözleşmesini kabul etmelisiniz').required('Kullanıcı sözleşmesini kabul etmelisiniz')
});