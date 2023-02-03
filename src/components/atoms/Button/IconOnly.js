import React from 'react'
import { TouchableOpacity } from 'react-native'
import { IconBackDark, IconBackLight } from '../../../assets'

const IconOnly = ({onPress, icon}) => {
    const Icon = () => {
        if (icon === 'dark-back') {
            return <IconBackDark/>
        }
        if (icon === 'light-back') {
            return <IconBackLight/>
        }
        return <IconBackDark/>
    }
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <Icon/>
        </TouchableOpacity>
    )
}

export default IconOnly