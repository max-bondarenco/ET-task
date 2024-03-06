import { useEffect, useRef, useState } from 'react'
import { func } from 'prop-types'

const ReCaptcha = ({ callback }) => {
    const recaptchaRef = useRef(null)
    const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false)
    const [isRecaptchaRendered, setIsRecaptchaRendered] = useState(false)

    const onRecaptchaLoad = () => {
        setIsRecaptchaLoaded(true)
    }

    useEffect(() => {
        window.onRecaptchaLoad = onRecaptchaLoad
        if (!window.grecaptcha) {
            const script = document.createElement('script')
            script.src =
                'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit'
            script.async = true
            script.defer = true
            document.head.appendChild(script)
        } else {
            setIsRecaptchaLoaded(true)
        }

        return () => {
            window.onRecaptchaLoad = null
        }
    }, [])

    useEffect(() => {
        if (isRecaptchaLoaded && !isRecaptchaRendered) {
            window.grecaptcha.render(recaptchaRef.current, {
                sitekey: '6Lc4n44pAAAAAIAaoLyUr8cxt2mdUIPqKI0qdPtV',
                callback,
            })
            setIsRecaptchaRendered(true)
        }
    }, [isRecaptchaLoaded, isRecaptchaRendered, callback])

    return <div ref={recaptchaRef} />
}

ReCaptcha.propTypes = {
    callback: func,
}

export default ReCaptcha
