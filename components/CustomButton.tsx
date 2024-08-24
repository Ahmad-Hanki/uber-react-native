import { ButtonProps } from '@/types/type';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';


const getBackgroundColor = (variant:ButtonProps['bgVariant']) => {
    switch (variant) {
        case 'secondary' :
            return 'bg-gray-500'
        case 'danger' :
            return 'bg-red-500'
        case 'success' :
            return 'bg-green-500'
        case 'outline' :
            return 'bg-transparent border-neutral-300 border-[0.5px]'
         default :
            return 'bg-[#0286ff]'
    }
}

const getTextColor = (variant:ButtonProps['textVariant']) => {
    switch (variant) {
        case 'primary' :
            return 'text-black'
        case 'danger' :
            return 'text-red-100'
        case 'success' :
            return 'text-green-500'
        case 'secondary' :
            return 'text-gray-100'
         default :
            return 'text-white'
    }
}

const CustomButton = ({ IconLeft, IconRight, bgVariant = 'primary', className, onPress,textVariant = 'default', title, ...props}:ButtonProps) => {
    return (
        <TouchableOpacity
        {...props}
        onPress={onPress}
        className={`w-full rounded-full flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 p-3 ${getBackgroundColor(bgVariant)} ${className}`}
        >
            {IconLeft && <IconLeft/>}
            <Text className={`text-lg font-bold ${getTextColor(textVariant)}`}>
                {title}
            </Text>
            {IconRight && <IconRight/>}
        </TouchableOpacity>
    );
}


export default CustomButton;
