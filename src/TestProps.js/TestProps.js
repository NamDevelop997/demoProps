import React, { Component } from 'react'
import PropsChild from './PropsChild'

export default class TestProps extends Component {
    src = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9b549997-21e7-4ab6-87bd-b1851c181cf0/air-force-1-07-lx-shoe-LBkqcm.jpg";
    fullName = "Ma Van Nam";
    price = 399;
    render() {
        return (
            <div className = "mx-auto">
                <PropsChild src={this.src} fullName={this.fullName} price = {this.price} />
            </div>
        )
    }
}
