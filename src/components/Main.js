import React from 'react';
import HornedBeasts from './HornedBeast';

class Main extends React.Component {
    render() {

        let mapArr = this.props.beasts.map(horn => {
            return (
                <HornedBeasts
                    displayData={this.props.displayData}
                    title={horn.title}
                    description={horn.description}
                    image_url={horn.image_url}
                    handleClose={this.props.handleClose}
                    // horns={horn.horns}

                />
            );
            
        })
        console.log(this.props.beasts);
        return (
            <main>
                {mapArr}
            </main>
        );

    }
}

export default Main;