import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const navIcon = [
    { src: 'assets/icons/search.svg', alt: 'search' },
    { src: 'assets/icons/black-heart.svg', alt: 'heart' },
    { src: 'assets/icons/user.svg', alt: 'user' }
]

const Navbar = () => {
    return (
        <header className='w-full'>
            <nav className="nav">
                <Link className='flex items-center gap-1' rel="stylesheet" href="/" >
                    <Image src={'/assets/icons/logo.svg'} alt={''} width={27} height={27} />
                    <p className='nav-logo'>Price<span className='text-primary'>Wise</span>
                    </p>
                </Link>
                <div className="flex items-center gap-5">
                    {navIcon.map((icon) => (
                        <Image key={icon.alt}
                            src={icon.src}
                            alt={icon.alt}
                            width={28}
                            height={28}
                            className='object-contain'
                        />
                    ))}
                </div>

            </nav>
        </header>


    )
}

export default Navbar