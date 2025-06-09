import React from 'react'
import { Toast } from 'react-vant'
import { ArrowLeft, Fail, QuestionO, Success } from '@react-vant/icons';


function VantToast(message, condition) {
    return (Toast({
        message: message,
        icon: condition === "s" ? <Success /> : condition === "f" ? <Fail /> : <QuestionO />,
        className: 'custom-toast',
    })

    )
}

export default VantToast