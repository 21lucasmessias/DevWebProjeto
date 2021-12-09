import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import ScreenTitle from '../../components/screenTitle/ScreenTitle'

import './styles.css'

export const Register = () => {
    const navigate = useNavigate()

    const [addressDisabled, addressDisabledSet] = useState(true)

    const [name, nameSet] = useState({
        value: '',
        error: false
    })

    const [email, emailSet] = useState({
        value: '',
        error: false
    })
    const [cpf, cpfSet] = useState({
        value: null,
        error: false
    })

    const [cep, cepSet] = useState({
        value: null,
        error: false
    })

    const [street, streetSet] = useState({
        value: '',
        error: false
    })

    const [neighbour, neighbourSet] = useState({
        value: '',
        error: false
    })

    const [city, citySet] = useState({
        value: '',
        error: false
    })

    const [uf, ufSet] = useState({
        value: '',
        error: false
    })

    const [number, numberSet] = useState({
        value: null,
        error: false
    })

    const [birthdate, birthdateSet] = useState({
        value: '',
        error: false
    })

    const [password, passwordSet] = useState({
        value: '',
        error: false
    })

    useEffect(() => {
        fillCep()
    }, [cep])

    const fillCep = () => {
        let validacep = /^[0-9]{8}$/;

        if (validacep.test(cep.value)) {
            fetch(`https://viacep.com.br/ws/${cep.value}/json/`, {
                method: 'GET'
            }).then((res) => {
                res.json().then((data) => {
                    if (!data.erro) {
                        addressDisabledSet(true)
                        streetSet({
                            value: data.logradouro,
                            error: false
                        })
                        neighbourSet({
                            value: data.bairro,
                            error: false
                        })
                        citySet({
                            value: data.localidade,
                            error: false
                        })
                        ufSet({
                            value: data.uf,
                            error: false
                        })
                    } else {
                        addressDisabledSet(false)
                    }
                }).catch((err) => {
                    console.log(err)
                    addressDisabledSet(false)
                })
            }).catch((err) => {
                console.log(err)
                addressDisabledSet(false)
            })
        }
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const validateBirthdate = (birthdate) => {
        return /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$|(?:(?:1[6-9]|[2-9]\d)?\d{2})(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\5(?:0?[1-9]|1\d|2[0-8])$|^(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(\/|-|\.)0?2\6(29)$|^(?:(?:1[6-9]|[2-9]\d)?\d{2})(?:(?:(\/|-|\.)(?:0?[1,3-9]|1[0-2])\8(?:29|30))|(?:(\/|-|\.)(?:0?[13578]|1[02])\9(?:31)))$/.test(birthdate)
    }

    const validateCpf = (cpf) => {
        let aux = cpf.toString().split('')
        let sum = Array(9).fill(0).reduce((acc, cur, index) => {
            return acc = acc + parseInt(aux[index]) * (10 - index)
        }, 0)

        let firstValidationDigit = 11 - (sum % 11)
        firstValidationDigit = firstValidationDigit < 10 ? firstValidationDigit : 0

        sum = Array(10).fill(0).reduce((acc, cur, index) => {
            return acc = acc + parseInt(aux[index]) * (11 - index)
        }, 0)

        let secondValidationDigit = 11 - (sum % 11)
        secondValidationDigit = secondValidationDigit < 10 ? secondValidationDigit : 0

        return parseInt(aux[9]) === firstValidationDigit && parseInt(aux[10]) === secondValidationDigit
    }

    const send = () => {
        if (!fieldsValid()) {
            alert('The form has problems.')
            return;
        }

        alert('Register sucessfull')
    }

    const fieldsValid = () => {
        nameSet({
            value: name.value,
            error: !!!name.value
        })

        cpfSet({
            value: cpf.value,
            error: !(/^[0-9]{11}$/.test(cpf.value) && validateCpf(cpf.value))
        })

        emailSet({
            value: email.value,
            error: !validateEmail(email.value)
        })

        streetSet({
            value: street.value,
            error: !!!street.value
        })

        neighbourSet({
            value: neighbour.value,
            error: !!!neighbour.value
        })

        citySet({
            value: city.value,
            error: !!!city.value
        })

        ufSet({
            value: uf.value,
            error: !!!uf.value
        })

        numberSet({
            value: number.value,
            error: !(typeof (number.value) === 'number')
        })

        birthdateSet({
            value: birthdate.value,
            error: !(validateBirthdate(birthdate.value))
        })

        passwordSet({
            value: password.value,
            error: password.value.length < 8
        })

        return !!name.value
            && validateEmail(email.value)
            && (/^[0-9]{11}$/.test(cpf.value) && validateCpf(cpf.value))
            && typeof (cep.value) === 'number'
            && !!street.value
            && !!neighbour.value
            && !!city.value
            && !!uf.value
            && typeof (number.value) === 'number'
            && validateBirthdate(birthdate.value)
            && password.value.length >= 8
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
                        name: 'Register'
                    }
                ]}
            />

            <div className='registerContainer'>
                <div className='fields'>
                    <div>
                        <h3>Details</h3>
                    </div>

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
                        <h2>Password</h2>
                        <input
                            className={password.error ? 'error' : ''}
                            placeholder='Password'
                            value={password.value}
                            type='password'
                            onChange={(e) => passwordSet({ value: e.target.value, error: false })}
                        />
                    </div>
                    <div className='fieldLine'>
                        <h2>Cpf</h2>
                        <input
                            className={cpf.error ? 'error' : ''}
                            placeholder='Cpf'
                            type='number'
                            value={cpf.value}
                            onChange={(e) => cpfSet({ value: e.target.value, error: false })}
                        />
                    </div>
                    <div className='fieldLine'>
                        <h2>Birthdate</h2>
                        <input
                            className={birthdate.error ? 'error' : ''}
                            placeholder='Birthdate'
                            value={birthdate.value}
                            onChange={(e) => birthdateSet({ value: e.target.value, error: false })}
                        />
                    </div>

                    <div>
                        <h3>Address</h3>
                    </div>

                    <div className='fieldLine'>
                        <h2>Cep</h2>
                        <input
                            className={cep.error ? 'error' : ''}
                            placeholder='Cep'
                            value={cep.value}
                            type='number'
                            onChange={(e) => cepSet({ value: parseInt(e.target.value) ? parseInt(e.target.value) : null, error: false })}
                        />
                    </div>
                    <div className='fieldLine'>
                        <h2>Street</h2>
                        <input
                            className={`${street.error ? 'error' : ''}` + `${addressDisabled ? 'disabled' : ''}`}
                            placeholder='Street'
                            value={street.value}
                            disabled={addressDisabled}
                            onChange={(e) => streetSet({ value: e.target.value, error: false })}
                        />
                    </div>
                    <div className='fieldLine'>
                        <h2>Neighbour</h2>
                        <input
                            className={`${neighbour.error ? 'error' : ''}` + `${addressDisabled ? 'disabled' : ''}`}
                            placeholder='Neighbour'
                            value={neighbour.value}
                            disabled={addressDisabled}
                            onChange={(e) => neighbourSet({ value: e.target.value, error: false })}
                        />
                    </div>
                    <div className='fieldLine'>
                        <h2>City</h2>
                        <input
                            className={`${city.error ? 'error' : ''}` + `${addressDisabled ? 'disabled' : ''}`}
                            placeholder='City'
                            value={city.value}
                            disabled={addressDisabled}
                            onChange={(e) => citySet({ value: e.target.value, error: false })}
                        />
                    </div>
                    <div className='fieldLine'>
                        <h2>UF</h2>
                        <input
                            className={`${uf.error ? 'error' : ''}` + `${addressDisabled ? 'disabled' : ''}`}
                            placeholder='UF'
                            value={uf.value}
                            disabled={addressDisabled}
                            onChange={(e) => ufSet({ value: e.target.value, error: false })}
                        />
                    </div>
                    <div className='fieldLine'>
                        <h2>Number</h2>
                        <input
                            className={number.error ? 'error' : ''}
                            placeholder='Number'
                            value={number.value}
                            type='number'
                            onChange={(e) => numberSet({ value: parseInt(e.target.value) ? parseInt(e.target.value) : null, error: false })}
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