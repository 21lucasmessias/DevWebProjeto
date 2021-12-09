import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import ScreenTitle from '../../components/screenTitle/ScreenTitle'

import './styles.css'

export const Contact = () => {
    const navigate = useNavigate()

    const [name, nameSet] = useState({
        value: '',
        error: false
    })
    const [email, emailSet] = useState({
        value: '',
        error: false
    })
    const [subject, subjectSet] = useState({
        value: '',
        error: false
    })
    const [message, messageSet] = useState({
        value: '',
        error: false
    })

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const send = () => {
        if (!fieldsValid()) {
            alert('The form has problems.')
            return;
        }

        alert('Contact sent')
    }

    const fieldsValid = () => {
        nameSet({
            value: name.value,
            error: !!!name.value
        })

        emailSet({
            value: email.value,
            error: !validateEmail(email.value)
        })

        subjectSet({
            value: subject.value,
            error: !!!subject.value
        })

        messageSet({
            value: message.value,
            error: !!!message.value
        })

        return !!name.value && validateEmail(email.value) && !!subject.value && !!message.value
    }

    return (
        <div className='mainContainer'>
            <ScreenTitle
                title='Contact'
                breadcrumb={[
                    {
                        name: 'Home',
                        onClick: () => { navigate('/') }
                    },
                    {
                        name: 'Contact'
                    }
                ]}
            />

            <div className='contactContainer'>
                <div className='fields'>
                    <div className='fieldLine'>
                        <h2>Name</h2>
                        <input
                            className={name.error ? 'error' : ''}
                            placeholder='Name'
                            value={name.value}
                            onChange={(e) => nameSet({ value: e.target.value, error: false })}
                        />
                    </div>
                    <div className='fieldLine'>
                        <h2>Email</h2>
                        <input
                            className={email.error ? 'error' : ''}
                            placeholder='E-Mail'
                            type='email'
                            value={email.value}
                            onChange={(e) => emailSet({ value: e.target.value, error: false })}
                        />
                    </div>
                    <div className='fieldLine'>
                        <h2>Subject</h2>
                        <input
                            className={subject.error ? 'error' : ''}
                            placeholder='Subject'
                            value={subject.value}
                            onChange={(e) => subjectSet({ value: e.target.value, error: false })}
                        />
                    </div>
                    <div className='fieldLine'>
                        <h2>Message</h2>
                        <textarea
                            className={message.error ? 'error' : ''}
                            placeholder='Message'
                            value={message.value}
                            onChange={(e) => messageSet({ value: e.target.value, error: false })}
                        />
                    </div>
                </div>

                <div className='buttonsLine'>
                    <button onClick={send}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}
