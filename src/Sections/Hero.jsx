import { Element, Link as LinkScroll } from 'react-scroll'
import Button from '../components/Button'

function Hero() {
    return (
        <section className=' relative pt-60 pb-40 max-lg:pt-2 max-lg:pb-36 max-md:pt-36 max-md:pb-32'>
            <Element name='hero'>
                <div className=' container'>
                    <div className=' relative z-2 max-w-512 max-lg:max-w-388'>
                        <div className=' caption small-2 uppercase text-p3'>
                            Video editing
                        </div>
                        <h1 className=' mb-6 h1 uppercase text-p4 max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12'>
                            Amazingly simple
                        </h1>
                        <p className=' max-w-440 mb-14 body-1 max-md:mb-10'>we designed XORA Ai video Editor to be an easy to use ,wquick to learn, and surprisingly powerful</p>
                        <LinkScroll to='features' offset={-100} spy={true} smooth={true}>
                            <Button icon='/public/images/zap.svg'>
                                Try it now
                            </Button>
                        </LinkScroll>
                    </div>
                    <div className=' absolute -top-32 left-[calc(50%-380px)] w-[1230px] pointer-events-none hero-img_res'>
                        <img src="/public/images/hero.png" alt="/public/images/hero.png" className=' size-1230 max-lg:h-auto' />
                    </div>
                </div>
            </Element>
        </section>
    )
}

export default Hero
