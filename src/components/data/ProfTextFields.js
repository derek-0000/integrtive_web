import React from 'react'
import Cookies from 'universal-cookie'
const cookies = new Cookies();
const data = cookies.getAll()

export const TextFields=[
    {
        containerClassName:'txt-name c-txt-field',
        className:'name txt-field',
        label:'Name',
        data:`${data.first_name}`
    },
    {
        containerClassName:'txt-name c-txt-field',
        className:'lastname txt-field',
        label:'Last Name',
        data:`${data.last_names}`
    },
    {
        containerClassName:'txt-id c-txt-field',
        className:'id txt-field',
        label:'ID',
        data:`${data.id}`
    },
]