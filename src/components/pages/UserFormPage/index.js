import React from 'react';

import {PageTemplate,UserFormTemplate ,Header,UsersRegForm,Footer} from 'components';



export default function UserFormPage() {
    return (
        <UserFormTemplate   header={<Header/>} content={<UsersRegForm/>} footer={<Footer/>}>
            
        </UserFormTemplate>
    )
}


