import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import firebase from 'firebase/app';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    } 

    render() {
        return (
            <div className="container">
                <nav id="home-nav" className="navbar navbar-light bg-light justify-content-between">
                    <a className="navbar-brand" href="#">Learn about what we do:</a>
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item">
                            <a className="nav-link active" href="#overview">Overview</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#how">How it works</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contribute">Contribute</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#generate">Generate</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About Us</a>
                        </li>
                    </ul>
                </nav>
                <div data-spy="scroll" data-target="#home-nav" data-offset="0" className="d-flex flex-column">
                    <div id="overview" className="d-flex flex-column">
                        <h4 className="align-self-start">Overview</h4>
                        <p align="left">Give us some content, tell us what it's like. Or, tell us what you want, and we'll give you some content. It's just that easy.</p>
                    </div>
                    <div id="how" className="d-flex flex-column">
                        <h4 className="align-self-start">How it works</h4>
                        <p align="left">Phasellus mattis metus dui, ac accumsan arcu bibendum et. Ut facilisis mattis scelerisque. Proin ac lorem ac ex ultrices malesuada sed non sem. Phasellus diam ipsum, dignissim at aliquet id, bibendum vel sapien. Duis ullamcorper libero convallis, pellentesque nunc quis, dictum tortor. Pellentesque id nulla id ante ultricies venenatis. Morbi mattis leo at tellus ultricies feugiat non quis massa. Mauris consectetur, felis id rutrum tristique, mi arcu ultrices tellus, et elementum libero ex at neque. Sed ullamcorper cursus purus, eu egestas ligula convallis eu. Sed molestie ante a sem malesuada, ut tempor quam varius. Vivamus dictum quam tortor, ac bibendum mauris ultrices vitae.</p>
                    </div>
                    <div id="contribute" className="d-flex flex-column">
                        <h4 className="align-self-start">Contribute</h4>
                        <p align="left">Aliquam ac sem sit amet velit porttitor vulputate scelerisque vel orci. Sed mi risus, molestie nec lectus scelerisque, egestas euismod lacus. Phasellus ac pulvinar sem. Morbi porttitor fermentum justo. Curabitur massa risus, imperdiet id libero eget, lacinia pulvinar lectus. Ut finibus metus non lectus dictum, vitae mattis ipsum tincidunt. Integer a bibendum purus. In vulputate nisi nisi, ac ultricies tortor iaculis vitae. Donec suscipit nunc in nulla pellentesque, ac eleifend eros varius. Nullam sodales tellus sit amet sapien dignissim pellentesque. Nunc a convallis libero. In volutpat tempor sapien vel pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas eget accumsan nulla. Donec fringilla blandit feugiat. Cras pretium justo vel risus bibendum euismod vitae eget justo.</p>
                    </div>
                    <div id="generate" className="d-flex flex-column">
                        <h4 className="align-self-start">Generate</h4>
                        <p align="left">Fusce gravida magna a maximus aliquam. Quisque at venenatis odio. Nullam at sagittis magna, ac pulvinar tortor. Aenean laoreet nunc nec ex tempor, nec fringilla urna malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi in magna nec est porta ornare nec sed augue. Maecenas gravida porttitor nisl, ut hendrerit velit egestas a. Etiam luctus, velit eget congue rutrum, sapien leo imperdiet mauris, eget dapibus lacus mi ut purus. Aliquam sagittis dapibus velit, vel interdum lacus mollis nec. Aenean ac ex congue, fermentum est et, molestie massa. Ut condimentum, arcu et rutrum iaculis, arcu velit varius orci, id lobortis augue tellus nec urna. Aenean ut lacus consequat mi tristique viverra. Etiam sed libero sit amet leo vehicula dignissim id non nibh. Curabitur gravida viverra metus quis tempor. Phasellus venenatis nulla nec euismod tristique. Nulla sollicitudin orci nec dolor vulputate ornare.</p>
                    </div>
                    <div id="about" className="d-flex flex-column">
                        <h4 className="align-self-start">About Us</h4>
                        <p align="left">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean vitae pulvinar nisl, a mattis erat. Aenean neque lectus, fermentum non porta sed, lacinia vitae leo. Donec et tincidunt nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vehicula eget eros a interdum. Fusce varius sit amet sem non porta. Maecenas convallis mauris enim, nec tincidunt risus ultrices id. Nunc ultricies, metus at lacinia porta, orci odio congue orci, nec scelerisque arcu nulla et tortor. Morbi tincidunt volutpat metus. Vestibulum mollis vulputate mauris, non dignissim sapien cursus at. Nulla ut justo vel tortor gravida ultrices a et eros. Ut scelerisque lacinia nunc. Aenean libero purus, consequat ac posuere in, gravida eu nibh. Fusce non iaculis nisl.</p>
                    </div>
                </div>
            </div>
        )
    }
}
