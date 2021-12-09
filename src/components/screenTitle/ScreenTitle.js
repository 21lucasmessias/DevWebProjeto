import React from 'react'
import './ScreenTitle.css'

const ScreenTitle = ({ title, breadcrumb, subtitle }) => {
    return (
        <div className='screenTitle'>
            <h3>{title}</h3>
            <div className='breadcrumb'>
                {breadcrumb.map(({ name, onClick }, index) => {
                    if (index === 0) {
                        return <h2 key={index} onClick={onClick}>{name}</h2>
                    } else if (index === breadcrumb.length - 1) {
                        return (
                            <div key={index}>
                                <h1>{'>'}</h1>
                                <h2 className='active'>{name}</h2>
                            </div>
                        )
                    }

                    return (
                        <div key={index}>
                            <h1>{'>'}</h1>
                            <h2 onClick={onClick} className='active'>{name}</h2>
                        </div>
                    )

                })}
            </div>
            {subtitle && <h1>{subtitle}</h1>}
        </div>
    )
}

export default ScreenTitle
