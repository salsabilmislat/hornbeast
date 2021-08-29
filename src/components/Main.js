import React from 'react';
import HornedBeasts from './HornedBeast';

class Main extends React.Component {
    render() {
        return (
            <main>
                <HornedBeasts
                    titel="UniWhal"
                    description="A unicorn and a narwhal nuzzling their horns"
                    imageUrl='http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
                />

                <HornedBeasts
                    titel="Rhino Family"
                    description="Mother (or father) rhino with two babies"
                    imageUrl='https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80'
                />

                <HornedBeasts
                    titel="Unicorn Head"
                    description="Someone wearing a creepy unicorn head mask"
                    imageUrl='https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg'
                />
            </main>
        )
    }
}

export default Main;