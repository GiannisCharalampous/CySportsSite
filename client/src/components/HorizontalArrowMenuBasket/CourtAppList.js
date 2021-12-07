import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import courtAvatar from '../../images/BasketballCourt.jpg';

import './Style.css';

// list of items
const list = [
    { name: <img className="img2" src={courtAvatar} alt=""/> },
    { name: <img className="img2" src={courtAvatar} alt=""/> },
    { name: <img className="img2" src={courtAvatar} alt=""/> },
    { name: <img className="img2" src={courtAvatar} alt=""/> },
    { name: <img className="img2" src={courtAvatar} alt=""/> },
    { name: <img className="img2" src={courtAvatar} alt=""/> },
];

// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
    return <div
        className={`menu-item-Court ${selected ? 'active' : ''}`}
    >{text}</div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
    list.map((el, index) => {
        const { name } = el;

        return <MenuItem text={name} key={index} selected={selected} />;
    });

const Arrow = ({ text, className }) => {
    return (
        <div style={{fontSize: '50px', paddingLeft: '60px'}}
            className={className}
        >{text}</div>
    );
};


const ArrowLeft = Arrow({ text: '«', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '»', className: 'arrow-next' });

const selected = <img src={courtAvatar} alt="" />;

class CourtAppList extends Component {
    constructor(props) {
        super(props);
        // call it again if items count changes
        this.menuItems = Menu(list, selected);
    }

    state = {
        selected
    };

    onSelect = key => {
        this.setState({ selected: key });
    }

    render() {
        const { selected } = this.state;
        // Create menu from items
        const menu = this.menuItems;

        return (
            <div className="App">
                <ScrollMenu
                    data={menu}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    selected={selected}
                    onSelect={this.onSelect}
                />
            </div>
        );
    }
}
export default CourtAppList;