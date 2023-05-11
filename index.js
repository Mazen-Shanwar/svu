





const translation = {
    English:{
        Sign_In : "Sign In",
        Login : 'Login',
        Don_t_have_a_account : 't have a account',
        REGISTER_HERE : 'REGISTER HERE',
        Home : 'Home',
        Translation : 'Translation',
        Questionnaire_repository  :'Questionnaire repository'
    },
    Arabic:{
        Sign_In : "تسجيل الدخول",
        Login : 'تسجيل',
        REGISTER_HERE : 'سجل من هنا',
        Don_t_have_a_account : 'لا تملك حساب',
        Home : 'الصفحةالرئيسية',
        Translation : 'الترجمة',
        Questionnaire_repository : 'مستودع الاستبيانات'
    }
}




let setlanguage = function(Langauge){
    let elements = document.querySelectorAll("[data-word]");
    elements.forEach((element) => {
        let translationkey = element.getAttribute("data-word");
        element.textContent = translation[Langauge][translationkey];
    })
}

function change_word(value){
    if(value === "English")
    {
        document.dir = 'ltr' ;

        let input_login = document.querySelectorAll('.div_login_intro_content div input')

        let div_register_intro_content = document.querySelectorAll('.div_register_intro_content input')

        if(div_register_intro_content.length >  0)
        {
            div_register_intro_content[0].placeholder = "First name";
            div_register_intro_content[1].placeholder = " Last name";
            div_register_intro_content[2].placeholder = " Country";
            div_register_intro_content[3].placeholder = " City";
            div_register_intro_content[4].placeholder = " Gender";
            div_register_intro_content[5].placeholder = " Age";
            div_register_intro_content[6].placeholder = " Langauge";
            div_register_intro_content[7].placeholder = " Education level";
            div_register_intro_content[8].placeholder = "Email";
            div_register_intro_content[9].placeholder = " Password";



            div_register_intro_content[0].dir = 'ltr'
            div_register_intro_content[1].dir = 'ltr'
            div_register_intro_content[2].dir = 'ltr'
            div_register_intro_content[3].dir = 'ltr'
            div_register_intro_content[4].dir = 'ltr'
            div_register_intro_content[5].dir = 'ltr'
            div_register_intro_content[6].dir = 'ltr'
            div_register_intro_content[7].dir = 'ltr'
            div_register_intro_content[8].dir = 'ltr'
            div_register_intro_content[9].dir = 'ltr'
        }

        if(input_login.length > 0)
        {
            input_login[0].placeholder = "Username";
            input_login[1].placeholder = "Password";

            input_login[0].dir = 'ltr'
            input_login[1].dir = 'ltr'
        }

        localStorage.setItem("langauge" ,value)
      }
    else{
        document.dir = 'rtl';
        // setrtl(true)


        let input_login = document.querySelectorAll('.div_login_intro_content input')

        let div_register_intro_content = document.querySelectorAll('.div_register_intro_content input')


        if(div_register_intro_content.length >  0)
        {
            div_register_intro_content[0].placeholder = "الاسم الاول";
            div_register_intro_content[1].placeholder = "الاسم الاخير";
            div_register_intro_content[2].placeholder = " البلدة";
            div_register_intro_content[3].placeholder = " المدينة";
            div_register_intro_content[4].placeholder = " الجنس";
            div_register_intro_content[5].placeholder = " العمر";
            div_register_intro_content[6].placeholder = " اللغة";
            div_register_intro_content[7].placeholder = " المستوى التعليمي";
            div_register_intro_content[8].placeholder = "الايميل";
            div_register_intro_content[9].placeholder = "كلمة السر";
    
    
    
            div_register_intro_content[0].dir = 'rtl';
            div_register_intro_content[1].dir = 'rtl';
            div_register_intro_content[2].dir = 'rtl';
            div_register_intro_content[3].dir = 'rtl';
            div_register_intro_content[4].dir = 'rtl';
            div_register_intro_content[5].dir = 'rtl';
            div_register_intro_content[6].dir = 'rtl';
            div_register_intro_content[7].dir = 'rtl';
            div_register_intro_content[8].dir = 'rtl';
            div_register_intro_content[9].dir = 'rtl';
    
        }

        



        if(input_login.length > 0)
        {
        input_login[0].placeholder = "اسم المستخدم ";
        input_login[1].placeholder = "كلمة السر";

        input_login[0].dir = 'rtl';
        input_login[1].dir = 'rtl';
        }


        localStorage.setItem("langauge" ,value)
    }


    setlanguage(value);
}





if(localStorage.getItem('langauge') == 'English')
{
    change_word('English')
}
else if(localStorage.getItem('langauge') == 'Arabic')
{
    change_word('Arabic')
}










