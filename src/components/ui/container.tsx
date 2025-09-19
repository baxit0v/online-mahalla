import type { PropsWithChildren } from 'react'

type Props = {
    className?: string
} & PropsWithChildren

export const Container = ({ className = '', children }: Props) => {
    return <div className={`max-w-7xl mx-auto px-4 lg:px-8 ${className}`}>{children}</div>
}
