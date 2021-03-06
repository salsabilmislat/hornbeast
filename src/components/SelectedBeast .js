import React from 'react';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
    render() {
        // console.log (this.props.selctedImage)
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.selctedImage.title}</Modal.Title>
                    
                </Modal.Header>
                <Modal.Body>{this.props.selctedImage.description}</Modal.Body>
                <img  className="imgModal" src={this.props.selctedImage.image_url}/>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={()=>this.props.handleClose()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>this.props.handleClose()}>
                        Save Changes
                    </Button> */}
                </Modal.Footer>
            </Modal>
        );
    }
}
export default SelectedBeast;